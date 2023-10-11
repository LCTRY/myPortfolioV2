import { useRef } from "react";

export const NavBar = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <nav className="nav__container">
      <ul className="nav__list">
        <li className="list active" id="nav__home" ref={homeRef}>
          <a href="#home">
            <span className="icon">
              <i className="fas fa-home"></i>
            </span>
            <span className="menu__text">Home</span>
          </a>
        </li>
        <li className="list" id="nav__about" ref={aboutRef}>
          <a href="#aboutMe">
            <span className="icon">
              <i className="fas fa-address-card"></i>
            </span>
            <span className="menu__text">About Me</span>
          </a>
        </li>
        <li className="list" id="nav__skills" ref={skillsRef}>
          <a href="#skills">
            <span className="icon">
              <i className="fas fa-book"></i>
            </span>
            <span className="menu__text">Skills</span>
          </a>
        </li>
        <li className="list" id="nav__portfolio" ref={portfolioRef}>
          <a href="#portfolio">
            <span className="icon">
              <i className="fas fa-award"></i>
            </span>
            <span className="menu__text">Portfolio</span>
          </a>
        </li>
        <li className="list" id="nav__contact" ref={contactRef}>
          <a href="#contactMe">
            <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="menu__text">Contact</span>
          </a>
        </li>
        <div className="indicator"></div>
      </ul>
    </nav>
  );
};

export default NavBar;
