import React, { useState } from "react";
import RegistrationFormPDF from "./RegistrationFormPDF";

export default function ViewRegistrationPage() {
  const [studentDetails, setStudentDetails] = useState({});
  useState(() => {
    setStudentDetails({
      name: "Borhan",
      studentID: "ASH2101008M",
      department: "CSTE",
      hall: "ASH",
      session: "2020-21",
      institute: "Eng.",
      year: "01",
      term: "01",
      course1Code: "CSTE1101",
      course1Title: "Computer Fundamentals",
      course1Credits: "4.00",
      course2Code: "CSTE1101",
      course2Title: "Computer Fundamentals",
      course2Credits: "4.00",

      course3Code: "CSTE1101",
      course3Title:
        "Computer Fundamentals Computer Fundamentals Computer FundamentalsComputer Fundamentals Computer Fundamentals Computer Fundamentals",
      course3Credits: "4.00",
    });
  });
  return (
    <div className="max-w-screen-lg w-full mx-auto mt-16">
      <RegistrationFormPDF
        studentDetails={studentDetails}
      ></RegistrationFormPDF>
    </div>
  );
}
