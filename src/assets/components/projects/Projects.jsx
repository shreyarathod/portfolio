import React from "react";
import styles from "./Projects.module.css";
import Projectcard from "../Projectcards/Projectcard";

function Projects() {
  return (
    <div className={styles.projects_section} id="projects">
      <div className={styles.heading}>
        <h1>Projects</h1>
      </div>
      <div className={styles.cards_section}>
        <Projectcard
          type={"Machine Learning"}
          title={"Malaria Detection Using Blood Cell Images"}
          image={"../src/assets/images/card1.jpg"}
          link={"https://github.com/shreyarathod/machine-learning"}
        ></Projectcard>

        <Projectcard
          type={"Machine Learning"}
          title={"Indian Sign Language Interpreter(CNN Model)"}
          image={"../src/assets/images/card2.png"}
          link={"https://github.com/shreyarathod/ISL-model"}
        ></Projectcard>

        <Projectcard
          type={"Machine Learning"}
          title={"Linear Regression Model for Second Hand Car Price Prediction"}
          image={"../src/assets/images/card3.jpg"}
          link={"https://github.com/shreyarathod/machine-learning"}
        ></Projectcard>
        <Projectcard
          type={"Web Development"}
          title={"Indian Sign Language Interpreter(FrontEnd Website)"}
          image={"../src/assets/images/card4.jpg"}
          link={"https://isl-frontend.netlify.app/"}
        ></Projectcard>

        <Projectcard
          type={"Web Development"}
          title={"Weather Generator using API"}
          image={"../src/assets/images/card5.jpg"}
          link={"https://shreyarathod.github.io/Weather-Generator/"}
        ></Projectcard>
        <Projectcard
          type={"Web Development"}
          title={"Amazon CLone (FrontEnd)"}
          image={"../src/assets/images/card6.png"}
          link={"https://shreyarathod.github.io/Amazon-Clone/"}
        ></Projectcard>
      </div>
    </div>
  );
}

export default Projects;
