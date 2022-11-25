import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className={`${styles["footer"]}`}>
        <img className={`${styles["logo"]}`} src={logo} alt="logo" />
        <h3>Owls is a collection of 50 NFTs</h3>
        <p>© 2022</p>
    </div>
  );
};

export default Footer;
