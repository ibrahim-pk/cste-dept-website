import React, { useState } from "react";
import InputField from "../Common/InputField";

export default function ViewStudent() {
  const [search, setSearch] = useState("");
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-2 border-b pb-2">Students (500)</h2>
      <div className="w-full overflow-hidden my-2">
        <InputField
          type="text"
          label="Search"
          setField={setSearch}
          fieldValue={search}
          className="max-w-xs float-right input-lg"
        ></InputField>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll</th>
              <th>Password</th>
              <th>Email</th>
              <th>Role</th>
              <th className="w-16"></th>
              <th className="w-16"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Name</div>
                    <div className="text-sm opacity-50">2020-21</div>
                  </div>
                </div>
              </td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
              <td>General</td>
              <td>
                <button className="btn btn-ghost btn-xs">Edit</button>
              </td>
              <td>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Name Name Name</div>
                    <div className="text-sm opacity-50">2020-21</div>
                  </div>
                </div>
              </td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
              <td>CR</td>
              <td>
                <button className="btn btn-ghost btn-xs">Edit</button>
              </td>
              <td>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="btn-group grid grid-cols-2 w-80 mt-5 float-right">
        <button className="btn btn-outline btn-xs">Previous page</button>
        <button className="btn btn-outline btn-xs">Next</button>
      </div>
    </div>
  );
}
