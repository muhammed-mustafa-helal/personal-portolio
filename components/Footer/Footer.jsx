import classes from "./Footer.module.css";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <a href="#" className={classes.footer__logo}>
        Muhammed Mustafa
      </a>
      <ul className={classes.permalinks}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="services#">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className={classes.footer__socials}>
        <a href="https://www.facebook.com/muhammed.mustafa.helal">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/muhammed.mustafa.helal">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/muhammedhelal95">
          <IoLogoTwitter />
        </a>
      </div>
      <div className={classes.footer__copyright}>
        <small>&copy; Muhammed Mustafa. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
