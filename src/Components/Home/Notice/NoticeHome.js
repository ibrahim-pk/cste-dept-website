import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function NoticeHome() {
  return (
    <div className="m-full mx-auto my-8 px-4">
      <h2 className="text-2xl font-semibold my-5">Latest Notices</h2>
      <div className="grid grid-cols-1  gap-2 w-full mx-auto ">
        <div className="card  bg-base-100 shadow-xl border">
          <div className="card-body p-4 flex flex-row justify-between items-center">
            <div>
              <h4 className="text-blue-900 font-semibold flex items-center">
                <FontAwesomeIcon
                  icon={faClock}
                  className="mr-2"
                ></FontAwesomeIcon>
                15 Nov 2022
              </h4>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p className="mt-2">
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
            </div>
            <div className="card-actions justify-end">
              <button className="btn bg-blue-900 btn-sm text-white hover:bg-blue-800">
                Download
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="card  bg-base-100 shadow-xl border">
          <div className="card-body p-4 flex flex-row justify-between items-center">
            <div>
              <h4 className="text-blue-900 font-semibold flex items-center">
                <FontAwesomeIcon
                  icon={faClock}
                  className="mr-2"
                ></FontAwesomeIcon>
                15 Nov 2022
              </h4>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p className="mt-2">
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
            </div>
            <div className="card-actions justify-end">
              <button className="btn bg-blue-900 btn-sm text-white hover:bg-blue-800">
                Download
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="card  bg-base-100 shadow-xl border">
          <div className="card-body p-4 flex flex-row justify-between items-center">
            <div>
              <h4 className="text-blue-900 font-semibold flex items-center">
                <FontAwesomeIcon
                  icon={faClock}
                  className="mr-2"
                ></FontAwesomeIcon>
                15 Nov 2022
              </h4>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p className="mt-2">
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
            </div>
            <div className="card-actions justify-end">
              <button className="btn bg-blue-900 btn-sm text-white hover:bg-blue-800">
                Download
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="card  bg-base-100 shadow-xl border">
          <div className="card-body p-4 flex flex-row justify-between items-center">
            <div>
              <h4 className="text-blue-900 font-semibold flex items-center">
                <FontAwesomeIcon
                  icon={faClock}
                  className="mr-2"
                ></FontAwesomeIcon>
                15 Nov 2022
              </h4>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p className="mt-2">
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
            </div>
            <div className="card-actions justify-end">
              <button className="btn bg-blue-900 btn-sm text-white hover:bg-blue-800">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center w-full my-5 overflow-hidden">
        <Link
          to="/notices"
          className="btn btn-outline float-right   hover:bg-blue-900 btn-sm"
        >
          See All
        </Link>
      </div>
    </div>
  );
}
