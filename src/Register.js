import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./App.css";

export default function Register() {
  const [gender, setGender] = useState("male");

  const handleMaleClick = () => {
    setGender("male");
  };

  const handleFemaleClick = () => {
    setGender("female");
  };

  return (
    <div>
      <div className="reg">
        <div
          className="regItem"
          style={{
            display: "flex",
          }}
        >
          <p className="regName" style={{ alignItems: "center" }}>
            username
          </p>
          <input
            type="text"
            className="registerInput"
            style={{ border: "1px solid #96f" }}
            placeholder="Dino_saur_cream"
          ></input>
        </div>
        <div
          className="regItem"
          style={{
            display: "flex",
          }}
        >
          <p className="regName">email</p>
          <input
            type="text"
            className="registerInput"
            style={{ border: "1px solid #96f" }}
            placeholder="Dino_saur_cream@gmail.com"
          ></input>
        </div>
        <div
          className="regItem"
          style={{
            display: "flex",
            //  justifyContent: "space-between"
          }}
        >
          <p className="regName">password</p>
          <input
            type="text"
            className="registerInput"
            style={{ border: "1px solid #96f" }}
            placeholder="secret_info123"
          ></input>
        </div>
        <div
          className="regItem"
          style={{
            display: "flex",
            // justifyContent: "space-between",
            borderColor: "#96f",
          }}
        >
          <p className="regName">gender</p>
          <div className="toggle-container">
            <div
              className={`toggle-option ${gender === "male" ? "selected" : ""}`}
              onClick={handleMaleClick}
            >
              Male
            </div>
            <div
              className={`toggle-option ${
                gender === "female" ? "selected" : ""
              }`}
              onClick={handleFemaleClick}
            >
              Female
            </div>
          </div>
        </div>
        <div
          className="regItem"
          style={{
            display: "flex",
            // justifyContent: "space-between"
          }}
        >
          <p className="regName">age</p>
          <input
            type="text"
            className="registerInput"
            style={{ border: "1px solid #96f" }}
            placeholder="48"
          ></input>
        </div>
        <Button
          className="input-group-text round"
          style={{ height: "30px", textAlign: "center", lineHeight: "10px" }}
        >
          Sign Up
        </Button>
        <br />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p style={{ margin: "-2px 3px 0px 0px", color: "white" }}>
          Already have an account?
        </p>
        <a href="http://onliner.by" style={{ color: "white" }}>
          Log in!
        </a>
      </div>
    </div>
  );
}
