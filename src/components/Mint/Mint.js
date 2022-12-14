import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import {
  useAddress,
  useWalletProvider,
  useBalance,
} from '../../contexts/OnboardContext';
import { factoryAddress, factoryAbi } from '../../services/onboard/contract';

const Mint = () => {
  const address = useAddress();
  const balance = useBalance();
  const provider = useWalletProvider();
  const web3 = new Web3(provider);

  const [userBalance, setUserBalance] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);
  const [mintStatus, setMintStatus] = useState(`Waiting`);

  useEffect(() => {
    if (address) {
      if (balance) {
        const valueEth = web3.utils.fromWei(`${balance}`, 'ether');
        const totalFixed = parseFloat(valueEth).toFixed(4);
        setUserBalance(totalFixed);
      }
    } else {
      setUserBalance(0);
    }
  }, [web3.utils, balance, address]);

  useEffect(() => {
    const getPrice = async () => {
      const myContract = new web3.eth.Contract(factoryAbi, factoryAddress);
      const price = await myContract.methods
        .monsterPrice()
        .call()
        .catch(function (error) {
          return false;
        });

      const valueEth = web3.utils.fromWei(`${price || 0}`, 'ether');

      setTokenPrice(valueEth);
    };
    getPrice();
  });

  const handleMint = async () => {
    console.log('MINT!');
    try {
      const myContract = new web3.eth.Contract(factoryAbi, factoryAddress);

      const saleStarted = await myContract.methods
        .saleStarted()
        .call()
        .catch(function (error) {
          return false;
        });

      const publicSaleStarted = await myContract.methods
        .merkleEnabled()
        .call()
        .catch(function (error) {
          return false;
        });

      const price = await myContract.methods
        .monsterPrice()
        .call()
        .catch(function (error) {
          return false;
        });

      setTokenPrice(price);

      console.log('Sale Started', saleStarted);
      console.log('Sale Started', publicSaleStarted);
      console.log('Price', price);

      const count = 1;

      const mintParams = {
        proof: ['0x0000000000000000000000000000000000000000'],
        leaf: '0x0000000000000000000000000000000000000000',
        count,
      };

      const total = parseInt(count) * parseFloat(price);
      // const totalFixed = parseFloat(total.toFixed(4));
      // const valueEth = web3.utils.toWei(`${totalFixed}`, 'ether');

      await myContract.methods
        .mint(mintParams.proof, mintParams.leaf, parseInt(mintParams.count))
        .send({ from: address, value: total })
        .once('transactionHash', function (hash) {
          setMintStatus(`userConfirmed`);
          console.log('Transaction Hash', hash);
        })
        .once('receipt', function (receipt) {
          setMintStatus(`blockchainConfirmed`);
          console.log('Transaction Confirmed', receipt);
        })
        .on('error', function (error, receipt) {
          console.log('Error', error);
          setMintStatus(`error`);
        });
    } catch (error) {}
  };
  return (
    <>
      {address && (
        <div className='wallet-client'>
          <p>Balance {userBalance} eth</p>
          <p>Price {tokenPrice} eth</p>
          <button disabled={!address ? true : false} onClick={handleMint}>
            Mint
          </button>
          <p>
            {mintStatus === `userConfirmed` && `User confirmed`}
            {mintStatus === `blockchainConfirmed` && `Blockchain Confirmed`}
            {mintStatus === `error` && `Error`}
          </p>
        </div>
      )}
      {!address && (
        <div className='wallet-client'>
          <p>CONNECT WALLET</p>
        </div>
      )}
    </>
  );
};

export default Mint;
