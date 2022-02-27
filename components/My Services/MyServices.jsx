import classes from "./MyServices.module.css";
import { BiCheck } from "react-icons/bi";

const MyServices = () => {
  return (
    <section id="myservices">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className={classes["services__container"] + " container"}>
        <article className={classes.service}>
          <div className={classes.service__head}>
            <h3>UI/UX</h3>
          </div>

          <ul className={classes.service__list}>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className={classes.service}>
          <div className={classes.service__head}>
            <h3>Web Development</h3>
          </div>

          <ul className={classes.service__list}>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className={classes.service}>
          <div className={classes.service__head}>
            <h3>Content Creation</h3>
          </div>

          <ul className={classes.service__list}>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default MyServices;
