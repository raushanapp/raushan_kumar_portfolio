import React from "react";
import "./Projects.css";
import { FaReact, FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
const TokenWellImg = require("../../Assets/images/tokenwell.png");
const PadelUnderGround = require("../../Assets/images/padel.png");
import {
  SiChakraui,
  SiRedux,
  SiSpringboot,
  SiAmazonaws,
  SiExpo,
  SiTypescript,
} from "react-icons/si";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={PadelUnderGround} alt="PadelUnderGround" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Padel Underground Arena</h2>
              <p>
                Production sports application for managing padel matches, score
                tracking, ratings, and player engagement.
              </p>
              <div>
                <FaReact />
                <SiRedux />
                <SiExpo />
                <SiTypescript />
              </div>
              <div>
                <a
                  href="https://apps.apple.com/us/app/underground-arena/id6754181818"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={TokenWellImg} alt="TokenWell" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Tokenwell Automated Crypto Basket</h2>
              <p>
                Tokenwell AI-Powered Basket Trading App Built from scratch using
                React Native & TypeScript. Multi-exchange trading platform with
                AI basket generation, real-time data, secure Clerk auth, and
                performance-optimised architecture.
              </p>
              <div>
                <FaReact />
                <SiRedux />
                <SiExpo />
                <SiTypescript />
              </div>
              <div>
                <a
                  href="https://apps.apple.com/ca/app/tokenwell/id1639369761"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/102046087/232398654-7856240d-2f80-4a1d-8a14-f742861ebfc2.png"
                  alt="Pulseplus"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>AIMEE Management Portal</h2>
              <p>
                AIMEE Management Portal is a school and learning management
                system where some role bashed dashboard are allowed to do and
                manage the thing in a school or orgnisation. We are buiding and
                designing this product
              </p>
              <div>
                <FaReact />
                <SiRedux />
                <SiChakraui />
                <FaJava />
                <SiSpringboot />
                <GrMysql />
                <SiAmazonaws />
              </div>
              <div>
                <a href="http://52.65.35.157/" target="_blank" rel="noreferrer">
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/masai-builds/AIMEELearningManagmentPortal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/99644302/224540395-350e6aaf-bec5-496d-85c7-2f0f0c8ab132.PNG"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Masai Learn</h2>
              <p>
                Masai Learn is your one stop solution for enhancing your tech
                knowledge and upskilling to stand out in the IT industry. Be it
                Python or Java, MasaiLearn has got something for everyone. The
                project uses Java Springboot to implement the microservice
                serving the frontend built in React.js.
              </p>
              <div>
                <FaReact />
                <SiRedux />
                <SiChakraui />
                <FaJava />
                <SiSpringboot />
                <GrMysql />
                <SiAmazonaws />
              </div>
              <div>
                <a href="http://13.233.50.68/" target="_blank" rel="noreferrer">
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/masai-builds/masai-tutorials-team3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
