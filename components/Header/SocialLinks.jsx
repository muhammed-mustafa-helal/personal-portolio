import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import classes from "./Header.module.css";

function SocialLinks() {
  return (
    <div className={classes["header__social-links"]}>
      <a
        href="https://www.linkedin.com/in/muhammed-mustafa-helal"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>

      <a
        href="https://github.com/muhammed-mustafa-helal"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
}

export default SocialLinks;
