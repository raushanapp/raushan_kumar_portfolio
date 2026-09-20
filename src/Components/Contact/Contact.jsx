import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { VscGithub } from "react-icons/vsc";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { fadeInUp } from "../../utils/motion";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/raushan-coder/",
    label: "LinkedIn",
    Icon: FaLinkedin,
    className: "linkedin",
  },
  {
    href: "https://github.com/raushanapp",
    label: "GitHub",
    Icon: VscGithub,
    className: "github",
  },
  {
    href: "https://twitter.com/sraushan890",
    label: "Twitter",
    Icon: BsTwitter,
    className: "twitter",
  },
];

export const Contact = () => {
  return (
    <section className="section">
      <h2 className="section__title">
        Get in <span className="different">Touch</span>
      </h2>
      <motion.div className="glass-panel contactcard" {...fadeInUp()}>
        <div className="contactcontainer">
          {socialLinks.map(({ href, label, Icon, className }) => (
            <a key={href} href={href} aria-label={label} target="_blank" rel="noreferrer">
              <Icon className={className} />
            </a>
          ))}
        </div>
        <div>
          <p id="mine">Email: sraushan890@gmail.com</p>
          <p id="mine1">Phone: +91 7362086027</p>
        </div>
      </motion.div>
    </section>
  );
};
