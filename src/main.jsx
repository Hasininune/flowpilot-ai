import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { WorkflowProvider } from "./context/WorkflowContext";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <AuthProvider>
    <WorkflowProvider>
      <BrowserRouter>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <App />
      </BrowserRouter>
    </WorkflowProvider>
  </AuthProvider>
</React.StrictMode>
);