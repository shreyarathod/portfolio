import React from "react";
import styles from "./About.module.css";
import Skillcards from "../skillcards/Skillcards";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import profile from "/src/assets/images/profile.jpg";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className={styles.about_section}>
      <div className={styles.top_section} id="about">
        <div className={styles.text_section} data-aos="fade-right">
          <div className={styles.heading_text}>
            <h1>About Me</h1>
          </div>
          <div className={styles.text1}>
            <h2>Hi! I am Shreya Rathod.</h2>
          </div>

          <div className={styles.text2}>
            <p>
              Welcome to my portfolio! I'm a second-year student at Sardar Patel
              Institute of Technology, specializing in web development and
              actively acquiring knowledge in machine learning. Dive into my
              projects as I merge creativity with technology.
            </p>
          </div>
          <div className={styles.resume_button}>
            <a
              href="https://drive.google.com/file/d/12zqeQCreGSrLptacOG_pNy7g9P4YJ6Q1/view?usp=drive_link"
              class="relative px-8 py-3 overflow-hidden font-medium text-black bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
            >
              <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-black group-hover:h-full ease"></span>
              <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-black opacity-0 group-hover:opacity-100"></span>
              <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                Resume
              </span>
            </a>
          </div>
        </div>

        <div className={styles.image_section} data-aos="zoom-in-up">
          <div>
            <img src={profile} className={styles.image}></img>
          </div>
        </div>
      </div>
      <div className={styles.bottom_section}>
        <div className={styles.skills_section} id="skills">
          <h1>Skills</h1>
          <div className={styles.skillcards}>
            <Skillcards className={styles.cards}></Skillcards>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
