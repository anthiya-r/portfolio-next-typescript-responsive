"use client";
import { useNavigate } from "react-router-dom";
import { GoHome } from "@react-icons/all-files/go/GoHome";
import { VscTools } from "@react-icons/all-files/vsc/VscTools";
import { GiProgression } from "@react-icons/all-files/gi/GiProgression";
import { TiContacts } from "@react-icons/all-files/ti/TiContacts";
import { AiOutlineFundProjectionScreen } from "@react-icons/all-files/ai/AiOutlineFundProjectionScreen";

const Navbar = () => {
  const navigate = useNavigate();
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
                <a className="font-bold ">
                  {" "}
                  <GoHome />
                  Home
                </a>
              </li>
              {/* <li>
                <a className="font-bold">
                  {" "}
                  <BiUser />
                  About
                </a>
              </li> */}
              <li>
                <a className="font-bold" onClick={() => navigate("/skills")}>
                  {" "}
                  <VscTools />
                  Skills
                </a>
              </li>
              <li>
                <a className="font-bold">
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
                <a className="font-bold">
                  <TiContacts /> Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-desktop hidden lg:flex lg:pt-2 lg:font-bold cursor-pointer">
            <ul className="flex">
              <li>
                <a href="">Home</a>
              </li>

              <li>
                <a onClick={() => navigate("/skills")}>Skills</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Experience</a>
              </li>

              <li className="text-center">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className=" text-2xl text-right font-bold cursor-pointer hover:text-red-500 lg:pr-24">
              | a n t h i y a |
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
