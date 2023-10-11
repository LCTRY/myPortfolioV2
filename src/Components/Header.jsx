import { useState } from "react";
import NavBar from "./NavBar";

const Header = () => {
  // const [isShowResume, setShowResume] = useState(false);

  // const onClickHander = () => {
  //   setShowResume(!isShowResume);
  // };
  function toggleResume() {
    document.body.classList.toggle("resume-open");
  }

  return (
    <div className="header_container">
      <div className="header__content_container">
        <NavBar className="header__navBar" />
        <h1 className="header__title">Hector Young</h1>
        <div className="header__resume">
          <button
            id="header_showResume_btn"
            className="buttons interactive"
            onClick={toggleResume}
          >
            View Resume
          </button>
        </div>

        <div className="resume">
          <a
            className="links interactive"
            href="../../data/Hector Young - Resume.pdf"
            download="Hector Young - Resume.pdf"
          >
            Download Resume
          </a>
          <button className="exit interactive" onClick={toggleResume}>
            X
          </button>
          <div className="resume_container">
            <img
              src={require("../data/resume1.PNG")}
              alt="Hector's resume page 1"
            />
            <img
              src={require("../data/resume2.PNG")}
              alt="Hector's resume part 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
