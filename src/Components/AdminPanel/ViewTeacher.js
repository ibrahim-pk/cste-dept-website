import React, { useState } from "react";
import InputField from "../Common/InputField";

export default function ViewTeacher() {
  const [search, setSearch] = useState("");
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-2 border-b pb-2">Teachers (500)</h2>
      <div className="w-full overflow-hidden my-2">
        <InputField
          type="text"
          label="Search"
          setField={setSearch}
          fieldValue={search}
          className="max-w-xs float-right input-lg"
        ></InputField>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Study</th>
              <th>Research Interest</th>
              <th>About</th>
              <th>Email</th>
              <th></th>
              <th></th>
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
                    <div className="text-sm opacity-50">
                      Assistant Professor
                    </div>
                  </div>
                </div>
              </td>
              <td>
                B.Sc, M.Sc, Ph.d
                <br />
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">
                  Data Structure
                </span>
                <span className="badge badge-ghost badge-sm">
                  Cyber Security
                </span>
              </td>
              <td>
                <p>Mr. Lorem ipsum dolor sit amet ....</p>
              </td>
              <td>name@mail.com</td>

              <th>
                <button className="btn btn-ghost btn-xs">edit</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">delete</button>
              </th>
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
                    <div className="font-bold">Name</div>
                    <div className="text-sm opacity-50">
                      Assistant Professor
                    </div>
                  </div>
                </div>
              </td>
              <td>
                B.Sc, M.Sc, Ph.d
                <br />
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">
                  Data Structure
                </span>
                <span className="badge badge-ghost badge-sm">
                  Cyber Security
                </span>
              </td>
              <td>
                <p>Mr. Lorem ipsum dolor sit amet ....</p>
              </td>
              <td>name@mail.com</td>

              <th>
                <button className="btn btn-ghost btn-xs">edit</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">delete</button>
              </th>
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
                    <div className="font-bold">Name</div>
                    <div className="text-sm opacity-50">
                      Assistant Professor
                    </div>
                  </div>
                </div>
              </td>
              <td>
                B.Sc, M.Sc, Ph.d
                <br />
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">
                  Data Structure
                </span>
                <span className="badge badge-ghost badge-sm">
                  Cyber Security
                </span>
              </td>
              <td>
                <p>Mr. Lorem ipsum dolor sit amet ....</p>
              </td>
              <td>name@mail.com</td>

              <th>
                <button className="btn btn-ghost btn-xs">edit</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">delete</button>
              </th>
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
                    <div className="font-bold">Name</div>
                    <div className="text-sm opacity-50">
                      Assistant Professor
                    </div>
                  </div>
                </div>
              </td>
              <td>
                B.Sc, M.Sc, Ph.d
                <br />
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">
                  Data Structure
                </span>
                <span className="badge badge-ghost badge-sm">
                  Cyber Security
                </span>
              </td>
              <td>
                <p>Mr. Lorem ipsum dolor sit amet ....</p>
              </td>
              <td>name@mail.com</td>

              <th>
                <button className="btn btn-ghost btn-xs">edit</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">delete</button>
              </th>
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
                    <div className="font-bold">Name</div>
                    <div className="text-sm opacity-50">
                      Assistant Professor
                    </div>
                  </div>
                </div>
              </td>
              <td>
                B.Sc, M.Sc, Ph.d
                <br />
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">
                  Data Structure
                </span>
                <span className="badge badge-ghost badge-sm">
                  Cyber Security
                </span>
              </td>
              <td>
                <p>Mr. Lorem ipsum dolor sit amet ....</p>
              </td>
              <td>name@mail.com</td>

              <th>
                <button className="btn btn-ghost btn-xs">edit</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">delete</button>
              </th>
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
                    <div className="font-bold">Name</div>
                    <div className="text-sm opacity-50">
                      Assistant Professor
                    </div>
                  </div>
                </div>
              </td>
              <td>
                B.Sc, M.Sc, Ph.d
                <br />
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">
                  Data Structure
                </span>
                <span className="badge badge-ghost badge-sm">
                  Cyber Security
                </span>
              </td>
              <td>
                <p>Mr. Lorem ipsum dolor sit amet ....</p>
              </td>
              <td>name@mail.com</td>

              <th>
                <button className="btn btn-ghost btn-xs">edit</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">delete</button>
              </th>
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
                    <div className="font-bold">Name</div>
                    <div className="text-sm opacity-50">
                      Assistant Professor
                    </div>
                  </div>
                </div>
              </td>
              <td>
                B.Sc, M.Sc, Ph.d
                <br />
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">
                  Data Structure
                </span>
                <span className="badge badge-ghost badge-sm">
                  Cyber Security
                </span>
              </td>
              <td>
                <p>Mr. Lorem ipsum dolor sit amet ....</p>
              </td>
              <td>name@mail.com</td>

              <th>
                <button className="btn btn-ghost btn-xs">edit</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">delete</button>
              </th>
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
                    <div className="font-bold">Name</div>
                    <div className="text-sm opacity-50">
                      Assistant Professor
                    </div>
                  </div>
                </div>
              </td>
              <td>
                B.Sc, M.Sc, Ph.d
                <br />
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">
                  Data Structure
                </span>
                <span className="badge badge-ghost badge-sm">
                  Cyber Security
                </span>
              </td>
              <td>
                <p>Mr. Lorem ipsum dolor sit amet ....</p>
              </td>
              <td>name@mail.com</td>

              <th>
                <button className="btn btn-ghost btn-xs">edit</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">delete</button>
              </th>
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
                    <div className="font-bold">Name</div>
                    <div className="text-sm opacity-50">
                      Assistant Professor
                    </div>
                  </div>
                </div>
              </td>
              <td>
                B.Sc, M.Sc, Ph.d
                <br />
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">
                  Data Structure
                </span>
                <span className="badge badge-ghost badge-sm">
                  Cyber Security
                </span>
              </td>
              <td>
                <p>Mr. Lorem ipsum dolor sit amet ....</p>
              </td>
              <td>name@mail.com</td>

              <th>
                <button className="btn btn-ghost btn-xs">edit</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">delete</button>
              </th>
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
