import React, { useState } from "react";
import InputField from "../Common/InputField";
import style from "./Students.module.css";
export default function Students() {
  const [search, setSearch] = useState("");
  const [session, setSession] = useState("");
  return (
    <div className="mx-auto max-w-screen-xl	 w-full px-4 mt-16 mb-4">
      <h2 className="text-3xl mb-12 text-center">Students</h2>
      <div className="overflow-x-auto w-full">
        <div className="w-full overflow-hidden my-2 pb-2 flex justify-between">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Session</span>
            </label>
            <select
              className={`select select-bordered ${style.selectStudent}`}
              onChange={(e) => setSession(e.target.value)}
            >
              <option value="">All Session</option>
              <option value="2020-21">2020-21</option>
              <option value="2020-21">2020-21</option>
              <option value="2020-21">2020-21</option>
              <option value="2020-21">2020-21</option>
            </select>
          </div>
          <div>
            <InputField
              type="text"
              label="Search"
              setField={setSearch}
              fieldValue={search}
              className="max-w-xs float-right input-lg"
            ></InputField>
          </div>
        </div>
        <table className="table w-full  table-zebra">
          <thead>
            <tr>
              <th>Name</th>
              <th>Session</th>
              <th>Blood Group</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://daisyui.com/tailwind-css-component-profile-5@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Lorem, ipsum.</div>
                    <div className="text-sm opacity-50">ASH2101008M</div>
                  </div>
                </div>
              </td>
              <td>2020-21</td>
              <td>O+</td>
              <td>
                <span>018*******</span>
              </td>
              <td>
                <a href="mailto:student.nstu.com" className="underline">
                  student.NSTU.com
                </a>
              </td>
              <td>
                <p>Noakhali, Bangladesh</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
