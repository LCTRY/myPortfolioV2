import { useRef } from "react";
import { useIsVisible } from "../Hooks/IsElementVisiable";

const AboutMe = () => {
  const list = document.querySelectorAll(".list");
  const aboutRef = useRef(null);
  const isVisible = useIsVisible(aboutRef);

  if (isVisible) {
    list.forEach((item) => item.classList.remove("active"));
    list[1].classList.add("active");
  }

  return (
    <div id="aboutMe" className="aboutMe__section">
      <div className="main__text">
        <h3 ref={aboutRef} id="aboutMe">
          About me
        </h3>
      </div>
    </div>
  );
};

export default AboutMe;
