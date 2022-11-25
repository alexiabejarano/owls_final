import React from "react";
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={`${styles['hero']}`}>
        <h1>Happy Halloween</h1>
        <h3>
          Get in the spirit of All Hallows Eve and Halloween with our spooky -very on theme- owls.
        </h3>
        <button>MINT NOW</button>
    </div>
  );
};

export default Hero;
