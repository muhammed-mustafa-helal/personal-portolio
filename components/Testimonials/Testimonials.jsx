import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination  } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import classes from "./Testimonials.module.css";
import Image from "next/image";
import Picture from "../../public/IMG_5840.png";

const clientReviews = [
  {
    id: 1,
    avatar: Picture,
    name: "Ernest Achiever",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas cum animi at iusto, ex quod iste molestias quisquam, fugiat amet magnam distinctio perferendis soluta!",
  },
  {
    id: 2,
    avatar: Picture,
    name: "Ernest Achiever",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas cum animi at iusto, ex quod iste molestias quisquam, fugiat amet magnam distinctio perferendis soluta!",
  },
  {
    id: 3,
    avatar: Picture,
    name: "Ernest Achiever",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas cum animi at iusto, ex quod iste molestias quisquam, fugiat amet magnam distinctio perferendis soluta!",
  },
  {
    id: 4,
    avatar: Picture,
    name: "Ernest Achiever",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas cum animi at iusto, ex quod iste molestias quisquam, fugiat amet magnam distinctio perferendis soluta!",
  },
  {
    id: 5,
    avatar: Picture,
    name: "Ernest Achiever",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas cum animi at iusto, ex quod iste molestias quisquam, fugiat amet magnam distinctio perferendis soluta!",
  },
  {
    id: 6,
    avatar: Picture,
    name: "Ernest Achiever",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas cum animi at iusto, ex quod iste molestias quisquam, fugiat amet magnam distinctio perferendis soluta!",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials" className={classes.testimonials}>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className={classes.testimonials__container + " container"}
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        spaceBetween={50}
      >
        {clientReviews.map(({ id, avatar, name, review }) => (
          <SwiperSlide key={id} className={classes.testimonial}>
            <div className={classes.client__avatar}>
              <Image
                width={500}
                height={500}
                src={avatar}
                alt="Client Avatar"
              />
            </div>

            <h5 className={classes.client__name}>{name}</h5>
            <small className={classes.client__review}>{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
