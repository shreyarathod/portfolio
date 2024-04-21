import React from "react";
import "./Education.scss";
import image1 from "/src/assets/images/education1.jpg";
import image2 from "/src/assets/images/education2.jpg";
import image3 from "/src/assets/images/education3.jpg";

function Education() {
  return (
    <div className="education_section">
      <section id="timeline">
        <div className="tl-item first-item" id="education">
          <div className="tl-bg"></div>

          <div className="tl-year">
            <div class="title_education">
              <h1>E</h1>
              <h1>D</h1>
              <h1>U</h1>
              <h1>C</h1>
              <h1>A</h1>
              <h1>T</h1>
              <h1>I</h1>
              <h1>O</h1>
              <h1>N</h1>
            </div>
          </div>

          <div className=""></div>
        </div>

        <div className="tl-item ">
          <div className="tl-bg"></div>

          <div className="tl-year">
            <p className="f2 heading--sanSerif">2015-2020</p>
          </div>

          <div className="tl-content">
            <h1 className="f3 text--accent ttu">High School</h1>
            <h2 className="f3 text--accent ttu">Datta Meghe World Academy</h2>
            <br></br>
            <h2 className="f3 text--accent ttu">10’th Boards: 94.6%</h2>
            <br></br>
          </div>
        </div>

        <div className="tl-item image2">
          <div className="tl-bg"></div>

          <div className="tl-year">
            <p className="f2 ">2020-2022</p>
          </div>

          <div className="tl-content">
            <h1 className="f3 text--accent ttu">Junior College</h1>
            <h2 className="f3 text--accent ttu">Shubham Raje Jr. College</h2>
            <br></br>
            <h2 className="f3 text--accent ttu">12’th Boards: 87.33%</h2>

            <br></br>
          </div>
        </div>

        <div className="tl-item image3">
          <div className="tl-bg"></div>

          <div className="tl-year">
            <p className="f2 heading--sanSerif">2022-2026</p>
          </div>

          <div className="tl-content">
            <h1 className="f3 text--accent ttu">B.Tech Computer Engineering</h1>
            <h2 className="f3 text--accent ttu">
              Sardar Patel Institute of Technology
            </h2>
            <br></br>
            <h2 className="f3 text--accent ttu">CGPA: 8.44</h2>
            <br></br>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
