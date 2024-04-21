import React from "react";
import styles from "./Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import laptop from "/src/assets/images/laptop_final2.png";

function Home() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className={styles.home_page} id="home">
      <div className={styles.home_main_section}>
        <div
          className={`${styles.left_text} ${styles.text_container}`}
          data-aos="fade-right"
        >
          <h1>UI/UX Developer</h1>
          <p>
            Front-end web developer crafting user-friendly websites with sleek
            designs and smooth functionality.
          </p>
        </div>
        <div className={styles.image_section} data-aos="fade-down">
          <img src={laptop} alt="laptop-image"></img>
        </div>
        <div
          className={`${styles.right_text} ${styles.text_container}`}
          data-aos="fade-left"
        >
          <h1>ML Enthusiast</h1>
          <p>
            Dedicated machine learning enthusiast with a pursuit of harnessing
            data-driven insights.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
