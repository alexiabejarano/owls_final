import React from "react";
import {
  useAddress,
  useOnboard,
  useWallet,
} from "../../contexts/OnboardContext";
import { truncateWeb3Address } from "../../services/onboard/helpers";
import WalletButton from "../WalletButton/WalletButton";

const WalletClient = () => {
  const onboard = useOnboard();
  const wallet = useWallet();
  const address = useAddress();

  return onboard ? (
    <div className="wallet-client">
      {!wallet.provider ? (
        <div>
          <h4>Connect to Wallet!</h4>
          <p>Please connect your preferred wallet to use the app.</p>
        </div>
      ) : (
        <div>
          <div>
            {wallet.icons && (
              <img src={wallet.icons.iconSrc} alt={wallet.name} />
            )}
          </div>
          <div>
            <h4>Connected with {wallet.name}</h4>
            {address ? (
              <p>{truncateWeb3Address(address)}</p>
            ) : (
              <p>Please connect your {wallet.name} wallet to use the app.</p>
            )}
          </div>
        </div>
      )}
      <WalletButton />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default WalletClient;
