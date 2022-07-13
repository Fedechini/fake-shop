import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { BsFacebook, BsTwitter, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <div className="contact-container">
          <div className="socials">
            <a
              href="https://www.youtube.com/watch?v=9bZkp7q19f0"
              target="_blank"
              className="social-link"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.youtube.com/watch?v=9bZkp7q19f0"
              target="_blank"
              className="social-link"
            >
              <FaFacebookMessenger />
            </a>
            <a
              href="https://www.youtube.com/watch?v=9bZkp7q19f0"
              target="_blank"
              className="social-link"
            >
              <BsTwitter />
            </a>
            <a
              href="https://www.youtube.com/watch?v=9bZkp7q19f0"
              target="_blank"
              className="social-link"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.youtube.com/watch?v=9bZkp7q19f0"
              target="_blank"
              className="social-link"
            >
              <BsWhatsapp />
            </a>
          </div>
          <div className="address">
            <p>FakeStore</p>
            <p>123 Fake Street, Springfield USA</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
