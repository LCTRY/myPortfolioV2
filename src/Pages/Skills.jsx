import { useRef } from "react";
import { useIsVisible } from "../Hooks/IsElementVisiable";

const Skills = () => {
  const list = document.querySelectorAll(".list");
  const skillRef = useRef(null);
  const isVisible = useIsVisible(skillRef);

  if (isVisible) {
    list.forEach((item) => item.classList.remove("active"));
    list[2].classList.add("active");
  }

  return (
    <div id="skills" className="skills__section">
      <h3 ref={skillRef} id="skills">
        Skills
      </h3>
      <div className="Skills__Book">
        <div className="Skills__Frontend_container"></div>
        <div className="Skills__Backend_container"></div>
        <div className="Skills__Database_container"></div>
        <div className="Skills__Other_container"></div>
      </div>
    </div>
  );
};

export default Skills;
