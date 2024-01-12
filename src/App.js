import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Frame from "./Frame";
import Register from "./Register";
import Log from "./Log";

export default function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Routes>
        <Route path="/todo" element={<Register />} />
        <Route path="/todo/login" element={<Log />} />
        <Route path="/todo/frame" element={<Frame />} />
      </Routes>
      {/* </Router> */}
    </div>
  );
}
