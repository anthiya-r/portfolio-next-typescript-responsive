"use client";
import { GoHome } from "@react-icons/all-files/go/GoHome";
import { BiUser } from "@react-icons/all-files/bi/BiUser";
import { VscTools } from "@react-icons/all-files/vsc/VscTools";
import { GiProgression } from "@react-icons/all-files/gi/GiProgression";
import { TiContacts } from "@react-icons/all-files/ti/TiContacts";
import { AiOutlineFundProjectionScreen } from "@react-icons/all-files/ai/AiOutlineFundProjectionScreen";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 w-[100%] text-black p-3">
        <div className="navbar-start w-full flex items-start">
          <div className="dropdown w-[20%]">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="font-bold">
                  {" "}
                  <GoHome />
                  Home
                </a>
              </li>
              <li>
                <a className="font-bold">
                  {" "}
                  <BiUser />
                  About
                </a>
              </li>
              <li>
                <a className="font-bold">
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

          <div>
            <h1 className=" text-2xl text-right font-bold cursor-pointer hover:text-red-500">
              | a n t h i y a |
            </h1>
          </div>
        </div>

        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
