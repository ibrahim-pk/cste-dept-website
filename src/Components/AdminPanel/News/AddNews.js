import React, { useState } from "react";
import InputField from "../../Common/InputField";
import SubmitBtn from "../../Common/SubmitBtn";

export default function AddNews() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [tags, setTags] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-2 border-b pb-2">Add News</h2>
      <form action="" onSubmit={handleSubmit}>
        <InputField
          type="text"
          setField={setTitle}
          fieldValue={title}
          requiredField="true"
          label="Title"
        ></InputField>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your bio</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="About"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </div>

        <InputField
          type="text"
          setField={setTags}
          fieldValue={tags}
          label="Tags"
        ></InputField>
        <div className="my-2">
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <div className="w-full text-right">
          <SubmitBtn value="Add Notice"></SubmitBtn>
        </div>
      </form>
    </div>
  );
}
