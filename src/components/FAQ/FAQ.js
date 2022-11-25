import React from "react";
//import Question from "../Question/Question";
import styles from "./FAQ.module.css";

const FAQ = ({ dataFAQ }) => {
  return (
    <div className={`${styles["faq"]}`} id="FAQ">

      <h2>FAQ</h2>
      <h3>Frequently Asked Questions</h3>
      <b>What is the concept behind this project?</b>
      <p>
        In the face of All-Hallows Eve and Halloween our creators came up with a
        character that celebrates all spooky things.
      </p>
      <b>Who's behind the project?</b>
      <p>Our names are X and Y and we are developers and designers, sort of.</p>
      <b>What does "Minting a NFT" mean?</b>
      <p>
        Non-Fungible Tokens are one-of-a-kind tokens that represent a unique
        good or asset, like digital art.
      </p>
    </div>
  );
};

export default FAQ;
