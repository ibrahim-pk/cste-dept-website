import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";

import AssignmentForm from "./Components/AssignmentCoverPage/AssignmentForm";
import UserProfile from "./Components/UserProfile/UserProfile";
import EditProfile from "./Components/UserProfile/EditProfile";
import CourseMaterials from "./Components/CourseMaterials/CourseMaterials";
import AdminLogin from "./Components/Admin/Login/AdminLogin";
import UserLayout from "./Components/Layout/UserLayout";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import AdminRegistration from "./Components/Admin/Login/AdminRegistration";
import Home from "./Components/Home/Home";
import AllTeachers from "./Components/Teachers/AllTeachers";
import TeacherDetails from "./Components/Teachers/TeacherDetails";
import Students from "./Components/Students/Students";
import Notices from "./Components/Notices/Notices";
import News from "./Components/News/News";
import SingleNews from "./Components/News/SingleNews";
import Researches from "./Components/Researches/Researches";
import SingleResearches from "./Components/Researches/SingleResearches";
import CSTEClub from "./Components/CSTEClub/CSTEClub";
import AllJobPost from "./Components/Home/Job/AllJobPost";
import CurriculumTable from "./Components/Curriculum/CurriculumTable";
import CurriculumDetails from "./Components/Curriculum/CurriculumDetails";
import RegistrationForm from "./Components/UserProfile/RegistrationForm/RegistrationForm";
import RegistrationFormView from "./Components/UserProfile/RegistrationForm/RegistrationFormView";
import ViewRegistrationPage from "./Components/UserProfile/RegistrationForm/ViewRegistrationPage";
import AdmitCardForm from "./Components/UserProfile/AdmitCardForm.js/AdmitCardForm";
import SuccessPayment from "./Components/SuccessPayment/SuccessPayment";
import PrivateRouter from "./Components/Router/PrivateRouter";
import PublicNotice from "./Components/AdminPanel/Notice/PublicNotice";
import StudentNotice from "./Components/AdminPanel/Notice/StudentNotice";
import PersonalNotice from "./Components/UserProfile/PersonalNotice";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <UserLayout>
              <Login></Login>
            </UserLayout>
          }
        ></Route>
        <Route
          path="/registrationform"
          element={
            <UserLayout>
              <PrivateRouter>
                <RegistrationForm />
              </PrivateRouter>
            </UserLayout>
          }
        ></Route>
        <Route
          path="/admitform"
          element={
            <UserLayout>
              <PrivateRouter>
                <AdmitCardForm />
              </PrivateRouter>
            </UserLayout>
          }
        ></Route>
        <Route
          path="/success/:id"
          element={
            <UserLayout>
              <PrivateRouter>
                <SuccessPayment />
              </PrivateRouter>
            </UserLayout>
          }
        ></Route>
        <Route
          path="/notice/public"
          element={
            <UserLayout>
              <PrivateRouter>
                <PublicNotice />
              </PrivateRouter>
            </UserLayout>
          }
        />
        <Route
          path="/notice/student"
          element={
            <UserLayout>
              <PrivateRouter>
                <StudentNotice />
              </PrivateRouter>
            </UserLayout>
          }
        />
        <Route
          path="/notice/student/:id"
          element={
            <UserLayout>
              <PrivateRouter>
                <PersonalNotice />
              </PrivateRouter>
            </UserLayout>
          }
        />
        <Route
          path="/myregistrationform"
          element={
            <UserLayout>
              <PrivateRouter>
                <RegistrationFormView />
              </PrivateRouter>
            </UserLayout>
          }
        />
        <Route
          path="/viewregistrationform/:id"
          element={<ViewRegistrationPage />}
        />
        <Route
          path="/coverpagegenerator"
          element={
            <UserLayout>
              <AssignmentForm />
            </UserLayout>
          }
        ></Route>
        <Route
          path="/myprofile"
          element={
            <UserLayout>
              <UserProfile />
            </UserLayout>
          }
        ></Route>
        <Route
          path="/editprofile"
          element={
            <UserLayout>
              <PrivateRouter>
                <EditProfile />
              </PrivateRouter>
            </UserLayout>
          }
        ></Route>
        <Route
          path="/coursematerials"
          element={
            <UserLayout>
              <PrivateRouter>
                <CourseMaterials />
              </PrivateRouter>
            </UserLayout>
          }
        ></Route>
        <Route
          path="/faculty"
          element={
            <UserLayout>
              <AllTeachers />
            </UserLayout>
          }
        ></Route>
        <Route
          path="/teacher/details/:id"
          element={
            <UserLayout>
              <TeacherDetails />
            </UserLayout>
          }
        ></Route>
        <Route
          path="/students"
          element={
            <UserLayout>
              <Students />
            </UserLayout>
          }
        ></Route>
        <Route
          path="/notices"
          element={
            <UserLayout>
              <Notices />
            </UserLayout>
          }
        ></Route>
        <Route
          path="/news"
          element={
            <UserLayout>
              <News />
            </UserLayout>
          }
        ></Route>
        <Route
          path="/newsview/:id"
          element={
            <UserLayout>
              <SingleNews />
            </UserLayout>
          }
        ></Route>
        <Route
          path="/researches/"
          element={
            <UserLayout>
              <Researches />
            </UserLayout>
          }
        ></Route>
        <Route
          path="/researchview/"
          element={
            <UserLayout>
              <SingleResearches />
            </UserLayout>
          }
        ></Route>
        <Route
          path="/csteclub/"
          element={
            <UserLayout>
              <CSTEClub />
            </UserLayout>
          }
        ></Route>
        <Route
          path="/all/job"
          element={
            <UserLayout>
              <AllJobPost />
            </UserLayout>
          }
        ></Route>
        <Route
          path="/curriculums"
          element={
            <UserLayout>
              <CurriculumTable />
            </UserLayout>
          }
        ></Route>
        <Route
          path="/curriculum/:id"
          element={
            <UserLayout>
              <CurriculumDetails />
            </UserLayout>
          }
        ></Route>
        <Route path="/admin/login" element={<AdminLogin />}></Route>
        <Route path="/admin/dashboard" element={<AdminPanel />}></Route>
        <Route path="/admin/register" element={<AdminRegistration />}></Route>
      </Routes>
    </>
  );
}

export default App;
