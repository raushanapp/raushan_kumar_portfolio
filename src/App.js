import React from "react";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { ThemeContext } from "./Context/theme";
import { About } from "./Components/About/About";
import { Github } from "./Components/About/Github";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
import { GradientBackground } from "./Components/Background/GradientBackground";
export default function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <main id="top" className={`${themename} app`}>
      <GradientBackground />
      <header id="home">
        <Header />
      </header>
      <section>
        <About />
        <Github />
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </section>
      <footer>
        <Footer />
        <ScrollToTop />
      </footer>
    </main>
  );
}
