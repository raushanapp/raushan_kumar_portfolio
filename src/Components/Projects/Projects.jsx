import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { fadeInX } from "../../utils/motion";
const TokenWellImg = require("../../Assets/images/tokenwell.png");
const PadelUnderGround = require("../../Assets/images/padel.png");
const FullStackSpaceLaunchImg = require("../../Assets/images/full-stack-space.png");
import {
  SiChakraui,
  SiRedux,
  SiSpringboot,
  SiAmazonaws,
  SiDocker,
  SiExpress,
  SiMongodb,
  SiExpo,
  SiTypescript,
} from "react-icons/si";

const projectList = [
  {
    title: "Padel Underground Arena",
    image: PadelUnderGround,
    alt: "PadelUnderGround",
    description:
      "Production sports application for managing padel matches, score tracking, ratings, and player engagement.",
    icons: [FaReact, SiRedux, SiExpo, SiTypescript],
    links: [
      {
        href: "https://apps.apple.com/us/app/underground-arena/id6754181818",
        label: "See this Live",
      },
    ],
  },
  {
    title: "Tokenwell Automated Crypto Basket",
    image: TokenWellImg,
    alt: "TokenWell",
    description:
      "Tokenwell AI-Powered Basket Trading App Built from scratch using React Native & TypeScript. Multi-exchange trading platform with AI basket generation, real-time data, secure Clerk auth, and performance-optimised architecture.",
    icons: [FaReact, SiRedux, SiExpo, SiTypescript],
    links: [
      {
        href: "https://apps.apple.com/ca/app/tokenwell/id1639369761",
        label: "See this Live",
      },
    ],
  },
  {
    title: "AIMEE Management Portal",
    image:
      "https://user-images.githubusercontent.com/102046087/232398654-7856240d-2f80-4a1d-8a14-f742861ebfc2.png",
    alt: "Pulseplus",
    description:
      "AIMEE Management Portal is a school and learning management system where some role bashed dashboard are allowed to do and manage the thing in a school or orgnisation. We are buiding and designing this product",
    icons: [
      FaReact,
      SiRedux,
      SiChakraui,
      FaJava,
      SiSpringboot,
      GrMysql,
      SiAmazonaws,
    ],
    links: [
      { href: "http://52.65.35.157/", label: "See this Live" },
      {
        href: "https://github.com/masai-builds/AIMEELearningManagmentPortal",
        label: "View Code",
      },
    ],
  },
  {
    title: "Masai Learn",
    image:
      "https://user-images.githubusercontent.com/99644302/224540395-350e6aaf-bec5-496d-85c7-2f0f0c8ab132.PNG",
    alt: "Masai Learn",
    description:
      "Masai Learn is your one stop solution for enhancing your tech knowledge and upskilling to stand out in the IT industry. Be it Python or Java, MasaiLearn has got something for everyone. The project uses Java Springboot to implement the microservice serving the frontend built in React.js.",
    icons: [
      FaReact,
      SiRedux,
      SiChakraui,
      FaJava,
      SiSpringboot,
      GrMysql,
      SiAmazonaws,
    ],
    links: [
      { href: "http://13.233.50.68/", label: "See this Live" },
      {
        href: "https://github.com/masai-builds/masai-tutorials-team3",
        label: "View Code",
      },
    ],
  },
  {
    title: "Full-Stack Space Launch Application",
    image: FullStackSpaceLaunchImg,
    alt: "Full-Stack Space Launch Application",
    description:
      "A full-stack mission-scheduling app for interstellar travel to habitable Kepler exoplanets. Built with React, Node.js, Express, and MongoDB, featuring a futuristic sci-fi themed UI (Arwes), REST API for launches/planets, Docker support, and PM2 clustering for production.",
    icons: [FaReact, FaNodeJs, SiExpress, SiMongodb, SiDocker],
    links: [
      {
        href: "https://github.com/raushanapp/full-stack-space-project",
        label: "View Code",
      },
    ],
  },
];

const ProjectCard = ({ project, index }) => {
  const fromLeft = index % 2 === 0;
  return (
    <motion.article
      className={`project glass-panel ${fromLeft ? "" : "project--reverse"}`}
      {...fadeInX(fromLeft)}
      viewport={{ once: true, amount: 0.2 }}
    >
      <figure className="project_media">
        <img src={project.image} alt={project.alt} />
      </figure>
      <div className="project_information">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="project_techlist">
          {project.icons.map((Icon, i) => (
            <li key={i}>
              <Icon />
            </li>
          ))}
        </ul>
        <footer className="project_links">
          {project.links.map((linkItem) => (
            <a
              key={linkItem.href}
              href={linkItem.href}
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline onbt"
            >
              {linkItem.label}
            </a>
          ))}
        </footer>
      </div>
    </motion.article>
  );
};

export const Projects = () => {
  return (
    <section className="section">
      <h2 className="section__title different">Projects</h2>

      {projectList.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </section>
  );
};
