import React from "react";
import styles from "./Projects.module.css";
import Projectcard from "../Projectcards/Projectcard";
import Card1 from "/src/assets/images/card1.jpg";
import Card2 from "/src/assets/images/card2.png";
import Card3 from "/src/assets/images/card3.jpg";
import Card4 from "/src/assets/images/card4.jpg";
import Card5 from "/src/assets/images/card5.jpg";
import Card6 from "/src/assets/images/card6.png";

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
          image={Card1}
          link={"https://github.com/shreyarathod/machine-learning"}
        ></Projectcard>

        <Projectcard
          type={"Machine Learning"}
          title={"Indian Sign Language Interpreter(CNN Model)"}
          image={Card2}
          link={"https://github.com/shreyarathod/ISL-model"}
        ></Projectcard>

        <Projectcard
          type={"Machine Learning"}
          title={"Linear Regression Model for Second Hand Car Price Prediction"}
          image={Card3}
          link={"https://github.com/shreyarathod/machine-learning"}
        ></Projectcard>
        <Projectcard
          type={"Web Development"}
          title={"Indian Sign Language Interpreter(FrontEnd Website)"}
          image={Card4}
          link={"https://isl-frontend.netlify.app/"}
        ></Projectcard>

        <Projectcard
          type={"Web Development"}
          title={"Weather Generator using API"}
          image={Card5}
          link={"https://shreyarathod.github.io/Weather-Generator/"}
        ></Projectcard>
        <Projectcard
          type={"Web Development"}
          title={"Amazon CLone (FrontEnd)"}
          image={Card6}
          link={"https://shreyarathod.github.io/Amazon-Clone/"}
        ></Projectcard>
      </div>
    </div>
  );
}

export default Projects;
