import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import styles from "./slider.module.css";

const Slider = () => {
  const handelClick = (direction) => {};

  return (
    <div className={styles.container}>
      {/* <div
        className={styles.arrow}
        style={{ left: "10px" }}
        onClick={() => handelClick("left")}
      >
        <ArrowLeftIcon />
      </div> */}
      <div className={styles.wrapper}>
        <div className={styles.slide} style={{ backgroundColor: "#fbf0f4" }}>
          <div className={styles.imageContainer}>
            <img
              src="https://i.ibb.co/cXFnLLV/3.png"
              className={styles.image}
            />
          </div>
          <div className={styles.infoContainer}>
            <h1 className={styles.title}>SUMMER SALE</h1>
            <p className={styles.desc}>
              DON'T COMPROMISE ON STYLE GET FLAT 30% OFF NEW ARRIVAL
            </p>
            <button className={styles.button}>Shop now</button>
          </div>
        </div>

        {/* <div className={styles.slide} style={{ backgroundColor: "#fbf0f4" }}>
          <div className={styles.imageContainer}>
            <img
              src="https://i.ibb.co/DG69bQ4/2.png"
              className={styles.image}
            />
          </div>
          <div className={styles.infoContainer}>
            <h1 className={styles.title}>WINTER SALE</h1>
            <p className={styles.desc}>
              DON'T COMPROMISE ON STYLE GET FLAT 30% OFF NEW ARRIVAL
            </p>
            <button className={styles.button}>Shop now</button>
          </div>
        </div> */}
      </div>
      {/* <div
        className={styles.arrow}
        style={{ right: "10px" }}
        onClick={() => handelClick("right")}
      >
        <ArrowRightIcon />
      </div> */}
    </div>
  );
};

export default Slider;
