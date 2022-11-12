import React from "react";
import Navbar from "../Navbar/Navbar";

export default function UserLayout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
}
