import React from "react";
import styles from "./Contactpage.module.css";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import Button from "./Button";

function Contactpage() {
  return (
    <div className={`container ${styles.contact_section}`}>
      <div className={styles.contact_image}>
        <img src="../src/assets/images/contact-removebg2.png" alt="image"></img>
      </div>
      <div className={`container ${styles.contact_form}`}>
        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"></input>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="eemail"></input>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea type="text" name="text" rows={6}></textarea>
          </div>

          <div className={styles.submit_button}>
            <Button text="SUBMIT"></Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactpage;
