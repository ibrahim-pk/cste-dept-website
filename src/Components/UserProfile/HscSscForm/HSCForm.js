import React, { useState } from "react";
import InputField from "../../Common/InputField";
import SubmitBtn from "../../Common/SubmitBtn";

export default function HSCForm() {
  const [board, setBoard] = useState("");
  const [roll, setRoll] = useState("");
  const [regNo, setRegNo] = useState("");
  const [setGPA, gpa] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="pt-2 px-5  max-w-screen-xl	mx-auto w-full  mb-4">
      <h2 className="text-2xl">HSC Details</h2>
      <form action="" onSubmit={handleSubmit}>
        <InputField
          type="text"
          setField={setBoard}
          fieldValue={board}
          label="Board"
          requiredField="true"
        ></InputField>
        <InputField
          type="text"
          setField={setRegNo}
          fieldValue={regNo}
          label="Registration No"
          requiredField="true"
        ></InputField>
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
          setField={setGPA}
          fieldValue={gpa}
          label="GPA"
          requiredField="true"
        ></InputField>
        <div className="w-full text-center mx-auto">
          <SubmitBtn value="Edit"></SubmitBtn>
        </div>
      </form>
    </div>
  );
}
