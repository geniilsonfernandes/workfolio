import React from "react";

import ContactBtn from "../Buttons/ContactBtn/ContactBtn";
import Container from "../layout/Container";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <Container>
      <section className={style.footer}>
        <div className={style.info}>
          <h2>Minhas Redes Sociais</h2>
        </div>
        <div className={style.contact}>
          <ContactBtn />
        </div>
      </section>
    </Container>
  );
};

export default Footer;
