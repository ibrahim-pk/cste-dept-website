import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../img/logo.png";
export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 border-b">
        <div className="navbar-start">
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
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="normal-case text-xl flex items-center ">
            <img src={logo} className="w-16 pr-4" />
            <span className="font-semibold">
              Computer Science and <br />
              Telecommunication Engineering
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 hover:bg-black-400">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Registration Form</a>
            </li>
            <li>
              <a>Assignment Form</a>
            </li>
            <li>
              <a>Course Materials</a>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <a>Admin</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="flex items-center align-middle items-center	">
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png" />
              </div>
            </div>
            <div className="ml-4">
              <h5>
                Greetings, <strong>Mohammad</strong>
              </h5>
              <Link>Dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
