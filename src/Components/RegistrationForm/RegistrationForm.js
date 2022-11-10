import React, { useEffect, useState } from "react";
import InputField from "../Common/InputField";
import SubmitBtn from "../Common/SubmitBtn";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [department, setDepartment] = useState("");
  const [hall, setHall] = useState("");
  const [session, setSession] = useState("");
  const [institute, setInsititue] = useState("");
  const [year, setYear] = useState("");
  const [term, setTerm] = useState("");

  //courses

  const [course1Title, setCourse1Title] = useState("");
  const [course1Code, setCourse1Code] = useState("");
  const [course1Credits, setCourse1Credits] = useState("");

  const [course2Title, setCourse2Title] = useState("");
  const [course2Code, setCourse2Code] = useState("");
  const [course2Credits, setCourse2Credits] = useState("");

  const [course3Title, setCourse3Title] = useState("");
  const [course3Code, setCourse3Code] = useState("");
  const [course3Credits, setCourse3Credits] = useState("");

  const [course5Title, setCourse5Title] = useState("");
  const [course5Code, setCourse5Code] = useState("");
  const [course5Credits, setCourse5Credits] = useState("");

  const [course4Title, setCourse4Title] = useState("");
  const [course4Code, setCourse4Code] = useState("");
  const [course4Credits, setCourse4Credits] = useState("");

  const [course6Title, setCourse6Title] = useState("");
  const [course6Code, setCourse6Code] = useState("");
  const [course6Credits, setCourse6Credits] = useState("");

  const [course7Title, setCourse7Title] = useState("");
  const [course7Code, setCourse7Code] = useState("");
  const [course7Credits, setCourse7Credits] = useState("");

  const [course8Title, setCourse8Title] = useState("");
  const [course8Code, setCourse8Code] = useState("");
  const [course8Credits, setCourse8Credits] = useState("");

  const [course9Title, setCourse9Title] = useState("");
  const [course9Code, setCourse9Code] = useState("");
  const [course9Credits, setCourse9Credits] = useState("");

  const [course10Title, setCourse10Title] = useState("");
  const [course10Code, setCourse10Code] = useState("");
  const [course10Credits, setCourse10Credits] = useState("");

  const [course11Title, setCourse11Title] = useState("");
  const [course11Code, setCourse11Code] = useState("");
  const [course11Credits, setCourse11Credits] = useState("");

  const [course12Title, setCourse12Title] = useState("");
  const [course12Code, setCourse12Code] = useState("");
  const [course12Credits, setCourse12Credits] = useState("");

  useEffect(() => {
    console.log(name, studentID, course1Code);
  });
  return (
    <div className="mx-auto max-w-screen-xl	 w-full px-4 mt-16 mb-4">
      <h2 className="text-3xl mb-4 text-center">Registration Form</h2>
      <form action="" className="w-full">
        <div className="md:flex md:gap-2">
          <InputField
            type="text"
            fieldValue={name}
            label="Name"
            setField={setName}
          />
          <InputField
            type="text"
            fieldValue={studentID}
            label="ID"
            setField={setStudentID}
          />

          <InputField
            type="text"
            fieldValue={department}
            label="Department"
            setField={setDepartment}
          />
        </div>
        <div className="md:flex md:gap-2">
          <InputField
            type="text"
            fieldValue={hall}
            label="Hall"
            setField={setHall}
          />
          <InputField
            type="text"
            fieldValue={institute}
            label="Institute/Faculty"
            setField={setInsititue}
          />
        </div>
        <div className="md:flex md:gap-2">
          <InputField
            type="text"
            fieldValue={year}
            label="Year"
            setField={setYear}
          />

          <InputField
            type="text"
            fieldValue={term}
            label="Term"
            setField={setTerm}
          />
          <InputField
            type="text"
            fieldValue={session}
            label="Session"
            setField={setSession}
          />
        </div>
        <h4 className="font-bold my-4">Courses</h4>
        <ol className="list-decimal">
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course1Title}
                label="Course Title"
                setField={setCourse1Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course1Code}
                  label="Course Code"
                  setField={setCourse1Code}
                />
                <InputField
                  type="text"
                  fieldValue={course1Credits}
                  label="Credits"
                  setField={setCourse1Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course2Title}
                label="Course Title"
                setField={setCourse2Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course2Code}
                  label="Course Code"
                  setField={setCourse2Code}
                />
                <InputField
                  type="text"
                  fieldValue={course2Credits}
                  label="Credits"
                  setField={setCourse2Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course3Title}
                label="Course Title"
                setField={setCourse3Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course3Code}
                  label="Course Code"
                  setField={setCourse3Code}
                />
                <InputField
                  type="text"
                  fieldValue={course3Credits}
                  label="Credits"
                  setField={setCourse3Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course4Title}
                label="Course Title"
                setField={setCourse4Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course4Code}
                  label="Course Code"
                  setField={setCourse4Code}
                />
                <InputField
                  type="text"
                  fieldValue={course4Credits}
                  label="Credits"
                  setField={setCourse4Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course5Title}
                label="Course Title"
                setField={setCourse5Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course5Code}
                  label="Course Code"
                  setField={setCourse5Code}
                />
                <InputField
                  type="text"
                  fieldValue={course5Credits}
                  label="Credits"
                  setField={setCourse5Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course6Title}
                label="Course Title"
                setField={setCourse6Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course6Code}
                  label="Course Code"
                  setField={setCourse6Code}
                />
                <InputField
                  type="text"
                  fieldValue={course6Credits}
                  label="Credits"
                  setField={setCourse6Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course7Title}
                label="Course Title"
                setField={setCourse7Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course7Code}
                  label="Course Code"
                  setField={setCourse7Code}
                />
                <InputField
                  type="text"
                  fieldValue={course7Credits}
                  label="Credits"
                  setField={setCourse7Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course8Title}
                label="Course Title"
                setField={setCourse8Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course8Code}
                  label="Course Code"
                  setField={setCourse8Code}
                />
                <InputField
                  type="text"
                  fieldValue={course8Credits}
                  label="Credits"
                  setField={setCourse8Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course9Title}
                label="Course Title"
                setField={setCourse9Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course9Code}
                  label="Course Code"
                  setField={setCourse9Code}
                />
                <InputField
                  type="text"
                  fieldValue={course9Credits}
                  label="Credits"
                  setField={setCourse9Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course10Title}
                label="Course Title"
                setField={setCourse10Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course10Code}
                  label="Course Code"
                  setField={setCourse10Code}
                />
                <InputField
                  type="text"
                  fieldValue={course10Credits}
                  label="Credits"
                  setField={setCourse10Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course11Title}
                label="Course Title"
                setField={setCourse11Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course11Code}
                  label="Course Code"
                  setField={setCourse11Code}
                />
                <InputField
                  type="text"
                  fieldValue={course11Credits}
                  label="Credits"
                  setField={setCourse11Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course12Title}
                label="Course Title"
                setField={setCourse12Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course12Code}
                  label="Course Code"
                  setField={setCourse12Code}
                />
                <InputField
                  type="text"
                  fieldValue={course12Credits}
                  label="Credits"
                  setField={setCourse12Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
        </ol>

        <div className="mx-auto w-full text-center my-2">
          <SubmitBtn value="Submit"></SubmitBtn>
        </div>
      </form>
    </div>
  );
}
