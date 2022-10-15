import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <section className="contact">
        <div className="contact__social">
          <a
            href="https://www.youtube.com/watch?v=9bZkp7q19f0"
            target="_blank"
            className="contact__social-link"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.youtube.com/watch?v=9bZkp7q19f0"
            target="_blank"
            className="contact__social-link"
          >
            <FaFacebookMessenger />
          </a>
          <a
            href="https://www.youtube.com/watch?v=9bZkp7q19f0"
            target="_blank"
            className="contact__social-link"
          >
            <BsTwitter />
          </a>
          <a
            href="https://www.youtube.com/watch?v=9bZkp7q19f0"
            target="_blank"
            className="contact__social-link"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.youtube.com/watch?v=9bZkp7q19f0"
            target="_blank"
            className="contact__social-link"
          >
            <BsWhatsapp />
          </a>
        </div>
        <div className="contact__address">
          <p>FakeStore</p>
          <p>123 Fake Street, Springfield USA</p>
        </div>
      </section>
    </>
  );
}
