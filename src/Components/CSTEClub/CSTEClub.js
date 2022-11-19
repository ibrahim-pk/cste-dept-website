import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "./CSTEClub.module.css";
export default function CSTEClub() {
  return (
    <div className="mx-auto max-w-screen-xl	 w-full px-4 mt-16 mb-4">
      <h1 className="text-5xl mb-12 text-center font-bold">CSTE Club</h1>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://placeimg.com/260/400/arch"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h3 className="text-3xl ">About Us</h3>
            <p className="py-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              atque dolor ratione beatae exercitationem quibusdam. Aliquam,
              dicta impedit culpa, nesciunt excepturi dignissimos nihil repellat
              dolore quibusdam fugiat dolorem earum harum molestias corrupti.
              Totam quisquam, eos porro ratione vel debitis, rem sint quo
              architecto explicabo numquam nihil cumque, velit reprehenderit
              tempore hic impedit ab facilis ad ut commodi quis iure
              necessitatibus. Vero assumenda rerum, odio quas esse reprehenderit
              nemo obcaecati nam in minus quam, dolorum optio id, labore hic
              neque voluptatibus ut? Architecto error velit libero blanditiis
              alias, ullam quidem sint obcaecati, minima omnis sapiente!
              Nesciunt aut velit doloribus itaque dolore?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda consequuntur porro rerum eum cum, nisi minus quo
              eligendi maxime repellendus ab culpa distinctio maiores error
              sapiente eos labore a voluptate necessitatibus, est omnis
              molestias sint aut? Consequuntur amet dolor, ullam vero aperiam,
              iure molestias quo, quia itaque voluptatem ipsam! Labore nemo quod
              eos non assumenda vitae voluptas aspernatur a repudiandae.
            </p>
          </div>
        </div>
      </div>
      <div className="hero my-20">
        <div className="hero-content text-left flex-col-reverse lg:flex-row justify-between w-full max-w-screen-md">
          <div className="flex-1 w-full">
            <h3 className="text-3xl mb-5">Our Mission</h3>
            <ul className={` steps steps-vertical ${styles.steps}`}>
              <li className={`step  ${styles.step}`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
                tenetur quae. Illo!
              </li>
              <li className={`step  ${styles.step}`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </li>
              <li className={`step  ${styles.step}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                voluptatibus.
              </li>
              <li className={`step  ${styles.step}`}>
                Lorem ipsum dolor sit amet.
              </li>
            </ul>
          </div>
          <img
            src="https://placeimg.com/260/400/arch"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div>
      <div>
        <h4 className="text-3xl font-bold text-center my-8">Panel</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="shadow-xl border">
            <div className="flex p-5 items-center py-8 ">
              <figure className="">
                <div className="avatar">
                  <div className="max-w-xs rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </figure>
              <div className="items-center ml-5">
                <h2 className=" text-3xl font-bold">Lorem, ipsum dolor.</h2>
                <p className="text-2xl font-light">President</p>
                <p className="font-light mt-2">email@mail.com</p>
                <p className="font-light">+880121844444</p>
                <div className="mt-2">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-blue-900 text-2xl mr-3"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-sky-600 text-2xl mr-3"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl border">
            <div className="flex p-5 items-center py-8 ">
              <figure className="">
                <div className="avatar">
                  <div className="max-w-xs rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </figure>
              <div className="items-center ml-5">
                <h2 className=" text-3xl font-bold">Lorem, ipsum dolor.</h2>
                <p className="text-2xl font-light">General Secretary</p>
                <p className="font-light mt-2">email@mail.com</p>
                <p className="font-light">+880121844444</p>
                <div className="mt-2">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-blue-900 text-2xl mr-3"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-sky-600 text-2xl mr-3"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl border">
            <div className="flex p-5 items-center py-8 ">
              <figure className="">
                <div className="avatar">
                  <div className="max-w-xs rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </figure>
              <div className="items-center ml-5">
                <h2 className=" text-3xl font-bold">Lorem, ipsum dolor.</h2>
                <p className="text-2xl font-light">General Secretary</p>
                <p className="font-light mt-2">email@mail.com</p>
                <p className="font-light">+880121844444</p>
                <div className="mt-2">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-blue-900 text-2xl mr-3"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-sky-600 text-2xl mr-3"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl border">
            <div className="flex p-5 items-center py-8 ">
              <figure className="">
                <div className="avatar">
                  <div className="max-w-xs rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </figure>
              <div className="items-center ml-5">
                <h2 className=" text-3xl font-bold">Lorem, ipsum dolor.</h2>
                <p className="text-2xl font-light">General Secretary</p>
                <p className="font-light mt-2">email@mail.com</p>
                <p className="font-light">+880121844444</p>
                <div className="mt-2">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-blue-900 text-2xl mr-3"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-sky-600 text-2xl mr-3"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
