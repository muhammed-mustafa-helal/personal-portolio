import Image from "next/image";

import classes from "./Portfolio.module.css";
import Picture from "../../public/IMG_5840.png";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image: Picture,
      title: "Netflix Clone",
      github: "https://github.com/muhammed-mustafa-helal",
      demo: "https://github.com/muhammed-mustafa-helal",
    },
    {
      id: 2,
      image: Picture,
      title: "Netflix Clone",
      github: "https://github.com/muhammed-mustafa-helal",
      demo: "https://github.com/muhammed-mustafa-helal",
    },
    {
      id: 3,
      image: Picture,
      title: "Netflix Clone",
      github: "https://github.com/muhammed-mustafa-helal",
      demo: "https://github.com/muhammed-mustafa-helal",
    },
    {
      id: 4,
      image: Picture,
      title: "Netflix Clone",
      github: "https://github.com/muhammed-mustafa-helal",
      demo: "https://github.com/muhammed-mustafa-helal",
    },
    {
      id: 5,
      image: Picture,
      title: "Netflix Clone",
      github: "https://github.com/muhammed-mustafa-helal",
      demo: "https://github.com/muhammed-mustafa-helal",
    },
    {
      id: 6,
      image: Picture,
      title: "Netflix Clone",
      github: "https://github.com/muhammed-mustafa-helal",
      demo: "https://github.com/muhammed-mustafa-helal",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={classes.portfolio__container + " container"}>
        {portfolioItems.map(({ id, image, title, github, demo }) => (
          <article key={id} className={classes.portfolio__item}>
            <div className={classes["portfolio__item-image"]}>
              <Image
                src={image}
                alt="Portfolio Showcase"
                width={500}
                height={500}
              />
            </div>
            <h3>{title}</h3>
            <div className={classes["portfolio__item-cta"]}>
              <a href={github} className="btn">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
