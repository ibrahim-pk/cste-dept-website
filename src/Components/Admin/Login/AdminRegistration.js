import React, { useState } from "react";
import InputField from "../../Common/InputField";
import logo from "../../../img/logo.png";
import SubmitBtn from "../../Common/SubmitBtn";
import { Link } from "react-router-dom";
export default function AdminRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center ">
      <form
        action=""
        className="max-w-sm w-full border py-5 px-5 mx-auto flex justify-center flex-col"
      >
        <img src={logo} alt="NSTU LOGO" className="w-20 mx-auto text-center" />
        <h2 className="text-xl text-center font-semibold py-2 text-blue-800">
          Computer Science & Telecommunication Engineering
        </h2>
        <h4 className="text-center text-xl py-2">Registration</h4>
        <InputField
          type="text"
          setField={setName}
          fieldValue={name}
          label="Name"
          requiredField="true"
        ></InputField>
        <InputField
          type="email"
          setField={setEmail}
          fieldValue={email}
          requiredField="true"
          label="Email"
        ></InputField>
        <InputField
          type="password"
          setField={setPassword}
          fieldValue={password}
          requiredField="true"
          label="Pssword"
        ></InputField>
        <div className="mx-auto w-full text-center">
          <SubmitBtn value="Login"></SubmitBtn>
        </div>
        <Link to="/admin/login" className="text-center my-3">
          Login
        </Link>
      </form>
    </div>
  );
}
