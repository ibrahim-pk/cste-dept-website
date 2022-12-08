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
          <AnimationOnScroll
            className="csteClubImg"
            animateIn="animate__fadeInRightBig"
          >
            <img
              src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/302437402_779773696757763_1874941255832335242_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFL8T0PuJtU33XriUNk-ZmZ0OAafmGQGijQ4Bp-YZAaKF_7XfWLrgqynMn5G3VxX-6DogCqtWJWWqrOGpxqzUrA&_nc_ohc=-uy2KwGDakcAX8tEs5U&_nc_ht=scontent.fdac24-4.fna&oh=00_AfB_AK4T0M1EWmttBxL_D_gEe7V_nmnh2QZrnm3W-OGbMA&oe=6391692B"
              className=" rounded-lg shadow-xl"
            />
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
