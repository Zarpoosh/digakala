import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

console.log(import.meta.env.VITE_APP_BASE_URL);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={import.meta.env.VITE_APP_BASE_URL}>
    <React.StrictMode>
      <Routes>
       <Route path='/' element={<App />} />
      </Routes>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
