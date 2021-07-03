import React from "react";
import styles from "./ProjectInfo.module.css";
import SimpleButton from "./../../../components/Buttons/SimpleButton/SimpleButton";

const Overview = ({ name, overview }) => {
  return (
    <div className={styles.overview}>
      <h1>{name}</h1>
      <p>{overview}</p>
    </div>
  );
};

const Tag = ({ tagName, info }) => {
  return (
    <div className={styles.tag}>
      <h3>{tagName}</h3>
      <p>{info}</p>
    </div>
  );
};

const ProjectInfo = (props) => {
  const { project__overview, objectives, tags, url } = props;
  return (
    <>
      <div className={styles.project}>
        <div className={styles.left}>
          <div className={styles.project__info}>
            <Overview name="Descrição" overview={project__overview} />
            <Overview name="Objetivo" overview={objectives} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.project__tags}>
            {tags.map((tag) => (
              <Tag key={tag.tag__name} tagName={tag.tag__name} info={tag.info} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.btn}>
        <a href={url} target="_blank" rel="noreferrer">
          <SimpleButton>Ver ao vivo</SimpleButton>{" "}
        </a>
      </div>
    </>
  );
};

export default ProjectInfo;
