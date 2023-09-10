import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { SiDaisyui } from "react-icons/si";

export const projects = [
  {
    title: "To Do App",
    description:
      "A responsive app for listing your tasks using JavaScript (React) Tailwind CSS for styling and having local storage.",
    link: "https://github.com/anthiya-r/todoapp-responsive-react",
    tags: [
      <AiFillHtml5 key="html" size={30} />,
      <BiLogoCss3 key="css" size={33} />,
      <BiLogoJavascript key="css" size={33} />,
      <BiLogoReact key="css" size={33} />,
      <BiLogoTailwindCss key="tailwind" size={33} />,
    ],
  },
  {
    title: "Portfolio (Under coding)",
    description:
      "A responsive my portfolio website using HTML, CSS, Next.js, Typescript, Tailwind, daisyUI",
    link: "https://github.com/anthiya-r/portfolio-next-typescript-responsive",
    tags: [
      <AiFillHtml5 key="html" size={30} />,
      <BiLogoCss3 key="css" size={33} />,
      <BiLogoTailwindCss key="tailwind" size={33} />,
      <BiLogoTypescript key="typescript" size={33} />,
      <TbBrandNextjs key="nextjs" size={33} />,
      <SiDaisyui key="daisyui" size={33} />,
    ],
  },
  {
    title: "Q & A Blogs",
    description:
      "A responsive website using JavaScript (React) for the frontend, Tailwind CSS for styling, Node.js (Express) for the backend, and MongoDB for the database.",
    link: "https://github.com/anthiya-r/question-answer-blogs-api-mongodb-responsive",
    tags: [
      <AiFillHtml5 key="html" size={30} />,
      <BiLogoCss3 key="css" size={33} />,
      <BiLogoJavascript key="javascript" size={33} />,
      <BiLogoReact key="react" size={33} />,
      <BiLogoTailwindCss key="tailwind" size={33} />,
      <FaNode key="node" size={33} />,
      <SiExpress key="express" size={33} />,
      <BiLogoMongodb key="mongodb" size={33} />,
    ],
  },
  {
    title: "Easy Bank Landingpage",
    description:
      "A responsive Bangking landing page website using HTML, TAILWIND(CSS), React",
    link: "https://github.com/anthiya-r/easy-bank-landingpage-responsive-react",
    tags: [
      <AiFillHtml5 key="html" size={30} />,
      <BiLogoCss3 key="css" size={33} />,
      <BiLogoJavascript key="css" size={33} />,
      <BiLogoReact key="css" size={33} />,
      <BiLogoTailwindCss key="tailwind" size={33} />,
    ],
  },
  {
    title: "React Portfolio",
    description:
      "A landing page website to present skills and projects using using HTML, TAILWIND(CSS), React",
    link: "https://github.com/anthiya-r/react-portfolio-landingpage-desktop",
    tags: [
      <AiFillHtml5 key="html" size={30} />,
      <BiLogoCss3 key="css" size={33} />,
      <BiLogoJavascript key="css" size={33} />,
      <BiLogoReact key="css" size={33} />,
      <BiLogoTailwindCss key="tailwind" size={33} />,
    ],
  },
  {
    title: "Newsletter sign-up form ",
    description:
      "A small website form submission with success and invalid message using HTML, TAILWIND(CSS), Javascript",
    link: "https://github.com/anthiya-r/newsletter-submission",
    tags: [
      <AiFillHtml5 key="html" size={30} />,
      <BiLogoCss3 key="css" size={33} />,
      <BiLogoJavascript key="css" size={33} />,
      <BiLogoTailwindCss key="tailwind" size={33} />,
    ],
  },
];
