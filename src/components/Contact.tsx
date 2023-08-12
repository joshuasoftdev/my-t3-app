import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="mx-auto flex flex-row items-center justify-center space-y-4">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        <FaGithub className="h-6 w-6" />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        <FaFacebook className="h-6 w-6" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        <FaInstagram className="h-6 w-6" />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        <FaYoutube className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Contact;
