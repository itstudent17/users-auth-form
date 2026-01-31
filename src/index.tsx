import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "@/app";
import { QueryProvider } from "@/app/providers";

ReactDOM.render(
  <BrowserRouter>
    <QueryProvider>
      <App />
    </QueryProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

