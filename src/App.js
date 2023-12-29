import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Frame from "./Frame";
import Register from "./Register";
import Log from "./Log";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Log />} />
        <Route path="/frame" element={<Frame />} />
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
