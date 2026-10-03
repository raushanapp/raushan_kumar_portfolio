import React from "react";
import { ThemeContext } from "../../Context/theme";
import "./Navbar.css";
import { AnimatePresence, motion } from "framer-motion";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { ResumeModal } from "../ResumeModal/ResumeModal";

const navLinks = [
  { id: "#home", label: "Home" },
  { id: "#about", label: "About" },
  { id: "#skills", label: "Skills" },
  { id: "#projects", label: "Projects" },
  { id: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = React.useState(false);

  const toggleNavList = (hash) => {
    const element =
      typeof hash === "string"
        ? document.getElementById(hash.replace("#", ""))
        : null;
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };

  const openResumeModal = () => {
    setIsResumeModalOpen(true);
    setShowNavList(false);
  };
  const closeResumeModal = () => setIsResumeModalOpen(false);

  return (
    <>
      <nav className="center nav">
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className={`nav__list glass-panel ${showNavList ? "nav__list--open" : ""}`}
        >
          {navLinks.map((linkItem, index) => (
            <li
              key={linkItem.id}
              className="nav__list-item"
              style={{ "--nav-i": index }}
            >
              <a
                href={linkItem.id}
                onClick={() => toggleNavList(linkItem.id)}
                className="link link--nav"
              >
                {linkItem.label}
              </a>
            </li>
          ))}
          <li className="nav__list-item" style={{ "--nav-i": navLinks.length }}>
            <button
              type="button"
              onClick={openResumeModal}
              className="link link--nav"
            >
              Resume
            </button>
          </li>
        </ul>
        <button
          type="button"
          onClick={toggeltheme}
          className="btn btn--icon nav__theme glass-panel"
          aria-label="toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={themename}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ display: "inline-flex" }}
            >
              {themename === "dark" ? (
                <WbSunnyRoundedIcon />
              ) : (
                <Brightness2Icon />
              )}
            </motion.span>
          </AnimatePresence>
        </button>
        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger glass-panel"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
      <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
    </>
  );
};
