import React from "react";
import "./Introduction.css";
import { motion } from "framer-motion";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { fadeInX } from "../../utils/motion";

const highlights = [
  "Solving Problems",
  "Learning New Technologies",
  "Building Real-World Projects",
];

export const Introduction = () => {
  return (
    <section id="about" className="section">
      <h2 className="section__title">
        About <span className="different">Me</span>
      </h2>
      <article className="introduction">
        <motion.div className="introduction_logocontainer" {...fadeInX(true)}>
          <section className="glass-panel introduction_frame">
            <img src="https://i.ibb.co/sJsvH1G/IMG-9738.jpg" alt="Images" />
          </section>
        </motion.div>
        <motion.div
          className="introduction_datacontainer"
          {...fadeInX(false, 0.1)}
        >
          <h4>
            Hi, I’m <span className="different">Raushan Kumar</span>, a software
            engineer from <span className="different">India</span> passionate
            about building reliable, scalable, and user-focused software. I
            enjoy solving complex problems, turning ideas into real-world
            products, and continuously expanding my skills across the software
            engineering ecosystem.
          </h4>

          <h4>
            I’m passionate about writing clean, maintainable code, learning new
            technologies, and taking on challenging problems. I’m always looking
            for opportunities to contribute to real-world products and grow as a
            software engineer.
          </h4>

          {highlights.map((item) => (
            <h4 key={item} className="different">
              <span className="icons">
                <ExitToAppIcon />
              </span>
              {item}
            </h4>
          ))}
        </motion.div>
      </article>
    </section>
  );
};
