"use client";
import { GoHome } from "@react-icons/all-files/go/GoHome";
import { VscTools } from "@react-icons/all-files/vsc/VscTools";
import { GiProgression } from "@react-icons/all-files/gi/GiProgression";
import { TiContacts } from "@react-icons/all-files/ti/TiContacts";
import { AiOutlineFundProjectionScreen } from "@react-icons/all-files/ai/AiOutlineFundProjectionScreen";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 w-[100%] text-black p-3 shadow-md">
        <div className="navbar-start w-full flex items-start ">
          <div className="navbar-mobile dropdown w-[20%]">
            <label tabIndex={0} className="lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <a className="font-bold " href="#about">
                  {" "}
                  <GoHome />
                  Home
                </a>
              </li>

              <li>
                <a className="font-bold" href="#skills-section">
                  {" "}
                  <VscTools />
                  Skills
                </a>
              </li>
              <li>
                <a className="font-bold" href="#projects">
                  <AiOutlineFundProjectionScreen /> Projects
                </a>
              </li>
              <li>
                <a className="font-bold">
                  {" "}
                  <GiProgression />
                  Experience
                </a>
                <ul className="cursor-pointer w-[80%] flex flex-col ">
                  <li>
                    {" "}
                    <a href="#">Work</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Education</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="font-bold" href="#footer">
                  <TiContacts /> Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-desktop hidden lg:flex lg:pt-2 lg:font-bold cursor-pointer">
            <ul className="flex">
              <li className="transform transition-transform hover:scale-105">
                <a href="#about"> Home</a>
              </li>

              <li className="transform transition-transform hover:scale-105">
                <a href="#skills-section">Skills</a>
              </li>
              <li className="transform transition-transform hover:scale-105">
                <a href="#projects">Projects</a>
              </li>
              <div className="dropdown dropdown-bottom ">
                <label tabIndex={0} className="cursor-pointer">
                  Experience
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 cursor-pointer"
                >
                  <li>
                    <a>Work</a>
                  </li>
                  <li>
                    <a>Education</a>
                  </li>
                </ul>
              </div>

              <li className="text-center transform transition-transform hover:scale-105">
                <a href="#footer">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className=" text-2xl text-right font-bold cursor-pointer lg:pr-24">
              | a n t h i y a |
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
