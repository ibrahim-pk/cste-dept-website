import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../Common/InputField";

export default function Notices() {
  const [search, setSearch] = useState("");

  return (
    <div className="mx-auto max-w-screen-xl	 w-full px-4 mt-16 mb-4">
      <h2 className="text-3xl mb-12 text-center">Notices</h2>
      <div className="w-full overflow-hidden p-2">
        <InputField
          type="text"
          label="Search"
          setField={setSearch}
          fieldValue={search}
          className="w-full float-right"
        ></InputField>
      </div>
      <div className="w-full flex flex-col gap-4 mt-4">
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

        <div className="w-full flex flex-col gap-4">
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
        <div className="w-full flex flex-col gap-4">
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
        <div className="w-full flex flex-col gap-4">
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
      </div>
      <div className="overflow-hidden">
        <div class="btn-group grid grid-cols-2 w-80 mt-5 float-right">
          <button class="btn btn-outline btn-xs">Previous page</button>
          <button class="btn btn-outline btn-xs">Next</button>
        </div>
      </div>
    </div>
  );
}
