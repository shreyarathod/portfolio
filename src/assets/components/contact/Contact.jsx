import React from "react";
import styles from "./Contact.module.css";
import Contactpage from "./Contactpage.jsx";

function Contact() {
  return (
    <div className={styles.contact_section} id="contact">
      <div className={styles.lets_connect}>
        <h1>Contact Me</h1>
      </div>
      <div className={styles.contact_form}>
        <Contactpage></Contactpage>
      </div>
    </div>
  );
}

export default Contact;
