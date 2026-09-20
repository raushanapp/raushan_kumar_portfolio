import React from "react";
import "./Techstacks.css";
import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const tileVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const Techstacks = () => {
  return (
    <section className="section main">
      <h2 className="section__title different">Skills</h2>
      <motion.ul
        className="techsection"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map(({ Icon, label }) => (
          <motion.li
            key={label}
            className="glass-panel skill-card"
            variants={tileVariants}
          >
            <h5 className="skill-card__label">{label}</h5>
            <Icon className="skill-card__icon" />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};
