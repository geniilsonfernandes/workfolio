import React from "react";
import Container from "../../../components/layout/Container";
import SimpleButton from "../../../components/Buttons/SimpleButton/SimpleButton";
//css
import styles from "./Header.module.css";
const Header = () => {
  return (
    <Container>
      <header className={styles.header}>
        <div className={styles.header__content}>
          <h1>
            Hey, I'm Front End <br />
            <span> {`<`}</span>Developer <span>{`/>`}</span>.
          </h1>
          <p>
            Hi, G I'm \\ a freelance web designer from San-Francisco. I help brands turn their ideas into high quality
            products.
          </p>
        </div>
        <div className={styles.btn__group}>
          <SimpleButton>Veja meus trabalhos!</SimpleButton>
        </div>
      </header>
    </Container>
  );
};

export default Header;
