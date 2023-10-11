import { useRef } from "react";
import { useIsVisible } from "../Hooks/IsElementVisiable";

const Home = () => {
  const list = document.querySelectorAll(".list");
  const homeRef = useRef(null);
  const isVisible = useIsVisible(homeRef);

  if (isVisible) {
    list.forEach((item) => item.classList.remove("active"));
    list[0].classList.add("active");
  }

  return (
    <div id="home" className="home__section">
      <div className="home__greeting">
        <p>
          <h1 ref={homeRef}> Welcome </h1>
          My name is Hector Young and I am a Software Developer based out of
          Edmonton, AB, Canada. I bring 10+ years of experience with complex,
          large scale business applications.
        </p>
      </div>
      {/* <div className="home__image"></div> */}
    </div>
  );
};

export default Home;
