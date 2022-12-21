import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const rol = JSON.parse(localStorage.getItem("UserDetails"));

  let location = useLocation();
  if (!rol?.student) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRouter;
