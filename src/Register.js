import { Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom"; // Добавлен импорт Link
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./App.css";
import Log from "./Log";

export default function Register({ history }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  // const [showLog, setShowLog] = useState(false);

  const handleMaleClick = () => {
    setGender("male");
  };

  const handleFemaleClick = () => {
    setGender("female");
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "https://todo-redev.herokuapp.com/api-docs/api/users/register",
        {
          username,
          email,
          password,
          gender,
          age,
        }
      );
      console.log(response.data);

      // После успешной регистрации показываем страницу авторизации
      // setShowLog(true);
      history.push("/login");
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
      setError(
        "Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз."
      );
    }
  };

  return (
    <div>
      {/* {showLog ? ( */}
      {/* <Log />
      ) : ( */}
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
          style={{
            height: "30px",
            textAlign: "center",
            lineHeight: "10px",
          }}
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      {/* )} */}

      {/* Добавленные теги p и a, которые будут отображаться только на странице регистрации */}
      {/* {!showLog && ( */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p style={{ margin: "-2px 3px 0px 0px", color: "white" }}>
          Already have an account?
        </p>
        <Link to="/login" style={{ color: "white" }}>
          Log in!
        </Link>
      </div>
      {/* )} */}
    </div>
  );
}
