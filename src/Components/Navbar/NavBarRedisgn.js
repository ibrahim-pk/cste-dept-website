import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../img/logo.png";

export default function NavBarRedisgn() {
  return (
    <div>
      <div className="flex justify-between border-b px-4 py-2 items-center">
        <div className="flex justify-between">
          <div>
            <span>+7701234567</span>
            <a href="#" className="block">
              Noakhali-3814, Bangladesh
            </a>
          </div>
          <div>
            <a href="#"></a>
          </div>
        </div>
        <div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className=" m-1 cursor-pointer">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div className="p-2">
                <strong>Borhan</strong>
                <p>ASH2101008M</p>
              </div>
              <li>
                <Link to="/myprofile">Dashboard</Link>
              </li>
            </ul>
          </div>
          <Link to="/login" className="btn btn-xs btn-ghost">
            Login
          </Link>
        </div>
      </div>
      {/* logo */}
      <div className="hidden lg:flex  items-center justify-center text-center lg:text-left flex-col md:flex-row gap-4 py-4 px-2">
        <div>
          <img src={logo} alt="NSTU LOGO" className="w-16" />
        </div>
        <div>
          <h3 className="text-xl lg:text-2xl">
            Noakhali Science & Technology Univeristy
          </h3>
          <h2 className="text-xl lg:text-2xl font-semibold">
            Computer Science and Telecommunication Engineering
          </h2>
        </div>
      </div>
      {/*
        NAVBAR
        */}
      <div className="navbar bg-base-100 border-b border-t lg:justify-center">
        <div className="navbar-start flex justify-between lg:hidden w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <Link to="/registrationform">Registration </Link>
              </li>

              <li>
                <Link to="/coverpagegenerator">Cover Page</Link>
              </li>
              <li>
                <Link to="/coursematerials">Materials</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  More
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul
                  className="p-2 bg-base-100 min-w-xs"
                  style={{ zIndex: "99999999" }}
                >
                  <li>
                    <Link to="/faculty">Faculty</Link>
                  </li>
                  <li>
                    <Link to="/students">Student</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="normal-case  text-3xl xl:text-xl flex items-center "
          >
            <img src={logo} className="w-16 pr-4" alt="NSTU Logo" />

            <span className="font-semibold block text-xl text-transparent bg-clip-text bg-gradient-to-r to-blue-900 from-blue-800">
              Computer Science & Telecommunication Engineering
            </span>
          </Link>
        </div>
        <div className="w-full navbar-center hidden lg:flex flex-1">
          <ul className="menu mx-auto  menu-horizontal p-0 hover:bg-black-400 text-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/registrationform">Registration</Link>
            </li>

            <li>
              <Link to="/coverpagegenerator">Cover Page</Link>
            </li>
            <li>
              <Link to="/coursematerials">Materials</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/admin/dashboard">Admin</Link>
            </li>

            <li tabIndex={0}>
              <a className="justify-between">
                More
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul
                className="p-2 bg-base-100 min-w-xs"
                style={{ zIndex: "99999999" }}
              >
                <li>
                  <Link to="/faculty">Faculty</Link>
                </li>
                <li>
                  <Link to="/students">Student</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
