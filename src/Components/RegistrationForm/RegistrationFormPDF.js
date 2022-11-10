import React from "react";
import logo from "../../img/logo.png";
import "./Registration.css";
export default function RegistrationFormPDF({ studentDetails }) {
  return (
    <div id="divToPrint" className="pb-20">
      <div className="flex justify-center gap-10 border-b pb-4">
        <div>
          <img src={logo} alt="NSTU" className="w-14" />
        </div>
        <div className="text-center">
          <h4 className="text-3xl font-semibold">
            Noakhali Science & Technology University
          </h4>
          <p>Noakhali-3814, Bangladesh</p>
          <h3 className="text-2xl ">Course Registration Form</h3>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <div className="flex gap-2">
          <div className="flex w-2/3 gap-2 items-end">
            <p className="font-semibold">Name of Student</p>
            <div className="flex-1 border-b text-xl pb-3 text-xl  pb-3">
              {studentDetails?.name}
            </div>
          </div>
          <div className="flex flex-1 items-end gap-2">
            <p className="font-semibold">Roll</p>
            <div className="flex-1 border-b text-xl pb-3 text-xl pb-3">
              {studentDetails?.studentID}
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-end gap-2">
          <div className="flex w-2/3 gap-2 items-end">
            <p className="font-semibold">Department</p>
            <div className="flex-1 border-b text-xl pb-3">
              {studentDetails?.department}
            </div>
          </div>
          <div className="flex flex-1 gap-2 items-end">
            <p className="font-semibold">Institute/Faculty</p>
            <div className="flex-1 border-b text-xl pb-3">
              {studentDetails?.institute}
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-end gap-2">
          <div className="flex flex-1 items-end gap-2">
            <p className="font-semibold">Year</p>
            <div className="flex-1 border-b text-xl pb-3">
              {studentDetails?.year}
            </div>
          </div>
          <div className="flex flex-1 gap-2 items-end">
            <p className="font-semibold">Term</p>
            <div className="flex-1 border-b text-xl pb-3">
              {studentDetails?.term}
            </div>
          </div>
          <div className="flex w-1/2 items-end gap-2">
            <p className="font-semibold">Session</p>
            <div className="flex-1 border-b text-xl pb-3">
              {studentDetails?.session}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <table className=" w-full border border-slate-300 table-auto">
          <thead>
            <tr>
              <th className="border border-slate-300">Course Code</th>
              <th className="border border-slate-300 w-2/3">Course Title</th>
              <th className="border border-slate-300">Credits</th>
              <th className="border border-slate-300">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300">
                {studentDetails?.course1Code}&nbsp;
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course1Title}
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course1Credits}
              </td>
              <td className="border border-slate-300"></td>
            </tr>

            <tr>
              <td className="border border-slate-300">
                {studentDetails?.course2Code}&nbsp;
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course2Title}
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course2Credits}
              </td>
              <td className="border border-slate-300"></td>
            </tr>

            <tr>
              <td className="border border-slate-300">
                {studentDetails?.course3Code}&nbsp;
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course3Title}
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course3Credits}
              </td>
              <td className="border border-slate-300"></td>
            </tr>

            <tr>
              <td className="border border-slate-300">
                {studentDetails?.course4Code}&nbsp;
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course4Title}
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course4Credits}
              </td>
              <td className="border border-slate-300"></td>
            </tr>

            <tr>
              <td className="border border-slate-300">
                {studentDetails?.course5Code}&nbsp;
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course5Title}
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course5Credits}
              </td>
              <td className="border border-slate-300"></td>
            </tr>

            <tr>
              <td className="border border-slate-300">
                {studentDetails?.course6Code}&nbsp;
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course6Title}
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course6Credits}
              </td>
              <td className="border border-slate-300"></td>
            </tr>

            <tr>
              <td className="border border-slate-300">
                {studentDetails?.course7Code}&nbsp;
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course7Title}
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course7Credits}
              </td>
              <td className="border border-slate-300"></td>
            </tr>
            <tr>
              <td className="border border-slate-300">
                {studentDetails?.course8Code}&nbsp;
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course8Title}
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course8Credits}
              </td>
              <td className="border border-slate-300"></td>
            </tr>

            <tr>
              <td className="border border-slate-300">
                {studentDetails?.course9Code}&nbsp;
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course9Title}
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course9Credits}
              </td>
              <td className="border border-slate-300"></td>
            </tr>

            <tr>
              <td className="border border-slate-300">
                {studentDetails?.course10Code}&nbsp;
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course10Title}
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course10Credits}
              </td>
              <td className="border border-slate-300"></td>
            </tr>
            <tr>
              <td className="border border-slate-300">
                {studentDetails?.course11Code}&nbsp;
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course11Title}
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course11Credits}
              </td>
              <td className="border border-slate-300"></td>
            </tr>
            <tr>
              <td className="border border-slate-300">
                {studentDetails?.course12Code}&nbsp;
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course12Title}
              </td>
              <td className="border border-slate-300">
                {studentDetails?.course12Credits}
              </td>
              <td className="border border-slate-300"></td>
            </tr>
          </tbody>
        </table>
        <div className="flex w-full items-center gap-4 my-6">
          <div className="font-semibold">
            Credit Completed <br />
            CGPA
          </div>
          <div className="flex flex-1 flex-col">
            <div className="text-center mb-2">Year-1</div>
            <div className="flex gap-2">
              <div className="flex-1 text-center">
                <p className="mb-2">Term-1</p>
                <div className="w-full border h-8 border-b-0"></div>
                <div className="w-full border  h-8"></div>
              </div>
              <div className="flex-1 text-center">
                <p className="mb-2">Term-2</p>
                <div className="w-full border h-8 border-b-0"></div>
                <div className="w-full border  h-8"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="text-center  mb-2">Year-2</div>
            <div className="flex gap-2">
              <div className="flex-1 text-center">
                <p className="mb-2">Term-3</p>
                <div className="w-full border h-8 border-b-0"></div>
                <div className="w-full border  h-8"></div>
              </div>
              <div className="flex-1 text-center">
                <p className="mb-2">Term-4</p>
                <div className="w-full border h-8 border-b-0"></div>
                <div className="w-full border  h-8"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="text-center  mb-2">Year-3</div>
            <div className="flex gap-2">
              <div className="flex-1 text-center">
                <p className="mb-2">Term-5</p>
                <div className="w-full border h-8 border-b-0"></div>
                <div className="w-full border  h-8"></div>
              </div>
              <div className="flex-1 text-center">
                <p className="mb-2">Term-6</p>
                <div className="w-full border h-8 border-b-0"></div>
                <div className="w-full border  h-8"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="text-center  mb-2">Year-4</div>
            <div className="flex flex-1 gap-2">
              <div className="flex-1 text-center">
                <p className="mb-2">Term-7</p>
                <div className="w-full border h-8 border-b-0"></div>
                <div className="w-full border  h-8"></div>
              </div>
              <div className="flex-1 text-center">
                <p className="mb-2">Term-8</p>
                <div className="w-full border h-8 border-b-0"></div>
                <div className="w-full border  h-8"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-4 border-b-2 items-center my-4 pb-8">
          <h4 className="text-2xl mr-8">Credits Taken in current term</h4>
          <div className="border w-64 h-12"></div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="w-full flex flex-col gap-2 mt-4">
            <div className="flex gap-2">
              <div className="flex w-2/3 gap-2 pb-2">
                <p className="font-semibold">Student</p>
                <div className="flex-1 mt-2 border-b"></div>
              </div>
              <div className="flex flex-1    gap-2">
                <p className="font-semibold">Date</p>
                <div className="flex-1 border-b text-xl pb-3"></div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="flex w-2/3 gap-2 pb-2">
                <p className="font-semibold">Course Co-ordinator</p>
                <div className="flex-1  border-b"></div>
              </div>
              <div className="flex flex-1 gap-2  flex-end">
                <p className="font-semibold">Date</p>
                <div className="flex-1 border-b text-xl pb-3"></div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="flex flex-1 gap-2 flex-end">
                <p className="font-semibold">Hall</p>
                <div className="flex-1 pb-2 border-b"></div>
              </div>
              <div className="flex w-1/2 gap-2 items-end  flex-end">
                <p className="font-semibold">Provost</p>
                <div className="flex-1  border-b"></div>
              </div>
              <div className="flex flex-1  pb-2 gap-2  flex-end">
                <p className="font-semibold">Date</p>
                <div className="flex-1 border-b text-xl pb-3"></div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="flex w-2/3 gap-2 items-end pb-2">
                <p className="font-semibold">Chairman</p>
                <div className="flex-1 border-b text-xl pb-3"></div>
              </div>
              <div className="flex flex-1  pb-2  gap-2">
                <p className="font-semibold">Date</p>
                <div className="flex-1 border-b text-xl pb-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
