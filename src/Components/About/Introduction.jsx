import React from "react";
import "./Introduction.css";
import { motion } from "framer-motion";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { fadeInX } from "../../utils/motion";

const highlights = [
  "Solving Problems",
  "Learning Algorithms",
  "Cooking",
];

export const Introduction = () => {
  return (
    <section id="about" className="section">
      <h2 className="section__title">
        About <span className="different">Me</span>
      </h2>
      <div className="introduction">
        <motion.div
          className="introduction_logocontainer"
          {...fadeInX(true)}
        >
          <div className="glass-panel introduction_frame">
            <img src="https://i.ibb.co/sJsvH1G/IMG-9738.jpg" alt="Images" />
          </div>
        </motion.div>
        <motion.div
          className="introduction_datacontainer"
          {...fadeInX(false, 0.1)}
        >
          <h4>
            Hi Everyone, I am{" "}
            <span className="different">Raushan Kumar </span> from{" "}
            <span className="different"> Nawada, Bihar</span>. I have
            completed my graduation in Bachelor of Engineering in Mechanical
            Engineering from Vinayaka Missions University, Salem.
          </h4>
          <h4>Apart from coding, some other activities that I love to do!</h4>
          {highlights.map((item) => (
            <h4 key={item} className="different">
              <span className="icons">
                <ExitToAppIcon />
              </span>
              {item}
            </h4>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
