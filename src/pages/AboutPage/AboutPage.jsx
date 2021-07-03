import React from "react";
import styles from "./AboutPage.module.css";
import AboutMe from "./AboutMe/AboutMe";
import CardSkill from "./CardSkill/CardSkill";
import Container from "./../../components/layout/Container";
const AboutPage = () => {
  return (
    <Container>
      <header className={styles.about}>
        <h1>
          <span>{`<`}</span> Sobre <span>{`/>`}</span>
        </h1>
      </header>
      <main className={global.mwfit}>
        <AboutMe />
        <div className={styles.skill}>
          <h2>
            <span>{`< `}</span>skill<span>{` />`}</span>
          </h2>
          <div className={styles.card__grid}>
            <CardSkill title="UI Design" />
            <CardSkill title="HTML" />
            <CardSkill title="JavaScript" />
            <CardSkill title="CSS" />
            <CardSkill title="React js" />
          </div>
        </div>
      </main>
    </Container>
  );
};

export default AboutPage;
