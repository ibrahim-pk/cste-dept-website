import React, { useEffect, useState } from "react";
import InputField from "../Common/InputField";
import toast, { Toaster } from "react-hot-toast";

export default function ViewTeacher() {
  const [search, setSearch] = useState("");
  const [allTeacher, setAllTeacher] = useState("");
  const deleteTeacher = (id) => {
    fetch(`http://localhost:5000/api/teacher/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast(data.error);
          return;
        } else {
          toast(data.msg);
        }
      });
  };
  useEffect(() => {
    fetch("http://localhost:5000/api/teacher/add")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast(data.error);
          return;
        } else {
          setAllTeacher(data);
        }
      });
    // handle14Batch();
  }, [deleteTeacher]);
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
              <th>Email</th>
              <th>Mobile</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allTeacher.length === 0 ? (
              <h3>No Data</h3>
            ) : allTeacher.length > 0 ? (
              allTeacher.map((item, idx) => (
                <tr key={idx}>
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
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">
                          {item.position}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.mobile}</td>
                  <td>{item.email}</td>

                  <th>
                    <button className="btn btn-ghost btn-xs">edit</button>
                  </th>
                  <th>
                    <button
                      onClick={() => deleteTeacher(item._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      delete
                    </button>
                    <Toaster />
                  </th>
                </tr>
              ))
            ) : (
              <h3>Loading.....</h3>
            )}
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
