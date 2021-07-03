import React from "react";
import Container from "../../../components/layout/Container";
//css
import styles from "./Header.module.css";
const Header = () => {
  return (
    <Container>
      <header className={styles.header}>
        <div className={styles.header__content}>
          <h1>
            Ola! me chamo <br />
            <span> {`<`}</span>Genilson <span>{`/>`}</span>.
          </h1>
          <p>Sou um Designer-UI/Front end criativo e corajoso para novos desafios.</p>
        </div>
      </header>
    </Container>
  );
};

export default Header;
