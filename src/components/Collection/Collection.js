import React from "react";
import Card from "../Card/Card";
import styles from "./Collection.module.css";
import uno from "../../assets/outputs/images/1.png";
import dos from "../../assets/outputs/images/2.png";
import tres from "../../assets/outputs/images/3.png";
import cuatro from "../../assets/outputs/images/4.png";
import cinco from "../../assets/outputs/images/5.png";
import seis from "../../assets/outputs/images/6.png";
import siete from "../../assets/outputs/images/7.png";
import ocho from "../../assets/outputs/images/8.png";
import nueve from "../../assets/outputs/images/9.png";
import diez from "../../assets/outputs/images/10.png";
import once from "../../assets/outputs/images/11.png";
import doce from "../../assets/outputs/images/12.png";

const previewNFTs = [
  { src: uno, alt: "Owl #01" },
  { src: dos, alt: "Owl #02" },
  { src: tres, alt: "Owl #03" },
  { src: cuatro, alt: "Owl #04" },
  { src: cinco, alt: "Owl #05" },
  { src: seis, alt: "Owl #06" },
  { src: siete, alt: "Owl #07" },
  { src: ocho, alt: "Owl #08" },
  { src: nueve, alt: "Owl #09" },
  { src: diez, alt: "Owl #10" },
  { src: once, alt: "Owl #11" },
  { src: doce, alt: "Owl #12" },
];

const Collection = () => {
  return (
    <div>
      <div className={`${styles["collection"]}`} id="collection">
        <marquee direction="left" height="650" width="100%">
          {previewNFTs.map((item, index) => {
            return <Card key={index} src={item.src} alt={item.alt} />;
          })}
        </marquee>
      </div>
    </div>
  );
};

export default Collection;
