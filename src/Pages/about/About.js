import React from "react";
import "./about.css";
import me from "../../images/me.png";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaArtstation } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <div className="img-container">
        <img src={me} alt="" />
      </div>
      <div>
        <h2>I'm mahbub Morshed</h2>
        <h5>3D artist</h5>
        <p>
          I'm Mahbub belong to (Dhaka) Bangladesh I am personally so motivated
          regarding my work,and I always try my best to achieve goals and
          objectives.
        </p>
        <p>
          my work is actually 3D animation,3d modelling,game designing,game
          asset for Unity and specially in low poly and high poly modelling and
          rendering.
        </p>
        <h5>Skill: </h5>
        <h6> Blender, Autodesk Maya, Unity, Photoshop </h6>
        <a href="https://www.linkedin.com/in/mahbub-morshed/">
          <AiOutlineLinkedin />

          <a href="https://www.artstation.com/mahbub">
            <FaArtstation />
          </a>
        </a>
      </div>
    </div>
  );
};

export default About;
