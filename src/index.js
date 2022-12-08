import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";import { AuthContextProvider } from "./Components/context/AuthContext";
import App from "./App";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
);
