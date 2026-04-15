import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right">
          Hi, I am <span className="about__name">Raushan Kumar</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Full-stack Software Engineer with 3+ years of experience building and
          scaling web and mobile applications using React.js, React Native,
          TypeScript, and GraphQL. Proven track record of developing
          production-grade products from scratch, including complex,
          performance-critical applications. Experienced in designing scalable
          architectures, optimizing performance, and delivering seamless user
          experiences. Driven by solving real-world problems and building
          impactful, user-focused products.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/raushanapp"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:sraushan890@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+917362086027"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/raushan-coder/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://drive.google.com/file/d/1g5_7uymdgMFyrbMPKzbFppj0PMvZwN9x/view?usp=sharing"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a>

          <a
            href="https://www.google.com/maps/place/Mahanandpur,+Bihar+805111/@24.8478937,85.5074005,15z/data=!3m1!4b1!4m6!3m5!1s0x39f2fdf03236f22f:0xc7399a99685dbd8a!8m2!3d24.8458202!4d85.5071469!16s%2Fg%2F12hpbgj93"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <PublicIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
