import { useRef } from "react";
import emailjs from "emailjs-com";

import classes from "./Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_m7p3k08",
      "template_ippgtgo",
      form.current,
      "12k_NFoMy3VBCiwhb"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className={classes.contact__container + " container"}>
        <div className={classes.contact__options}>
          <article className={classes.contact__option}>
            <MdOutlineEmail className={classes["contanct__option-icon"]} />
            <h4>Email</h4>
            <h5 className={classes["contact__option-email"]}>
              muhammed.mustafa.helal@gmail.com
            </h5>
            <a href="mailto:muhammed.mustafa.helal@gmail.com">Send a message</a>
          </article>
          <article className={classes.contact__option}>
            <RiMessengerLine className={classes["contanct__option-icon"]} />
            <h4>Messenger</h4>
            <h5>Muhammed Mustafa</h5>
            <a
              href="https://www.facebook.com/messages/t/100001185153593"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className={classes.contact__option}>
            <BsWhatsapp className={classes["contanct__option-icon"]} />
            <h4>WhatsApp</h4>
            <h5>+39-3894716148</h5>
            <a
              href="https://wa.me/+393894716148"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className={classes.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
