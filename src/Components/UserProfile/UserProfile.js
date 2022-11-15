import React, { useState } from "react";
import { Link } from "react-router-dom";
import AssignmentForm from "../AssignmentCoverPage/AssignmentForm";
import Loading from "../Common/Loading";
import RegistrationFormView from "../RegistrationForm/RegistrationFormView";
import styles from "./UserProfile.css";
import EditProfile from "./EditProfile";
import Result from "./Result";
import Suggestion from "./Suggestion/Suggestion";

export default function () {
  const [page, setPage] = useState();

  return (
    <div>
      <div className="drawer" id="drawer-user">
        <input
          id="my-drawer"
          type="checkbox"
          className={`drawer-toggle drawer_height`}
        />
        <div className="drawer-content flex flex-col">
          <label
            htmlFor="my-drawer"
            className="p-4 cursor-pointer drawer-button bg-blue-900 text-white"
          >
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
          <div className="flex-1 ">
            {page ? (
              <>
                {page === "RegistrationView" && <RegistrationFormView />}

                {page == "editProfile" && <EditProfile />}
                {page == "Result" && <Result />}
                {page == "Suggestion" && <Suggestion />}
              </>
            ) : (
              <div className="pt-2 px-5 mx-auto   mb-4  max-w-screen-xl	">
                <h2 className="text-2xl">
                  Welcome,{" "}
                  <span className="font-semibold text-blue-900">
                    Mohammad Borhan
                  </span>
                </h2>
                <button
                  onClick={() => setPage("editProfile")}
                  className="text-right w-full float-right block font-semibold mt-4"
                >
                  Edit Profile
                </button>
                <div>
                  <table className="border mt-5">
                    <tbody>
                      <tr className="border ">
                        <td className="bg-slate-100 border">Name</td>
                        <td className="">Borhan</td>
                      </tr>
                      <tr className="border ">
                        <td className="bg-slate-100 border">Father's Name</td>
                        <td className="">ABC</td>
                      </tr>
                      <tr>
                        <td className="bg-slate-100 border">Mother's Name</td>
                        <td className="">DEF</td>
                      </tr>
                      <tr className="border ">
                        <td className="bg-slate-100 border">Department</td>
                        <td className="">CSTE</td>
                      </tr>
                      <tr className="border ">
                        <td className="bg-slate-100 border">Session</td>
                        <td className="">2200121</td>
                      </tr>
                      <tr>
                        <td className="bg-slate-100 border">Year</td>
                        <td className="">01</td>
                      </tr>
                      <tr>
                        <td className="bg-slate-100 border">Term</td>
                        <td className="">01</td>
                      </tr>
                      <tr>
                        <td className="bg-slate-100 border">CGPA</td>
                        <td className="">3.50</td>
                      </tr>
                      <tr>
                        <td className="bg-slate-100 border">Contact No:</td>
                        <td className="">01</td>
                      </tr>
                      <tr>
                        <td className="bg-slate-100 border">Address:</td>
                        <td className="">Noakhali, Bangladesh.</td>
                      </tr>
                      <tr>
                        <td className="bg-slate-100 border">Birthday:</td>
                        <td className="">01-01-2020</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="my-5 flex gap-6 mt-8">
                    <div className="flex-1">
                      <h2 className="text-2xl">SSC Details</h2>
                      <table className="border mt-5">
                        <tbody>
                          <tr className="border ">
                            <td className="bg-slate-100 border">Board</td>
                            <td className="">Chittagong</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">Year</td>
                            <td className="">2020</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">Roll No</td>
                            <td className="">104070</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">
                              Registration No
                            </td>
                            <td className="">15145656565</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">Board</td>
                            <td className="">4.99</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl">HSC Details</h2>
                      <table className="border mt-5">
                        <tbody>
                          <tr className="border ">
                            <td className="bg-slate-100 border">Board</td>
                            <td className="">Chittagong</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">Year</td>
                            <td className="">2020</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">Roll No</td>
                            <td className="">104070</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">
                              Registration No
                            </td>
                            <td className="">15145656565</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">Board</td>
                            <td className="">4.99</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <button onClick={() => setPage("")}>Home</button>
            </li>

            <li>
              <button onClick={() => setPage("RegistrationView")}>
                Registration View
              </button>
            </li>

            <li>
              <button onClick={() => setPage("Result")}>Result</button>
            </li>
            <li>
              <button onClick={() => setPage("Suggestion")}>Suggestion</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
