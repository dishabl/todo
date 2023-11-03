import React, { useState } from "react";
import "./App.css";
import InputForm from "./InputForm";
import TaskList from "./TaskList";

export default function Frame() {
  const [displayedTexts, setDisplayedTexts] = useState([]);
  const handleTextSubmit = (text) => {
    setDisplayedTexts([...displayedTexts, text]);
  };
  return (
    <div className="Fram">
      <br />
      <h1>Get things done!</h1>
      <br />
      <InputForm onTextSubmit={handleTextSubmit} />
      <TaskList texts={displayedTexts} />
    </div>
  );
}
