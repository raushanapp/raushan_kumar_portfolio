import React from "react";
import "./Techstacks.css";
import { motion } from "framer-motion";
import { popItem, staggerContainer, hoverLift } from "../../utils/motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiExpress,
  SiRedis,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { DiCss3, DiMongodb, DiPostgresql } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";

const skills = [
  { Icon: SiJavascript, label: "Javascript" },
  { Icon: SiTypescript, label: "Typescipt" },
  { Icon: SiHtml5, label: "HTML5" },
  { Icon: DiCss3, label: "CSS3" },
  { Icon: FaReact, label: "React.js" },
  { Icon: FaReact, label: "React Native" },
  { Icon: FaNodeJs, label: "Node.js" },
  { Icon: DiMongodb, label: "MongoDb" },
  { Icon: DiPostgresql, label: "Postgres" },
  { Icon: SiRedis, label: "Redis" },
  { Icon: SiRedux, label: "Redux" },
  { Icon: SiExpress, label: "Express" },
  { Icon: VscGithub, label: "Github" },
  { Icon: FaAws, label: "AWS" },
  { Icon: SiNextdotjs, label: "Next.js" },
];

export const Techstacks = () => {
  return (
    <section className="section main">
      <h2 className="section__title different">Skills</h2>
      <motion.ul
        className="techsection"
        {...staggerContainer(0.05)}
      >
        {skills.map(({ Icon, label }) => (
          <motion.li
            key={label}
            className="glass-panel skill-card"
            variants={popItem}
            {...hoverLift}
          >
            <h5 className="skill-card__label">{label}</h5>
            <Icon className="skill-card__icon" />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};
