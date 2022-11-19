import React, { useState } from "react";
import InputField from "../../Common/InputField";

export default function ViewNotice() {
  const [search, setSearch] = useState("");
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-2 border-b pb-2">Notices (500)</h2>
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
              <th>Title</th>
              <th>Date</th>
              <th>Tags</th>
              <th></th>

              <th className="w-16"></th>
              <th className="w-16"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>24th June, 2022</td>
              <td>Blue, red, yello</td>
              <td>
                <a href="#" target="_blank" className="btn btn-ghost btn-xs">
                  Donwload
                </a>
              </td>
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
