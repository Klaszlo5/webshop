import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.css"; // Import the styles
import App from "./App";

// Render the React app into the root div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
