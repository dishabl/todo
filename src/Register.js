import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./App.css";

export default function Register({ history }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleMaleClick = () => {
    setGender("male");
  };

  const handleFemaleClick = () => {
    setGender("female");
  };

  const handleSignUp = async () => {
    try {
      let token;
      const response = await axios.post(
        "https://todo-redev.herokuapp.com/api/users/register",
        {
          username,
          email,
          password,
          gender,
          age: parseInt(age),
        },
        { headers: { "Content-Type": "application/json" } }
      );
      // navigate("/frame");
      if (response) {
        // Проверка наличия данных в ответе
        if (response.data) {
          // eslint-disable-next-line no-unused-vars
          token = response.data.token;
          console.log(response.data);
        } else {
          console.error(
            "Ошибка при регистрации: Неверный формат ответа сервера"
          );
          setError(
            "Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз."
          );
          return;
        }
      } else {
        console.error("Ошибка при регистрации: Отсутствует ответ от сервера");
        setError(
          "Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз."
        );
        return;
      }
      navigate("/login");
    } catch (error) {
      console.error(
        "Ошибка при регистрации:",
        error.response?.data || error.message
      );
      setError(
        "Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз."
      );
    }
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
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </div>
        <Button
          className="input-group-text round"
          style={{
            height: "30px",
            textAlign: "center",
            lineHeight: "10px",
            marginTop: "20px",
          }}
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p style={{ margin: "0px 3px 0px 0px", color: "white" }}>
          Already have an account?
        </p>
        <button
          onClick={handleLoginClick}
          style={{
            color: "white",
            background: "none",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Log in!
        </button>
      </div>
    </div>
  );
}
