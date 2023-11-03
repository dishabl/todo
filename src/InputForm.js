import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function InputForm({ onTextSubmit }) {
  const [inputText, setInputText] = useState("");
  const handleButtonClick = () => {
    onTextSubmit(inputText);
    setInputText("");
  };
  return (
    <div class="input-group purple-border my-3">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
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
