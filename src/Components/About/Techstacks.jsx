import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiChakraui,
  SiExpress,
  SiRedis,
  SiTypescript,
  // SiReduxtoolkit,
} from "react-icons/si";
import { DiCss3, DiMongodb, DiPostgresql } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiTypescript />
            <h5>Typescipt</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML5</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS3</h5>
          </div>
          <div>
            <FaReact />
            <h5>React.js</h5>
          </div>
          <div>
            <FaReact />
            <h5>React Native</h5>
          </div>

          <div>
            <FaNodeJs />
            <h5>Node.js</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
            <DiPostgresql />
            <h5>Postgres</h5>
          </div>
          <div>
            <SiRedis />
            <h5>Redis</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <FaAws />
            <h5>AWS</h5>
          </div>
        </div>
      </div>
    </>
  );
};
