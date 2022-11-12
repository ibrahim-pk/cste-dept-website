import React, { useState } from "react";
import InputField from "../Common/InputField";
import SubmitBtn from "../Common/SubmitBtn";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roll, setRoll] = useState("");
  const [session, setSession] = useState("");
  const [contactNo, setContactNo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-2 border-b pb-2">Add Student</h2>
      <form action="" onSubmit={handleSubmit}>
        <InputField
          type="text"
          setField={setName}
          fieldValue={name}
          requiredField="true"
          label="Name"
        ></InputField>
        <InputField
          type="email"
          setField={setEmail}
          fieldValue={email}
          label="Email"
        ></InputField>
        <InputField
          type="text"
          setField={setPassword}
          fieldValue={password}
          label="Password"
          requiredField="true"
        ></InputField>
        <div className="flex gap-4">
          <InputField
            type="text"
            setField={setRoll}
            fieldValue={roll}
            label="Student Roll"
            requiredField="true"
          ></InputField>
          <InputField
            type="text"
            setField={setSession}
            fieldValue={session}
            label="Session"
          ></InputField>
        </div>
        <InputField
          type="text"
          setField={setContactNo}
          fieldValue={contactNo}
          label="Contact No"
        ></InputField>
        <div className="w-full text-right">
          <SubmitBtn value="Add Student"></SubmitBtn>
        </div>
      </form>
    </div>
  );
}
