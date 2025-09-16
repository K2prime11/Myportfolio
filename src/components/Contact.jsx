import React from "react";
import "./contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  const email = "karthikeyankums@gmail.com";
  const phonenumber = "+91-86105*****";
  function mail() {
    navigator.clipboard.writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy email", err);
      });
  }
  function phone() {
    navigator.clipboard.writeText(phonenumber)
      .then(() => {
        alert("phone number copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy phone number", err);
      });
  }
  return (
    <>
    <h1 className="heading">CONTACT</h1>
      <div className="contact-container">
        <h2>REACH OUT</h2>
        <p>
          I'm always interested in new challenges and creative opportunities.
          Feel free to reach out if you'd like to discuss a project or just say hello.
        </p>

        <div className="button-group">
          <div className="hover-button">
            <button onClick={mail}>
              <FaEnvelope />
            </button>
            <span className="tooltip">karthikeyankums@gmail.com</span>
          </div>

          <div className="hover-button">
            <button onClick={phone}>
              <FaPhone />
            </button>
            <span className="tooltip">+91-86105*****</span>
          </div>

          <div className="hover-button">
            <a href="https://www.linkedin.com/in/karthikeyan-kumaran-931994224/">
              <button>
                <FaLinkedin />
              </button>
              <span className="tooltip">linkedin</span>
            </a>
          </div>
          <div className="hover-button">
            <a href="https://github.com/K2prime11">
              <button>
                < FaGithub/>
              </button>
              <span className="tooltip">Github</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
