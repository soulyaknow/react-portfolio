import React, { useEffect } from "react";
import Navlinks from "./Navigations/Navlinks";
import "./App.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Content1 from "./Sections/Content1";
import Content2 from "./Sections/Content2";
import Content3 from "./Sections/Content3";
import Content4 from "./Sections/Content4";
import Content5 from "./Sections/Content5";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Intersecting:", entry.target);
            entry.target.classList.add("fade-in-visible");
            observer.unobserve(entry.target);
          } else {
            console.log("Not intersecting:", entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="max-h-full max-w-full px-10">
        <Navlinks />
        <div className="flex flex-grow flex-col space-y-32 md:mt-32 mt-32 fade-in-section">
          <section className="fade-in flex flex-col  mb-10" id="section-1">
            <Content1 />
          </section>
          <section className="fade-in px-52" id="section-2">
            <Content2 />
          </section>
          <section className="fade-in" id="section-3">
            <Content3 />
          </section>
          <section className="fade-in" id="section-4">
            <Content4 />
          </section>
          <section
            className="fade-in flex flex-col items-center justify-center pb-10"
            id="section-5"
          >
            <Content5 />
          </section>
        </div>
        <div className="button-up flex justify-end">
          <div className="border rounded-full w-10 h-10 flex justify-center items-center">
            <button onClick={handleScrollToTop}>
              <FontAwesomeIcon icon={faArrowUp} className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
