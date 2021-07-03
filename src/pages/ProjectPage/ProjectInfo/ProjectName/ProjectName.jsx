import React from "react";

import style from "./Projectname.module.css";
const ProjectName = ({ name, subName }) => {
  return (
    <header className={style.project__name}>
      <h1>{name}</h1>
      <p>{subName}</p>
    </header>
  );
};

export default ProjectName;
