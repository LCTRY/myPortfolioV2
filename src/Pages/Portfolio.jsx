import ProjectCard from "../Components/projectCard";
import { useRef } from "react";
import data from "../data/projectData.json";
import { useIsVisible } from "../Hooks/IsElementVisiable";

const Portfolio = () => {
  const list = document.querySelectorAll(".list");
  const portfolioRef = useRef(null);
  const isVisiable = useIsVisible(portfolioRef);

  // navbar focus

  if (isVisiable) {
    list.forEach((item) => item.classList.remove("active"));
    list[3].classList.add("active");
  }

  // portfolio slider

  const trackRef = useRef(null);

  const handleOnDown = (e) =>
    (trackRef.current.dataset.mouseDownAt = e.clientX);

  const handleOnUp = () => {
    trackRef.current.dataset.mouseDownAt = "0";
    trackRef.current.dataset.prevPercentage =
      trackRef.current.dataset.percentage;
  };

  const handleOnMove = (e) => {
    if (trackRef.current.dataset.mouseDownAt === "0") return;

    const mouseDelta =
        parseFloat(trackRef.current.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained =
        parseFloat(trackRef.current.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    trackRef.current.dataset.percentage = nextPercentage;

    trackRef.current.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    // for (const image of trackRef.getElementsByClassName("image")) {
    //   image.animate(
    //     {
    //       objectPosition: `${100 + nextPercentage}% center`,
    //     },
    //     { duration: 1200, fill: "forwards" }
    //   );
    // }
  };

  window.onmousedown = (e) => handleOnDown(e);

  window.ontouchstart = (e) => handleOnDown(e.touches[0]);

  window.onmouseup = (e) => handleOnUp(e);

  window.ontouchend = (e) => handleOnUp(e.touches[0]);

  window.onmousemove = (e) => handleOnMove(e);

  window.ontouchmove = (e) => handleOnMove(e.touches[0]);

  return (
    <div id="portfolio" className="portfolio__section">
      <h1 ref={portfolioRef} id="portfolio">
        Portfolio
      </h1>
      <div
        className="portfolio__card_track"
        ref={trackRef}
        data-mouse-down-at="0"
        data-prev-percentage="0"
      >
        <ProjectCard data={data.portfolio[0]} />
        <ProjectCard data={data.portfolio[1]} />
        <ProjectCard data={data.portfolio[2]} />
        <ProjectCard data={data.portfolio[3]} />
      </div>
    </div>
  );
};

export default Portfolio;
