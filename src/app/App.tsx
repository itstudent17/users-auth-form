import React from "react";
import "antd/dist/reset.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, NotFoundPage } from "@/pages";
import "./styles/index.css";

export function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

