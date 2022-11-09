import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/"></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registrationform" element={<RegistrationForm />}></Route>
      </Routes>
    </>
  );
}

export default App;
