import React from "react";
import style from "./ContactBtn.module.css";
import IconButton from "./../IconButton/IconButton";
import { InstagramIcon, LinkdinIcon } from "../../icons/IconsComponet";
import SimpleButton from "./../SimpleButton/SimpleButton";
const ContactBtn = () => {
  return (
    <div className={style.btn}>
      <div className={style.icon__group}>
        <div className={style.icon}>
          <a href="https://www.instagram.com/geecods/">
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </a>
        </div>
        <div className={style.icon}>
          <a href="https://www.linkedin.com/in/genilson-fernandes/">
            <IconButton>
              <LinkdinIcon />
            </IconButton>
          </a>
        </div>
      </div>
      <a href="https://www.figma.com/file/wcIrNZcWWMqLYn7Ujwxd8Z/Genilson---cv?node-id=0%3A1" target="_blank" rel="noreferrer">
        <SimpleButton> Donwload CV</SimpleButton>
      </a>
    </div>
  );
};

export default ContactBtn;
