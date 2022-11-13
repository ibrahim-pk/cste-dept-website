import React, { useState } from "react";
import InputField from "../Common/InputField";
import SubmitBtn from "../Common/SubmitBtn";

export default function AddTeacher() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [study, setStudy] = useState("");
  const [about, setAbout] = useState("");
  const [researchInterest, setResearchInterest] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-2 border-b pb-2">Add Teacher</h2>
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
        ></InputField>
        <div className="flex gap-4">
          <InputField
            type="text"
            setField={setStudy}
            fieldValue={study}
            label="Study"
          ></InputField>
          <InputField
            type="text"
            setField={setResearchInterest}
            fieldValue={researchInterest}
            label="Research Interest"
          ></InputField>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your bio</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="About"
            onChange={(e) => setAbout(e.target.value)}
            value={about}
          ></textarea>
        </div>
        <div className="my-2">
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <div className="w-full text-right">
          <SubmitBtn value="Add Teacher"></SubmitBtn>
        </div>
      </form>
    </div>
  );
}
