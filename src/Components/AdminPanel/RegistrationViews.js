import React, { useState } from "react";
import InputField from "../Common/InputField";

export default function RegistrationViews({ year, term }) {
  const [search, setSearch] = useState("");
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-2 border-b pb-2">
        Registration ({year}-{term})
      </h2>
      <div className="w-full overflow-hidden my-2">
        <InputField
          type="text"
          label="Search"
          setField={setSearch}
          fieldValue={search}
          className="max-w-xs float-right input-lg"
        ></InputField>
      </div>
      <div className="">
        <table className="table table-compact table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll</th>
              <th>Date</th>
              <th className="w-16"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BOrhan</td>
              <td>ASH2101008M</td>
              <td>11-02-22</td>
              <td>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>BOrhan</td>
              <td>ASH2101008M</td>
              <td>11-02-22</td>
              <td>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>BOrhan</td>
              <td>ASH2101008M</td>
              <td>11-02-22</td>
              <td>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>BOrhan</td>
              <td>ASH2101008M</td>
              <td>11-02-22</td>
              <td>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>BOrhan</td>
              <td>ASH2101008M</td>
              <td>11-02-22</td>
              <td>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>BOrhan</td>
              <td>ASH2101008M</td>
              <td>11-02-22</td>
              <td>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>BOrhan</td>
              <td>ASH2101008M</td>
              <td>11-02-22</td>
              <td>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btn-group grid grid-cols-2 w-80 mt-5 float-right">
          <button className="btn btn-outline btn-xs">Previous page</button>
          <button className="btn btn-outline btn-xs">Next</button>
        </div>
      </div>
    </div>
  );
}
