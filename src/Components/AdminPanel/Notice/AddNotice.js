import React, { useState } from "react";
import InputField from "../../Common/InputField";
import SubmitBtn from "../../Common/SubmitBtn";

export default function AddNotice() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-2 border-b pb-2">Add Notice</h2>
      <form action="" onSubmit={handleSubmit}>
        <InputField
          type="text"
          setField={setTitle}
          fieldValue={title}
          requiredField="true"
          label="Title"
        ></InputField>
        <InputField
          type="text"
          setField={setLink}
          fieldValue={link}
          label="PDF Link"
        ></InputField>
        <InputField
          type="text"
          setField={setTags}
          fieldValue={tags}
          label="Tags"
        ></InputField>
        <div className="w-full text-right">
          <SubmitBtn value="Add Notice"></SubmitBtn>
        </div>
      </form>
    </div>
  );
}
