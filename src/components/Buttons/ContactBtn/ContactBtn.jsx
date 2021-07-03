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
          <a href="sad">
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </a>
        </div>
        <div className={style.icon}>
          <a href="sad">
            <IconButton>
              <LinkdinIcon />
            </IconButton>
          </a>
        </div>
      </div>
      <a href="/">
        <SimpleButton> Donwload CV</SimpleButton>
      </a>
    </div>
  );
};

export default ContactBtn;
