import React from "react";
import style from "./Works.module.css";
import WorkCard from "./WorkCard/WorkCard";
import Container from "../../../components/layout/Container";
import portfolio from "../../../json/portfolio.json";
const Works = () => {
  return (
    <Container>
      <div className={style.work__grid}>
        {portfolio.map((project) => (
          <WorkCard
            key={project.id}
            id={project.id}
            name={project.name}
            cover={project.cover_photo}
            objectives={project.objectives}
            overview={project.project__overview}
          />
        ))}
      </div>
    </Container>
  );
};

export default Works;
