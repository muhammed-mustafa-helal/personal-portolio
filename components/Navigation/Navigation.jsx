import { useState } from "react";
import classes from "./Navigation.module.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Navigation = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className={classes.nav}>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? classes.active : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#aboutme"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? classes.active : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? classes.active : ""}
      >
        <BiBook />
      </a>
      <a
        href="#myservices"
        onClick={() => setActiveNav("#myservices")}
        className={activeNav === "#myservices" ? classes.active : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? classes.active : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navigation;
