import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";

export const projects = [
  {
    title: "To Do App",
    description:
      "A responsive app for listing your tasks using JavaScript (React) Tailwind CSS for styling and having local storage.",
    link: "https://example.com/project1",
    tags: [
      <AiFillHtml5 key="html" size={30} />,
      <BiLogoCss3 key="css" size={33} />,
      <BiLogoJavascript key="css" size={33} />,
      <BiLogoReact key="css" size={33} />,
      <BiLogoTailwindCss key="tailwind" size={33} />,
    ],
  },
  {
    title: "Project 2",
    description: "Description for Project 2",
    link: "https://example.com/project2",
    tags: [<AiFillHtml5 key="html" size={30} />], // Use the icon as a component
  },
];
