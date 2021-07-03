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
          <a href="https://www.linkedin.com/in/genilson-fernandes-4a5702122/">
            <IconButton>
              <LinkdinIcon />
            </IconButton>
          </a>
        </div>
      </div>
      <a href="https://drive.google.com/file/d/1TM65cvwA3HYEudSzCvisgAFqg385cDjY/view?usp=sharing" target="_blank" rel="noreferrer">
        <SimpleButton> Donwload CV</SimpleButton>
      </a>
    </div>
  );
};

export default ContactBtn;
