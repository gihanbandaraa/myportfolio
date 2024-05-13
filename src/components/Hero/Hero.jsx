import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-container" id="hero">
      <div className="hero-content">
        <h2>Building the future, one line of code at a time</h2>
        <p>
          Passionate Full Stack Developer | Crafting innovative solutions and
          pushing the boundaries of Technology
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="assets/images/react.png" alt="" />
          </div>
          <img
            src="assets/images/profile-img.svg"
            alt=""
            className="profileImage"
          />
        </div>

        <div>
          <div className="tech-icon">
            <img src="assets/images/java.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="assets/images/js.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="assets/images/database.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="assets/images/html-5.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="assets/images/css-3.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
