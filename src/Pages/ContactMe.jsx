import { useRef } from "react";
import { useIsVisible } from "../Hooks/IsElementVisiable";

const ContactMe = () => {
  const list = document.querySelectorAll(".list");
  const contactMeRef = useRef(null);
  const isVisible = useIsVisible(contactMeRef);

  if (isVisible) {
    list.forEach((item) => item.classList.remove("active"));
    list[4].classList.add("active");
  }

  return (
    <div id="contactMe" className="contactMe__section">
      <h1 ref={contactMeRef} className="ContactMe">
        Contact Me
      </h1>
      <div className="contact__contact_info">
        <div className="contact__container">
          <i className="fas fa-mobile-alt contact_pic"></i>
          <p>Phone / Text: (780) 909-8840 </p>
        </div>
        <div className="contact__container">
          <i className="fas fa-envelope contact_pic"></i>
          <p>Email: hectorayoung@gmail.com</p>
        </div>
        <div className="contact__container">
          <a
            className="linkedIn interactive"
            href="https://www.linkedin.com/in/hector-young/"
            target="_blank"
          >
            <p>
              <i className="fab fa-linkedin contact_pic"></i> LinkedIn{" "}
            </p>
          </a>
        </div>
        <div className="contact__container interactive">
          <i className="fas fa-sticky-note contact_pic"></i>
          <p>Send a message</p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
