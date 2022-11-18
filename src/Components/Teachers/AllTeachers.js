import React from "react";
import { Link } from "react-router-dom";

export default function AllTeachers() {
  return (
    <div className="mx-auto max-w-screen-xl	 w-full px-4 mt-16 mb-4">
      <h2 className="text-3xl mb-12 text-center">Faculty</h2>
      <div className="mx-auto grid grid-cols-1 place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="card w-full max-w-md mx-auto sm:mx-0	bg-base-100 shadow-xl hover:shadow-lg">
          <Link to="/facultydetails/name">
            <figure>
              <img
                src="https://static.just.edu.bd/public/ca_1567062004043_genesys.jpg"
                alt="Shoes"
                className="w-full"
              />
            </figure>
            <div className="card-body text-left px-2 md:px-4">
              <h2 className="card-title text-xl lg:text-2xl">
                Dr. Ashadun Nobi
              </h2>
              <h3 className="">Chairman and Professor</h3>
              <p>gmail@mail.com</p>
            </div>
          </Link>
        </div>
        <div className="card w-full max-w-md mx-auto sm:mx-0	bg-base-100 shadow-xl hover:shadow-lg">
          <Link to="/facultydetails/name">
            <figure>
              <img
                src="https://static.just.edu.bd/public/ca_1567062004043_genesys.jpg"
                alt="Shoes"
                className="w-full"
              />
            </figure>
            <div className="card-body text-left px-2 md:px-4">
              <h2 className="card-title text-xl lg:text-2xl">
                Dr. Ashadun Nobi
              </h2>
              <h3 className="">Chairman and Professor</h3>
              <p>gmail@mail.com</p>
            </div>
          </Link>
        </div>
        <div className="card w-full max-w-md mx-auto sm:mx-0	bg-base-100 shadow-xl hover:shadow-lg">
          <Link to="/facultydetails/name">
            <figure>
              <img
                src="https://static.just.edu.bd/public/ca_1567062004043_genesys.jpg"
                alt="Shoes"
                className="w-full"
              />
            </figure>
            <div className="card-body text-left px-2 md:px-4">
              <h2 className="card-title text-xl lg:text-2xl">
                Dr. Ashadun Nobi
              </h2>
              <h3 className="">Chairman and Professor</h3>
              <p>gmail@mail.com</p>
            </div>
          </Link>
        </div>
        <div className="card w-full max-w-md mx-auto sm:mx-0	bg-base-100 shadow-xl hover:shadow-lg">
          <Link to="/facultydetails/name">
            <figure>
              <img
                src="https://static.just.edu.bd/public/ca_1567062004043_genesys.jpg"
                alt="Shoes"
                className="w-full"
              />
            </figure>
            <div className="card-body text-left px-2 md:px-4">
              <h2 className="card-title text-xl lg:text-2xl">
                Dr. Ashadun Nobi
              </h2>
              <h3 className="">Chairman and Professor</h3>
              <p>gmail@mail.com</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
