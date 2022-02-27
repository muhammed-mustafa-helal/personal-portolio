import classes from "./Experience.module.css";

import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className={classes.experience__container + " container"}>
        <div className={classes.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={classes.experience__content}>
            <article className={classes.experience__details}>
              <BsPatchCheckFill
                className={classes["experience__details-icons"]}
              />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill
                className={classes["experience__details-icons"]}
              />
              <h4>CSS</h4>
              <small>Experienced</small>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill
                className={classes["experience__details-icons"]}
              />
              <div>
                <h4>JavaScript</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill
                className={classes["experience__details-icons"]}
              />
              <div>
                <h4>Liquid</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill
                className={classes["experience__details-icons"]}
              />
              <div>
                <h4>Tailwind</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill
                className={classes["experience__details-icons"]}
              />
              <div>
                <h4>TypeScript</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* BACKEND */}
        <div className={classes.experience__backend}>
          <h3>Backend Development</h3>
          <div classeName={classes.experience__content}></div>
          <article className={classes.experience__details}>
            <BsPatchCheckFill
              className={classes["experience__details-icons"]}
            />
            <div></div>
            <h4>Nodejs</h4>
            <small>Experienced</small>
          </article>
          <article className={classes.experience__details}>
            <BsPatchCheckFill
              className={classes["experience__details-icons"]}
            />
            <div>
              <h4>MySQL</h4>
              <small>Experienced</small>
            </div>
          </article>
          <article className={classes.experience__details}>
            <BsPatchCheckFill
              className={classes["experience__details-icons"]}
            />
            <div>
              <h4>Python</h4>
              <small>Experienced</small>
            </div>
          </article>
          <article className={classes.experience__details}>
            <BsPatchCheckFill
              className={classes["experience__details-icons"]}
            />
            <div>
              <h4>Golang</h4>
              <small>Experienced</small>
            </div>
          </article>
          <article className={classes.experience__details}>
            <BsPatchCheckFill
              className={classes["experience__details-icons"]}
            />
            <div>
              <h4>Redis</h4>
              <small>Experienced</small>
            </div>
          </article>
          <article className={classes.experience__details}>
            <BsPatchCheckFill
              className={classes["experience__details-icons"]}
            />
            <div>
              <h4>MongoDB</h4>
              <small>Experienced</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
