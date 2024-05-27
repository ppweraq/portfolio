import React from "react";
import Marquee from "react-fast-marquee";
import './About.css'

const About = () => {
  return (
    <div id="about" className="mt-40 bg-black">
      <p className="p-40 text-xl">
        i am an entry level frontend developer. during this time, I have
        successfully mastered key skills and am actively looking for an
        opportunity to put them into practice. in addition, i am responsible,
        disciplined, and quite hardworking.
      </p>
      <div className="about-skills">
        <h2>skills</h2>
      </div>
        <div className="about-skills__items">
          <Marquee  speed={30} pauseOnHover={true} autoFill={true}>

          <div className="skill-item">html5</div>
          <div className="skill-item">css3</div>
          <div className="skill-item">java script</div>
          <div className="skill-item">type script</div>
          <div className="skill-item">react</div>
          <div className="skill-item">git</div>
          <div className="skill-item">figma</div>
          <div className="skill-item">figma</div>





          </Marquee>
        </div>
    </div>
  );
};

export default About;
