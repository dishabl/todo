import { Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";

export default function Log() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegisterClick = () => {
    navigate("/todo");
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://todo-redev.herokuapp.com/api/auth/login",
        {
          email: email,
          password: password,
        }
      );

      // Проверка успешного ответа от сервера
      if (response && response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/frame");
      } else {
        console.error("Ошибка при авторизации: Неверный формат ответа сервера");
        setError(
          "Произошла ошибка при авторизации. Пожалуйста, попробуйте еще раз."
        );
      }
    } catch (error) {
      console.error(
        "Ошибка при авторизации:",
        error.response?.data || error.message
      );
      setError(
        "Произошла ошибка при авторизации. Пожалуйста, попробуйте еще раз."
      );
    }
  };

  return (
    <div>
      <div className="Fram">
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            marginRight: "0",
          }}
        >
          email
        </p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="registerInput"
          style={{ border: "1px solid #96f" }}
          placeholder="dino_saur_cream@gmail.com"
        ></input>
        <br />
        <br />
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            marginRight: "0",
          }}
        >
          password
        </p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="registerInput"
          style={{ border: "1px solid #96f" }}
          placeholder="secret_info123"
        ></input>
        <br />
        <br />
        <Button
          onClick={handleLogin}
          className="input-group-text round"
          style={{ height: "30px", textAlign: "center", lineHeight: "10px" }}
        >
          Log in
        </Button>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <p style={{ margin: "-5px 5px 0px 0px", color: "white" }}>
          Don't have an account?
        </p>
        <Link to="/todo" style={{ color: "white" }}>
          Sign up!
        </Link> */}
        <p style={{ margin: "0px 3px 0px 0px", color: "white" }}>
          Don't have an account?
        </p>
        <button
          onClick={handleRegisterClick}
          style={{
            color: "white",
            background: "none",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Sign up!
        </button>
      </div>
    </div>
  );
}
