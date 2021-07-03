import React, { useEffect } from "react";
import { useLocation } from "react-router";
import "../../styles/style-vars.css";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import GridPhotos from "./GridPhotos/GridPhotos";
import ProjectName from "./ProjectInfo/ProjectName/ProjectName";
import Container from "./../../components/layout/Container";
import { useParams } from "react-router-dom";
import portfolio from "../../json/portfolio.json";
const ProjectPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [project] = portfolio.filter((item) => item.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Container>
      <ProjectName name={project.name} subName={project.sub_name} />
      <main>
        <ProjectInfo {...project} />
        <GridPhotos photo={project.content_photo} />
      </main>
    </Container>
  );
};

export default ProjectPage;
