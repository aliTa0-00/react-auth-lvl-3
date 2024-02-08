/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { User } from "../Context/UserContext";
import { Outlet, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const user = useContext(User);
  const location = useLocation()

  return (
      user.auth.userDetalis ? <Outlet /> : <Navigate state={{from: location}} replace to="/Login" />
  );
};

export default ProtectedRoutes;
