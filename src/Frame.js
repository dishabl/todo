import React, { useState } from "react";
import "./App.css";
import InputForm from "./InputForm";
import TaskList from "./TaskList";

export default function Frame() {
  const [textList, setTextList] = useState([]);
  const addText = (text) => {
    setTextList([...textList, text]);
  };
  return (
    <div className="Fram">
      <br />
      <h1>Get things done!</h1>
      <br />
      <InputForm onTextSubmit={addText} />
      <ul>
        {textList.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
}
