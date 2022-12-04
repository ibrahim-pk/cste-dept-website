import React, { useEffect, useState } from "react";
import InputField from "../Common/InputField";
import toast, { Toaster } from "react-hot-toast";

export default function ViewStudent() {
  const [search, setSearch] = useState("");
  const [allStudent, setAllStudent] = useState([]);
  const [filterStudent, setFilterStudent] = useState([]);
  const [Student14, set14Student] = useState(true);
  const [Student15, set15Student] = useState(false);
  const [Student16, set16Student] = useState(false);

  const deleteStudent = (id) => {
    fetch(`http://localhost:5000/api/student/delete/${id}`, {
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
    fetch("http://localhost:5000/api/student/add")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast(data.error);
          return;
        } else {
          setAllStudent(data);
        }
      });
    // handle14Batch();
  }, [deleteStudent]);

  const handle14Batch = () => {
    set14Student(true);
    set15Student(false);
    set16Student(false);
    setFilterStudent(allStudent.filter((st) => st.batch === "14"));
  };
  const handle15Batch = () => {
    set14Student(false);
    set15Student(true);
    set16Student(false);
    setFilterStudent(allStudent.filter((st) => st.batch === "15"));
  };
  const handle16Batch = () => {
    setFilterStudent(allStudent.filter((st) => st.batch === "16"));
    set14Student(false);
    set15Student(false);
    set16Student(true);
  };
  const allStu = () => {
    setFilterStudent("");
  };
  return (
    <div className="w-full">
      <div className="studentCnt lg:flex md:flex  justify-between">
        <div>
          <h2 className="text-2xl mb-2 border-b pb-2">
            Students({allStudent.length})
          </h2>
        </div>
        <div className="flex my-5">
          <div className="btn14  mx-2">
            <button onClick={allStu} className="btn btn-primary">
              ALL
            </button>
          </div>
          <div className="btn14  mx-2">
            <button
              onClick={handle14Batch}
              className={Student14 ? "btn btn-secondary" : "btn"}
            >
              14
            </button>
          </div>
          <div className="btn14 mx-2">
            <button
              onClick={handle15Batch}
              className={Student15 ? "btn  btn-secondary" : "btn"}
            >
              15
            </button>
          </div>
          <div className="btn14 mx-2">
            <button
              onClick={handle16Batch}
              className={Student16 ? "btn  btn-secondary" : "btn"}
            >
              16
            </button>
          </div>
        </div>
      </div>
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
              <th>Id</th>
              <th>Email</th>
              <th className="w-16">Edit</th>
              <th className="w-16">Delete</th>
            </tr>
          </thead>
          <tbody>
            {filterStudent.length > 0 ? (
              filterStudent.map((item, idx) => (
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
                        <div className="text-sm opacity-50">{item.session}</div>
                      </div>
                    </div>
                  </td>

                  <td>{item.studentId}</td>
                  <td>{item.email}</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Edit</button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteStudent(item._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Delete
                    </button>
                    <Toaster />
                  </td>
                </tr>
              ))
            ) : allStudent.length > 0 ? (
              allStudent.map((item, idx) => (
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
                        <div className="text-sm opacity-50">{item.session}</div>
                      </div>
                    </div>
                  </td>

                  <td>{item.studentId}</td>
                  <td>{item.email}</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Edit</button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteStudent(item._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Delete
                    </button>
                    <Toaster />
                  </td>
                </tr>
              ))
            ) : allStudent.length === 0 && filterStudent.length === 0 ? (
              <h3>No Data</h3>
            ) : (
              <h3>Loading....</h3>
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
