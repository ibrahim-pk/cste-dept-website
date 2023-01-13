import React, { useEffect, useState } from "react";
import InputField from "../Common/InputField";
import SubmitBtn from "../Common/SubmitBtn";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function Login() {
  const [studentID, setStudentID] = useState("");
  const [stduentPassword, setStudentPassword] = useState("");
  const [logUser, setLogUser] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleStudnetLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (studentID.trim().length < 10) {
      setError("Student ID invalid.");
      return;
    } else if (stduentPassword.length < 6) {
      setError("Password Should be greater than 6 characters.");
    } else {
      const { data } = await axios.post(
        "https://cste-club-ibrahimecste.vercel.app/api/user/login",
        {
          studentID,
          stduentPassword,
        }
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem("UserDetails", JSON.stringify(data));
        setLogUser(true);
        toast.success(data.msg);
        setStudentID("");
        setStudentPassword("");
        setError("");
        window.location.href = "/";
      }
    }
  };

  useEffect(() => {
    window.document.title = "CSTE||LOGIN";
    if (logUser) {
      navigate(from, { replace: true });
    }
  }, [navigate, from, logUser]);
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
      <div className="max-w-sm mx-auto text-center border py-5 px-5">
        <form onSubmit={handleStudnetLogin}>
          <InputField
            setField={setStudentID}
            fieldValue={studentID}
            label="Student ID"
            type="text"
          />

          <InputField
            setField={setStudentPassword}
            fieldValue={stduentPassword}
            label="Password"
            type="password"
          />
          <SubmitBtn value="Login" />
        </form>
      </div>
      <Toaster />
    </div>
  );
}
