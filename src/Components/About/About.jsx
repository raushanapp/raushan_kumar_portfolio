import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Techstacks } from "./Techstacks";
import { fadeInUp } from "../../utils/motion";

const contactLinks = [
  { href: "https://github.com/raushanapp", label: "GitHub", Icon: GitHubIcon },
  {
    href: "mailto:sraushan890@gmail.com",
    label: "Email",
    Icon: EmailIcon,
  },
  { href: "tel:+917362086027", label: "Phone", Icon: PhoneIcon },
  {
    href: "https://www.linkedin.com/in/raushan-coder/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: "https://drive.google.com/file/d/1g5_7uymdgMFyrbMPKzbFppj0PMvZwN9x/view?usp=sharing",
    label: "Resume",
    Icon: DescriptionIcon,
  },
  {
    href: "https://www.google.com/maps/place/Mahanandpur,+Bihar+805111/@24.8478937,85.5074005,15z/data=!3m1!4b1!4m6!3m5!1s0x39f2fdf03236f22f:0xc7399a99685dbd8a!8m2!3d24.8458202!4d85.5071469!16s%2Fg%2F12hpbgj93",
    label: "Location",
    Icon: PublicIcon,
  },
];

export const About = () => {
  return (
    <>
      <section className="about center">
        <motion.h1 {...fadeInUp()}>
          Hi, I am <span className="about__name">Raushan Kumar</span>
        </motion.h1>
        <Type />
        <motion.p className="about__desc" {...fadeInUp(0.15)}>
          Software Engineer with 3+ years of experience building and shipping
          production-ready web and mobile applications. I enjoy solving complex
          problems, writing clean and maintainable code, and turning ideas into
          reliable products that create real value.
        </motion.p>
        <motion.section
          className="about__contact center glass-panel"
          {...fadeInUp(0.3)}
        >
          {contactLinks.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="link link--icon"
            >
              <Icon />
            </a>
          ))}
        </motion.section>
      </section>
      <Introduction />
      <section id="skills">
        <Techstacks />
      </section>
    </>
  );
};
