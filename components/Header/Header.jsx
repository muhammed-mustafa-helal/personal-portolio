import classes from "./Header.module.css";
import CTA from "./CTA";
import MyPicture from "../../public/IMG_5840.png";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
const Header = () => {

  return (
    <header className={classes.header}>
      <div className={classes.header__container + ' container'}>
        <h5>Hello I&apos;m</h5>
        <h1>Muhammed Mustafa</h1>
        <h5 className="text-light">Fullstack Engineer</h5>
        <CTA />
        <SocialLinks />
        <div className={classes.me}>
          <Image
            src={MyPicture}
            alt="Muhammed Mustafa"
            layout="fill"
          />
        </div>
        <a href="#contact" className={classes.scroll__down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
