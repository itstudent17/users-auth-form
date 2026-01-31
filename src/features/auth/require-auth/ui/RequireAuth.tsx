import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isAuthorized } from "../model/isAuthorized";

export function RequireAuth() {
  const location = useLocation();

  if (!isAuthorized()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}

