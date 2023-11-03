import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function InputForm({ onTextSubmit }) {
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleButtonClick = () => {
    onTextSubmit(text);
    setText("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onTextSubmit(text);
      setText("");
    }
  };

  return (
    <div class="input-group purple-border my-3">
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        onKeyPress={handleKeyPress}
        class="form-control round"
        placeholder="What is the task today?"
        // aria-label="С текстовым полем"
      ></input>
      <button onClick={handleButtonClick} class="input-group-text round">
        Add task
      </button>
    </div>
  );
}
