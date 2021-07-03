import React from "react";

import style from "./GridPhotos.module.css";

const GridPhotos = ({ photo }) => {
  return (
    <>
      <div className={style.cover}>
        <img src={"../../" + photo} alt="" />
      </div>
    </>
  );
};

export default GridPhotos;
