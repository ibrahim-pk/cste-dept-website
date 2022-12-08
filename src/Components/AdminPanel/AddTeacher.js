import React, { useState } from "react";
import InputField from "../Common/InputField";
import SubmitBtn from "../Common/SubmitBtn";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function AddTeacher() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [join, setJoin] = useState("");
  const [imgUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleImageUpload = async (e) => {
    setLoading(true);
    const imageFile = e.target.files[0];
    const data = new FormData();
    data.append("file", imageFile);
    //your folder name
    data.append("upload_preset", "WinnerImg");
    data.append("cloud_name", "ditdynru4");

    try {
      const result = await axios.post(
        //aykhne [Your Cloudinary Cloud Name] baki link thik thak thakbe
        "https://api.cloudinary.com/v1_1/ditdynru4/image/upload",
        data
      );
      // console.log(result?.data?.url);
      setImageUrl(result?.data?.url);
      setLoading(false);
    } catch (error) {
      setError(error.massage);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/teacher/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
        position,
        about,
        join,
        imgUrl,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast(data.error);
          return;
        } else {
          toast(data.msg);
          setName("");
          setEmail("");
          setMobile("");
          setPosition("");
          setJoin("");
          setAbout("");
        }
      });
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
          type="number"
          setField={setMobile}
          fieldValue={mobile}
          label="Mobile"
        ></InputField>
        <InputField
          type="email"
          setField={setEmail}
          fieldValue={email}
          label="Email"
        ></InputField>

        <div className="flex gap-4">
          <InputField
            type="text"
            setField={setPosition}
            fieldValue={position}
            label="Position"
          ></InputField>
          <InputField
            type="text"
            setField={setJoin}
            fieldValue={join}
            label="Join Date"
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
            onChange={handleImageUpload}
            className="file-input file-input-bordered w-full max-w-xs"
          />
          <div>
            {loading && (
              <h1 className="text-xl font-bold text-sky-700">Uploading....</h1>
            )}
          </div>
        </div>
        <div className="w-full my-2 text-right">
          <SubmitBtn value="Add Teacher"></SubmitBtn>
          <Toaster />
        </div>
      </form>
    </div>
  );
}
