import React from "react";
import ContactBtn from "../../../components/Buttons/ContactBtn/ContactBtn";

import style from "./AboutMe.module.css";

import img from "../../../img/portfolio__foto.jpg";

const AboutMe = () => {
  return (
    <div className={style.about}>
      <div className={style.left}>
        <div className={style.about__name}>
          <div className={style.about__photo}>
            <img src={img} alt="" />
          </div>
          <div className={style.about__info}>
            <h1>Genilson fernandes</h1>
            <p>Designer/Front end</p>
          </div>
        </div>
        <div className={style.about__text}>
          <p>
            Sou um Designer-UI/Front end criativo e corajoso para novos desafios. Atualmente meus interesses são na área
            da tecnologia e inovação onde então venho estudando, sempre me mantendo informado e atualizado com mais
            recentes e eficazes tecnologias do mercado.
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
