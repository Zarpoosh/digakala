import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <React.StrictMode>

      <Routes>
       <Route path='/' element={<App />} />

      </Routes>
      <App />
    </React.StrictMode>
  </HashRouter>
);
