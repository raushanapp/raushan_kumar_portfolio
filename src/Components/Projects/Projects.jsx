import React from "react";
import "./Projects.css";
import { FaReact, FaNodeJs, Facss, FaJava } from "react-icons/fa";
import {GrMysql} from "react-icons/gr"
import task from "./task.png"
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  Sicss,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiNextdotjs,
  SiChakraui,
  SiRedux,
  SiSpringboot,
  SiAmazonaws,
} from "react-icons/si";
import { DiCss3, DiMongodb, } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
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
                {/* <a
                  href="https://github.com/masai-builds/AIMEELearningManagmentPortal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a> */}
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
                <a href="" target="_blank" rel="noreferrer">
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                {/* <a
                  href="https://github.com/masai-builds/masai-tutorials-team3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://strong-dodol-f37473.netlify.app/images/HomePage.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Rentomojo Clone</h2>
              <p>
                This project is the clone of RentoMojo website. RentoMojo is an
                online rental platform that provides furniture, appliances and
                electronics (mobiles, laptops) on a monthly rental basis. It is
                India's leading rental platform.
              </p>
              <div>
                <DiCss3 />
                <IoLogoJavascript />
                <SiHtml5 />
                <FaReact />
                <SiRedux />
                <SiChakraui />
                <VscJson />
              </div>
              <div>
                <a
                  href="https://clone-rentomojo.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/psnarkhede/cruel-scale-8764"
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
                  src={task}
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Daily Task App</h2>
              <p>
               It is a daily task app with a limit of 5 tasks per day, user can add 5 task in a day, on next day he can also add 5 task. In this I have used nextjs, it is a full stack app with frontend and backend deployed
              </p>
              <div>
                <SiNextdotjs />
                <DiCss3 />
                <SiHtml5 />
                <SiJavascript />
                <FaNodeJs />
                <DiMongodb />
                <SiExpress/>
              
              </div>
              <div>
                <a
                  href="https://frontend-delta-eight-14.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/gautamverma095/DailyTaskApp"
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
