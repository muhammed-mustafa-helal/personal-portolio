import Image from "next/image";
import classes from "./Aboutme.module.css";
import MyPicture from "../../public/IMG_5840.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const Aboutme = () => {
  return (
    <section id="aboutme">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className={classes.about__container + " container"}>
        <div className={classes.about__me}>
          <div className={classes["about__me-image"]}>
            <Image src={MyPicture} alt="Muhammed" width={400} height={200} />
          </div>
        </div>

        <div className={classes.about__content}>
          <div className={classes.about__cards}>
            <article className={classes.about__card}>
              <FaAward className={classes.about__icon} />
              <h5>Experience</h5>
              <small>4+ Years Working Experiece</small>
            </article>
            <article className={classes.about__card}>
              <FiUsers className={classes.about__icon} />
              <h5>Clients</h5>
              <small>50+ Clients World Wide</small>
            </article>
            <article className={classes.about__card}>
              <VscFolderLibrary className={classes.about__icon} />
              <h5>Projects</h5>
              <small>50+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            laudantium molestiae corrupti corporis saepe. Temporibus inventore,
            necessitatibus quia dignissimos provident, nobis cumque ratione
            nihil maxime pariatur exercitationem facilis dolores placeat.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
