// import CV from "../../public/Muhammed.pdf";
import classes from "./Header.module.css";
const CTA = () => {
  return (
    <div className={classes.cta}>
      <a href="#" download rel="noreferrer" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let&#39;s talk
      </a>
    </div>
  );
};

export default CTA;
