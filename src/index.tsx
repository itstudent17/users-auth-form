import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "@/app";
import { ErrorBoundary, QueryProvider } from "@/app/providers";

ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <QueryProvider>
        <App />
      </QueryProvider>
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById("root")
);

