import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Frame from "./Frame";
import Register from "./Register";
import Log from "./Log";

export default function App() {
  return (
    <div className="App">
      {/* basename={process.env.PUBLIC_URL} */}
      {/* basename={window.location.pathname || ""} */}
      <BrowserRouter>
        {/* <Router> */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/todo" element={<Log />} />
          <Route path="/frame" element={<Frame />} />
        </Routes>
        {/* </Router> */}
      </BrowserRouter>
      {/* <footer
        style={{
          opacity: "0.5",
          fontSize: "0.85em",
          color: "black",
          marginTop: "60px",
        }}
      >
        Create app 2024
      </footer> */}
    </div>
  );
}
