import React, { useState } from "react";
import InputField from "../../Common/InputField";
import SubmitBtn from "../../Common/SubmitBtn";

export default function AddAndViewChairmanMSG() {
  const [name, setName] = useState("Dr. Ashadun Nobi");
  const [details, setDetails] = useState("lorem ipsum ...");
  const [role, setRole] = useState("Chairman & Professor");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-2 border-b pb-2">Chairman Message</h2>
      <form action="" onSubmit={handleSubmit}>
        <InputField
          type="text"
          setField={setName}
          fieldValue={name}
          requiredField="true"
          label="Name"
        ></InputField>
        <InputField
          type="text"
          setField={setRole}
          fieldValue={role}
          label="Tags"
        ></InputField>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Message"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </div>

        <div className="my-2">
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <div className="w-full text-right">
          <SubmitBtn value="Add Message"></SubmitBtn>
        </div>
      </form>
    </div>
  );
}
