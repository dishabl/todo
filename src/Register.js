import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./App.css";

export default function Register({ history }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "male",
    age: "",
    error: "",
  });
  const { username, email, password, gender, age, error } = formData;
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleMaleClick = () => {
    setFormData((prevData) => ({ ...prevData, gender: "male" }));
  };
  const handleFemaleClick = () => {
    setFormData((prevData) => ({ ...prevData, gender: "female" }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/register`,
        {
          username,
          email,
          password,
          gender,
          age: parseInt(age),
        },
        { headers: { "Content-Type": "application/json" } }
      );
      if (response && response.data && response.data.token) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/frame");
      } else {
        console.error("Ошибка при регистрации: Неверный формат ответа сервера");
        setFormData((prevData) => ({
          ...prevData,
          error:
            "Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз.",
        }));
      }
    } catch (error) {
      console.error(
        "Ошибка при регистрации:",
        error.response?.data || error.message
      );
      setFormData((prevData) => ({
        ...prevData,
        error:
          "Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз.",
      }));
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSignUp();
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
            name="username"
            className="registerInput"
            style={{ border: "1px solid #96f" }}
            onKeyDown={handleKeyDown}
            placeholder="Dino_saur_cream"
            onChange={handleInputChange}
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
            name="email"
            className="registerInput"
            style={{ border: "1px solid #96f" }}
            onKeyDown={handleKeyDown}
            placeholder="Dino_saur_cream@gmail.com"
            onChange={handleInputChange}
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
            name="password"
            className="registerInput"
            style={{ border: "1px solid #96f" }}
            onKeyDown={handleKeyDown}
            placeholder="secret_info123"
            onChange={handleInputChange}
          ></input>
        </div>
        <div
          className="gender-container"
          style={{
            display: "flex",
            borderColor: "#96f",
            justifyContent: "space-between",
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
            name="age"
            className="registerInput"
            style={{ border: "1px solid #96f" }}
            onKeyDown={handleKeyDown}
            placeholder="48"
            onChange={handleInputChange}
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
        <p style={{ margin: "0px 3px 0px 0px !important", color: "white" }}>
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
