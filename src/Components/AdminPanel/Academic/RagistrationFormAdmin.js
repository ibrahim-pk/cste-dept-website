import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import InputField from "../../Common/InputField";
import SubmitBtn from "../../Common/SubmitBtn";
const RagistrationFormAdmin = () => {
  const [startDate, setStartDate] = useState("");
  const [endtDate, setEndDate] = useState("");
  const [yearAndTerm, setYearAndTerm] = useState("");
  const [abashikOnabashik, setAbashikOnabashik] = useState("");
  const [fee, setFee] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/add/curriculum", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate,
        endtDate,
        yearAndTerm,
        fee,
        abashikOnabashik,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.success(data.error);
          return;
        } else {
          toast(data.msg);
          setStartDate("");
          setEndDate("");
          setYearAndTerm("");
          setAbashikOnabashik("");
          setFee("");
        }
      });
  };
  return (
    <div>
      <div className="w-full">
        <h2 className="text-2xl mb-2 border-b pb-2">
          Registration Form circular
        </h2>

        <form action="" onSubmit={handleSubmit}>
          <InputField
            type="date"
            setField={setStartDate}
            fieldValue={startDate}
            requiredField="true"
            label="Start Date"
          ></InputField>
          <InputField
            type="date"
            setField={setEndDate}
            fieldValue={endtDate}
            requiredField="true"
            label="End Date"
          ></InputField>
          <div className="md:flex">
            <div className="my-2 w-full">
              <label for="">Select Year and Term:</label>
              <br />
              <select
                onChange={(e) => setYearAndTerm(e.target.value)}
                className="select 
            select-bordered form-control w-full max-w-xs"
              >
                <option disabled selected>
                  Selecte
                </option>
                <option value="11">Y-1,T-1</option>
                <option value="12">Y-1,T-2</option>
                <option value="21">Y-2,T-1</option>
                <option value="22">Y-2,T-2</option>
                <option value="31">Y-3,T-1</option>
                <option value="32">Y-3,T-2</option>
                <option value="41">Y-4,T-1</option>
                <option value="42">Y-4,T-2</option>
                <option value="51">Y-5,T-1</option>
                <option value="52">Y-5,T-2</option>
              </select>
            </div>
            <div className="my-2 w-full">
              <label for="">Abashik/Onabashik:</label>
              <br />
              <select
                onChange={(e) => setAbashikOnabashik(e.target.value)}
                className="select 
            select-bordered form-control w-full max-w-xs"
              >
                <option disabled selected>
                  Select
                </option>
                <option value="abashik">Abashik</option>
                <option value="onabashik">Onabashik</option>
              </select>
            </div>
          </div>
          <InputField
            type="number"
            setField={setFee}
            fieldValue={fee}
            requiredField="true"
            label="Fee"
          ></InputField>

          <div className="w-full text-right">
            <SubmitBtn value="Add Student"></SubmitBtn>
            <Toaster />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RagistrationFormAdmin;
