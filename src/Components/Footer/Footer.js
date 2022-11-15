import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../img/logo.png";
import style from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <div className="w-full border-t pt-12 px-2">
        <div className="max-w-screen-lg flex flex-col md:flex-row gap-4 mx-auto items-center justify-between">
          <div className="w-full">
            <h2 className="font-semibold mb-2">Quick Links</h2>
            <div
              className={`flex flex-col md:flex-row gap-4 ${style.footerUl}`}
            >
              <ul className="flex-1">
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">Teachers</Link>
                </li>
                <li>
                  <Link to="#">Students</Link>
                </li>
                <li>
                  <Link to="#">Students</Link>
                </li>
                <li>
                  <Link to="#">Publications</Link>
                </li>
              </ul>
              <ul className="flex-1">
                <li>
                  <Link to="#">Registration</Link>
                </li>
                <li>
                  <Link to="#">Cover Page</Link>
                </li>
                <li>
                  <Link to="#">Materials</Link>
                </li>
                <li>
                  <Link to="#">Publications</Link>
                </li>
              </ul>
              <ul className="flex-1">
                <li>
                  <Link to="#">Registration</Link>
                </li>
                <li>
                  <Link to="#">Cover Page</Link>
                </li>
                <li>
                  <Link to="#">Materials</Link>
                </li>
                <li>
                  <Link to="#">Publications</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center ">
            <img src={logo} className="w-12" />
            <h2 className="text-xs">
              Noakhali Science & Techonology University
            </h2>
          </div>
        </div>
      </div>
      <div className="text-center text-xs my-4">
        <p>Copyright &copy; {new Date().getFullYear()} CSTE, NSTU</p>
      </div>
    </>
  );
}
