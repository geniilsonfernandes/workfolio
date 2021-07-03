import React, { useEffect } from "react";
import { useLocation } from "react-router";

import "../../styles/style-vars.css";

import ProjectInfo from "./ProjectInfo/ProjectInfo";
import GridPhotos from "./GridPhotos/GridPhotos";
import ProjectName from "./ProjectInfo/ProjectName/ProjectName";
import Container from "./../../components/layout/Container";

const ProjectPage = () => {
  //const id = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Container >
      <ProjectName />
      <main>
        <ProjectInfo project={0} />
        <GridPhotos />
      </main>
    </Container>
  );
};

export default ProjectPage;
