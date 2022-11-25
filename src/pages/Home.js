import React from 'react';
import Mint from '../components/Mint/Mint';
import WalletClient from '../components/WalletClient/WalletClient';
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Collection from "../components/Collection/Collection";

const dataNav = [
  { pageName: "Home", route: "." },
  { pageName: "Mint", route: ".modulesContainer" },
  { pageName: "FAQ", route: "#FAQ" },
];

const Home = () => {
  return (
    <>
      <div className='homeContainer'>
      <Header dataNav={dataNav} />
      <Hero />
        <h1>Mint now!</h1>
        <div className='modulesContainer'>
          <WalletClient />
          <Mint />
        </div>
        <Collection />
        <FAQ />
      <Footer />
      </div>
    </>
  );
};

export default Home;




