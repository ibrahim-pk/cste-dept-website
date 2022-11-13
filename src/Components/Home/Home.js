import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <ul>
        <li>
          <Link to="/admin/login">Admin Login</Link>
        </li>

        <li>
          <Link to="/admin/register">Admin Register</Link>
        </li>
        <li>
          <Link to="/admin/dashboard">Admin Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}
