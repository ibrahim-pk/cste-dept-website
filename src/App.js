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

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/"></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registrationform" element={<RegistrationForm />}></Route>
        <Route path="/myregistrationform" element={<RegistrationFormView />} />
        <Route
          path="/viewregistrationform/:id"
          element={<ViewRegistrationPage />}
        />
        <Route path="/coverpagegenerator" element={<AssignmentForm />}></Route>
        <Route path="/myprofile" element={<UserProfile />}></Route>
      </Routes>
    </>
  );
}

export default App;
