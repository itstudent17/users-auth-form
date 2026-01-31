import React from "react";
import "antd/dist/reset.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, NotFoundPage, UsersPage } from "@/pages";
import "./styles/index.css";
import { RequireAuth } from "@/features";

export function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="login" element={<LoginPage />} />
        <Route element={<RequireAuth />}>
          <Route path="users" element={<UsersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

