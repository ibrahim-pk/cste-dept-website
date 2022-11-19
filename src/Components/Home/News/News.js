import React from "react";
import { Link } from "react-router-dom";

export default function NewsHome() {
  return (
    <div className="m-full mx-auto my-8 px-4">
      <h2 className="text-2xl font-semibold my-5">Latest News</h2>
      <div>
        <img
          src="https://via.placeholder.com/300/300"
          alt="IMG"
          className="img-fluid w-full max-w-screen-sm max-h-64"
        />
        <h2 className="font-semibold text-xl my-2">
          Lorem ipsum dolor sit amet.
        </h2>
        <p className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ab
          modi, unde quos perspiciatis minima dolores perferendis! Deserunt
          expedita maiores hic praesentium debitis odit doloribus vero explicabo
          porro, at quidem.
        </p>
        <p>
          <Link to="" className="btn btn-xs btn-outline mr-2">
            Programming
          </Link>
          <Link to="" className="btn btn-xs btn-outline mr-2">
            contest
          </Link>
          <Link to="" className="btn btn-xs btn-outline mr-2">
            dsa
          </Link>
        </p>
        <button className="btn bg-blue-900 btn-sm text-white hover:bg-blue-800 float-right my-5">
          Read More
        </button>
      </div>
      <div className="mx-auto text-center w-full my-5 overflow-hidden">
        <Link
          to="/news"
          className="btn btn-outline float-right   hover:bg-blue-900 btn-sm"
        >
          See All
        </Link>
      </div>
    </div>
  );
}
