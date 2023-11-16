import React from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { useForm } from '@formspree/react';
import "./Contact.scss";

const Contact = () => {
  const [state, handleSubmit] = useForm('xoqozapw');
  return (
    <>
      <h2 className="head-text">
        That's it! <br />
        <span>Now it's your turn to say hi.</span>
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:kalongckl@gmail.com" className="p-text">
            kalongckl@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+852 6572-1493" className="p-text">
            +852 6572-1493
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.about01} alt="cv" />
          <a href={images.cv} className="p-text">
            Full CV download
          </a>
        </div>
      </div>
      {!state.succeeded ? (
        <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="username"
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                name="message"
              />
            </div>
            <button type="submit" className="p-text" disabled={state.submitting}>
            Send Message
            </button>
          </form>
          

      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
      





    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__footer"),
  "contact",
  "app__whitebg"
);
