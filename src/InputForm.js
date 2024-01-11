import React, { useState, useEffect, useRef } from "react";

export default function InputForm({ onTextSubmit }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
    <div className="input-group purple-border my-3">
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={handleTextChange}
        onKeyDown={handleKeyPress}
        className="form-control round"
        placeholder="What is the task today?"
      ></input>
      <button
        onClick={handleButtonClick}
        className="input-group-text round"
        style={{ margin: "0px" }}
      >
        Add task
      </button>
    </div>
  );
}
