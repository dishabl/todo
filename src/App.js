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
      <BrowserRouter>
        {/* <Router> */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/todo" element={<Log />} />
          <Route path="/frame" element={<Frame />} />
        </Routes>
        {/* </Router> */}
      </BrowserRouter>
    </div>
  );
}
