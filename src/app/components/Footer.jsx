"use client";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin";
import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 pt-8  bg-black text-white ">
      <h1 className="text-3xl font-bold">Let's stay in touch!</h1>
      <div className="contact-list flex w-[70%] lg:w-[35%]">
        <a
          href="https://github.com/anthiya-r?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className="text-2xl transform transition-transform hover:scale-150" />
        </a>
        <a
          href="https://www.linkedin.com/in/anthiya-ruchithanatroj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <AiOutlineLinkedin className="text-2xl transform transition-transform hover:scale-150" />
        </a>
        <a href="mailto:anthiya.r@gmail.com">
          <HiOutlineMail className="text-2xl transition-transform hover:scale-150" />
        </a>
        <a href="tel:+66956961926">
          <FiPhoneCall className="text-2xl transform transition-transform hover:scale-150" />
        </a>
      </div>
      <aside>
        <p className="text-gray-400 ">
          {" "}
          Copyright © 2023 - All right reserved by Anthiya{" "}
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
