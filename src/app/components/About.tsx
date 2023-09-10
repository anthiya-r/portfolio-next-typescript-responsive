import "../assets/style/animation.css";
import Image from "next/image";
import hero from "../assets/images/hero.png";
import { AiOutlineCloudDownload } from "@react-icons/all-files/ai/AiOutlineCloudDownload";

const About = () => {
  return typeof window !== "undefined" ? (
    <div className="about w-full" id="about">
      <div className="about-wrapper mt-12 flex flex-col justify-center items-center lg:flex-row lg:p-20 lg:gap-16">
        <div className="hero-image w-[70%] animate-heroAnimation transform transition-transform hover:scale-75 cursor-pointer lg:w-[50%]">
          <Image src={hero} alt="hero-image " />
        </div>

        <div className="about-content p-6 text-justify text-slate-800 mt-4 ">
          <h1 className="text-2xl font-bold text-left">Hello, I am</h1>
          <h1 className="text-5xl font-bold text-left py-2 text-black ">
            A N T H I Y A
          </h1>
          <p className=" pt-2">
            Welcome to my portfolio! I am a dedicated Full-stack Developer and
            Back-end Developer with a fresh perspective. I have recently
            completed an intensive Full-stack Developer bootcamp, with my prior
            experience as an Account Executive at a digital marketing agency.
          </p>
          <button className="bg-black text-white p-2 rounded-md mt-6 mb-3 lg:w-[30%] transform transition-shadow hover:scale-105">
            <a href="/Anthiya-resume.pdf" download="Anthiya-resume.pdf">
              Download Resume
              <AiOutlineCloudDownload />
            </a>
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default About;
