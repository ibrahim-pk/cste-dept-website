import React, { useState } from "react";
import InputField from "../Common/InputField";
import SubmitBtn from "../Common/SubmitBtn";

export default function EditProfile() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [session, setSession] = useState("");
  const [term, setTerm] = useState("");
  const [year, setYear] = useState("");
  const [department, setDepartment] = useState("");
  const [contactNo, setContactNo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="pt-2 px-5  max-w-screen-xl	mx-auto w-full  mb-4">
      <h2 className="text-2xl">Edit Profile</h2>
      <form action="" onSubmit={handleSubmit}>
        <InputField
          type="text"
          setField={setName}
          fieldValue={name}
          label="Name"
          requiredField="true"
        ></InputField>
        <InputField
          type="text"
          setField={setFatherName}
          fieldValue={fatherName}
          label="Father's Name"
          requiredField="true"
        ></InputField>
        <InputField
          type="text"
          setField={setMotherName}
          fieldValue={motherName}
          label="Mothers's Name"
          requiredField="true"
        ></InputField>
        <InputField
          type="text"
          setField={setDepartment}
          fieldValue={department}
          label="Department"
          requiredField="true"
        ></InputField>
        <InputField
          type="text"
          setField={setSession}
          fieldValue={session}
          label="Session"
          requiredField="true"
        ></InputField>
        <div className="block md:flex md:gap-4">
          <InputField
            type="text"
            setField={setRoll}
            fieldValue={roll}
            label="Roll"
            requiredField="true"
          ></InputField>
          <InputField
            type="text"
            setField={setYear}
            fieldValue={year}
            label="Year"
            requiredField="true"
          ></InputField>
          <InputField
            type="text"
            setField={setTerm}
            fieldValue={term}
            label="Term"
            requiredField="true"
          ></InputField>
        </div>
        <InputField
          type="text"
          setField={setContactNo}
          fieldValue={contactNo}
          label="Contact No"
          requiredField="true"
        ></InputField>
        <p className="mt-2 text-sm">Upload Photo:</p>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs mt-2"
        />

        <div className="w-full text-center mx-auto">
          <SubmitBtn value="Edit"></SubmitBtn>
        </div>
      </form>
    </div>
  );
}
