import React from "react";
import Githubcalendar from "react-github-calendar";
import { ThemeContext } from "../../Context/theme";


export const Github = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc"
  };
  return (
    <>
      <div className="section" data-aos="fade-right">
        <h2 className="section__title">
          GitHub <span className="different"> Analytics</span>
        </h2>
        <div align="center">
          <a href="https://github.com/raushanapp">
            <img
              height="160em"
              src="https://github-readme-stats-eight-theta.vercel.app/api?username=raushanapp&show_icons=true&theme=algolia&include_all_commits=true&count_private=true"
            />

            <img
              height="160em"
              src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=raushanapp&layout=compact&langs_count=5&theme=algolia"
            />

            <img
              align="center"
              height="170rem"
              src="https://github-readme-streak-stats.herokuapp.com/?user=raushanapp&theme=dark&background=0d1117&date_format=M%20j%5B%2C%20Y%5D"
              alt="adam-pw"
            />
          </a>
        </div>

        <Githubcalendar
          username="raushanapp"
          blockSize={15}
          blockMargin={5}
          theme={colourTheme}
          fontSize={16}
          // marginTop={"20px"}
        />
      </div>
    </>
  );
};
