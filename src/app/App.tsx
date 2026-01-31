import React from "react";
import "antd/dist/reset.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, NotFoundPage, UsersPage } from "@/pages";
import "./styles/index.css";
import { RequireAuth } from "@/features";

export function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<HomePage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

