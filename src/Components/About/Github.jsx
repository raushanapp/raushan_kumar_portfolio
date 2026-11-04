import React from "react";
import Githubcalendar from "react-github-calendar";
import { motion } from "framer-motion";
import "./Github.css";
import {
  hoverLift,
  popItem,
  scaleIn,
  staggerContainer,
} from "../../utils/motion";

const colourTheme = {
  background: "transparent",
  text: "#ffffff",
  grade4: "#8400b8",
  grade3: "#b22ff4",
  grade2: "#b265f6",
  grade1: "#c084f5",
  grade0: "#ecd9fc",
};

const statCards = [
  {
    alt: "GitHub stats",
    src: "https://github-readme-stats-eight-theta.vercel.app/api?username=raushanapp&show_icons=true&theme=algolia&include_all_commits=true&count_private=true",
  },
  {
    alt: "Top languages",
    src: "https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=raushanapp&layout=compact&langs_count=5&theme=algolia",
  },
  {
    alt: "GitHub streak",
    src: "https://github-readme-streak-stats.herokuapp.com/?user=raushanapp&theme=dark&background=0d1117&date_format=M%20j%5B%2C%20Y%5D",
  },
];

// Remote stat images arrive at unpredictable times, so fade each in once it loads instead of popping in.
const FadeImage = (props) => {
  const [loaded, setLoaded] = React.useState(false);
  const ref = React.useRef(null);
  // A cached image can finish before onLoad is attached.
  React.useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);
  return (
    <img
      {...props}
      ref={ref}
      alt={props.alt}
      className={`fade-image ${loaded ? "fade-image--loaded" : ""}`}
      onLoad={() => setLoaded(true)}
    />
  );
};

export const Github = () => {
  return (
    <section className="section">
      <h2 className="section__title">
        GitHub <span className="different"> Analytics</span>
      </h2>
      <motion.div className="github-stats" {...staggerContainer(0.12)}>
        {statCards.map(({ alt, src }) => (
          <motion.a
            key={src}
            href="https://github.com/raushanapp"
            className="glass-panel github-stats__card"
            variants={popItem}
            {...hoverLift}
          >
            <FadeImage height="160em" src={src} alt={alt} />
          </motion.a>
        ))}
      </motion.div>

      <motion.div className="glass-panel github-calendar" {...scaleIn(0.1)}>
        <Githubcalendar
          username="raushanapp"
          blockSize={15}
          blockMargin={5}
          theme={colourTheme}
          fontSize={16}
        />
      </motion.div>
    </section>
  );
};
