import React from "react";
import styles from "../../CSTEClub/CSTEClub.module.css";
import slider4 from "../../../img/slider4.jpg";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
export default function CSTEClubHome() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h1 className="text-2xl font-semibold my-1">CSTE CLUB</h1>
      <hr />

      <div className="hero m-2 my-5 lg:p-10 md:p-10 card shadow-xl border items-center">
        <div className="hero-content text-left flex-col-reverse lg:flex-row justify-between w-full px-10">
          <div className="flex-1 mx-3 w-full">
            <h3 className="text-3xl mb-5">Our Mission</h3>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
              <ul
                className={`font-semibold text-2xl steps steps-vertical ${styles.steps}`}
              >
                <li className={`step  ${styles.step}`}>
                  Competative Programming (CP)
                </li>
                <li className={`step  ${styles.step}`}>Web Development</li>
                <li className={`step  ${styles.step}`}>Apps Development</li>
                <li className={`step  ${styles.step}`}>Cyber Sequrite</li>
              </ul>
            </AnimationOnScroll>
          </div>
          <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <img src={slider4} className="max-w-sm rounded-lg shadow-2xl" />
          </AnimationOnScroll>
        </div>
      </div>
      <div className="card-actions justify-end">
        <Link
          to="/csteclub"
          className="btn btn-outline btn-sm hover:bg-blue-900"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
}
