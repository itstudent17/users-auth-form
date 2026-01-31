import React from "react";
import "antd/dist/reset.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage } from "@/pages";
import "./styles/index.css";

export function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

