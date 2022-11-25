import React from "react";
import styles from './Card.module.css';

const Card = ({ src, alt }) => {
  return (
    <div className={`${styles['card']}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Card;
