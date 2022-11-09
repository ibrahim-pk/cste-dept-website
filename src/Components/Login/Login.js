import React, { useState } from "react";

export default function Login() {
  const [studentID, setStudentID] = useState("");
  const [stduentPassword, setStudentPassword] = useState("");
  const [error, setError] = useState("");
  const handleStudnetLogin = (e) => {
    e.preventDefault();
    setError("");
    if (studentID.trim().length < 12) {
      setError("Student ID invalid.");
      return;
    } else if (stduentPassword.length < 6) {
      setError("Password Should be greater than 6 characters.");
    } else {
      //validation successfull
    }
  };

  return (
    <div className="md:mt-28 mt-16 mx-auto text-center">
      <h2 className="text-3xl mb-4">Login</h2>

      {error && (
        <>
          <div className="alert alert-error shadow-lg max-w-sm text-center mx-auto mb-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        </>
      )}
      <div className="max-w-sm mx-auto text-center border mx-auto py-12 px-5">
        <form onSubmit={handleStudnetLogin}>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text">Student ID:</span>
            </label>
            <input
              type="text"
              placeholder="Stduent ID"
              className="input input-bordered w-full max-w-sm"
              name="studentID"
              onChange={(e) => setStudentID(e.target.value)}
              value={studentID}
            />
          </div>
          <div className="form-control w-full max-w-sm mt-4">
            <label className="label">
              <span className="label-text">Password:</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-sm"
              name="studentPassword"
              onChange={(e) => setStudentPassword(e.target.value)}
              value={stduentPassword}
            />
          </div>
          <button
            className="btn w-full mt-4 bg-blue-900 hover:bg-blue-800 max-w-xs"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
