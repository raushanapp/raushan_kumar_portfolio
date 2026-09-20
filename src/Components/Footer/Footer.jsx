import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { ThemeContext } from "../../Context/theme";
import { fadeIn } from "../../utils/motion";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <motion.section
      className={`${themename} section footer__wrap`}
      {...fadeIn()}
    >
      <a href="https://github.com/raushanapp" rel="noreferrer" target="_blank">
        <h3 className={`${themename} footer`}>Made By Raushan Kumar</h3>
      </a>
    </motion.section>
  );
};
