import { HiOutlineDesktopComputer } from "@react-icons/all-files/hi/HiOutlineDesktopComputer";

const Skills = () => {
  return (
    <div className="skills p-6" id="skills-section">
      <article className="programming-language ">
        <div className="flex items-center gap-2">
          <HiOutlineDesktopComputer size={40} className="text-4xl w-[5%]" />
          <h1 className="text-3xl font-bold"> Programming Languages</h1>
        </div>

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Python(Basic)</li>
          <li>Typescript(Basic)</li>
        </ul>
      </article>
    </div>
  );
};

export default Skills;
