import React from "react";

import style from "./GridPhotos.module.css";

const GridPhotos = () => {
  return (
    <>
      <div className={style.cover}>
        <img src={`${process.env.PUBLIC_URL}/img/fake.png`} alt="" />
      </div>
      <div className={style.legend}>
        <p>
          Design a new personal finance management feature that embeds within the current
          Venmo app and in the operating system of your choice. Make sure it embeds well
          and smoothly with the rest of the app.
        </p>
      </div>
      <div className={style.galery}>
        <div className={style.galery__item}>
          <img src={`${process.env.PUBLIC_URL}/img/fake.png`} alt="" />
        </div>
        <div className={style.galery__item}>
          <img src={`${process.env.PUBLIC_URL}/img/fake.png`} alt="" />
        </div>
      </div>
    </>
  );
};

export default GridPhotos;
