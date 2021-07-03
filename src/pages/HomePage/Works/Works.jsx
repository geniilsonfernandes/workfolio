import React from "react";
import style from "./Works.module.css";

import WorkCard from "./WorkCard/WorkCard";
import Container from "../../../components/layout/Container";

const Works = () => {
  return (
    <Container>
      <div className={style.work__grid}>
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </Container>
  );
};

export default Works;
