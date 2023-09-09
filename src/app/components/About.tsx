"use client";
import Image from "next/image";
import hero from "../assets/images/hero.png";
const About = () => {
  return (
    <div id="about w-full">
      <div className="about-wrapper mt-12 flex flex-col justify-center items-center">
        <div className="hero-image w-[70%] ">
          <Image src={hero} alt="hero-image" />
        </div>
        <div className="about-content">Test</div>
      </div>
    </div>
  );
};

export default About;
