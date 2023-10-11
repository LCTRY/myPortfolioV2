const ProjectCard = (props) => {
  return (
    <div className="containers">
      <div
        className="portfolio__container"
        onClick="this.classList.toggle('flip');"
      >
        <div className="portfolio__front">
          <div>
            <img
              className="portfolio__front_pic"
              src={props.data.images[0]}
              alt="Tournament screen shot"
              draggable="false"
            />
          </div>
        </div>
        <div className="portfolio__back">
          <h3>{props.data.title}</h3>
          <div className="portfolio__back_container">
            <div>
              <img
                className="portfolio__back_pic"
                src={props.data.images[1]}
                alt={props.data.alt}
              />
            </div>
            <div>
              <img
                className="portfolio__back_pic"
                src={props.data.images[2]}
                alt={props.data.alt}
              />
            </div>
            <div>
              <img
                className="portfolio__back_pic"
                src={props.data.images[3]}
                alt={props.data.alt}
              />
            </div>
            <div>
              <img
                className="portfolio__back_pic"
                src={props.data.images[4]}
                alt={props.data.alt}
              />
            </div>
          </div>
          <a
            className="links interactive"
            href="https://github.com/LCTRY/Tournament"
            target="_blank"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
