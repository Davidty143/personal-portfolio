"use client";

import { FC } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa"; // Import icons

const Contact: FC = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-16 px-4 sm:px-12"
    >
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-8">
          You can reach out to me through the following channels:
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8">
          {/* Gmail */}
          <a
            href="mailto:davidantonio.ty6@gmail.com"
            className="text-4xl text-white transition duration-300 hover:text-gray-400"
          >
            <FaEnvelope />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Davidty143"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-white transition duration-300 hover:text-gray-400"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/davidantonioty/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-white transition duration-300 hover:text-gray-400"
          >
            <FaLinkedin />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/davidantonio.ty"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-white transition duration-300 hover:text-gray-400"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
