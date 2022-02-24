import React from "react";
import Card from "../Card/Card";
import styles from "./Projects.module.css";
import reviewui from "../assest/reviewui.JPG";
import weather from "../assest/weather.JPG";
import trelloclone from "../assest/trelloclone.JPG";

function Projects() {
  const projectList = [
    {
      id: 1,
      projectName: "Form App (Review)",
      src: "/ReviewUI",
      image: reviewui,
      externalLink: false,
    },
    {
      id: 2,
      projectName: "Weather Forcast API",
      src: "/weather",
      image: weather,
      externalLink: true,
    },
    {
      id: 3,
      projectName: "Trello Clone (Uncomplete)",
      src: "/trelloClone",
      image: trelloclone,
      externalLink: true,
    },
  ];

  return (
    <>
      <div className={styles.conatainer}>
        {projectList.map((projectItem, index) => (
          <Card key={index} projectItem={projectItem} />
        ))}
      </div>
    </>
  );
}

export default Projects;
