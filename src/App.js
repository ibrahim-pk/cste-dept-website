import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import RegistrationFormView from "./Components/RegistrationForm/RegistrationFormView";
import ViewRegistrationPage from "./Components/RegistrationForm/ViewRegistrationPage";
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
import MessageFromChairmanDetails from "./Components/Home/MessageFromChairman/MeessagrFromChairmanDetails";

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
              <RegistrationForm />
            </UserLayout>
          }
        ></Route>
        <Route
          path="/myregistrationform"
          element={
            <UserLayout>
              <RegistrationFormView />
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
              <EditProfile />
            </UserLayout>
          }
        ></Route>
        <Route
          path="/coursematerials"
          element={
            <UserLayout>
              <CourseMaterials />
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
          path="/facultydetails/:name"
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
          path="/newsview/"
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
          path="/chairmanmessage"
          element={
            <UserLayout>
              <MessageFromChairmanDetails />
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
