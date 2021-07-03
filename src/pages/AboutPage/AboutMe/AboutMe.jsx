import React from "react";
import ContactBtn from "../../../components/Buttons/ContactBtn/ContactBtn";

import style from "./AboutMe.module.css";

import img from "../../../img/fake.png";

const AboutMe = () => {
  return (
    <div className={style.about}>
      <div className={style.left}>
        <div className={style.about__name}>
          <div className={style.about__photo}>
            <img src={img} alt="" />
          </div>
          <div className={style.about__info}>
            <h1>Project Overview</h1>
            <p>Adding features to an existing app</p>
          </div>
        </div>
        <div className={style.about__text}>
          <p>
            enmo was founded in 2009 by two former college roommates who wanted a better
            way to pay each other back. What started off as a simple SMS platform to send
            and receive money has evolved into a social payments app allowing people to
            split bills, pay each other back for rent, and make purchases at approved
            merchants.
          </p>
        </div>
        <div className={style.btn}>
          <ContactBtn />
        </div>
      </div>

      <div className={style.right}>
        <div className={style.photo}>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
