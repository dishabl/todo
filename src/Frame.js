import React, { useState } from "react";
import "./App.css";
import InputForm from "./InputForm";
import TaskList from "./TaskList";

export default function Frame() {
  const [textList, setTextList] = useState([]);
  const addText = (text) => {
    if (text.trim() !== "") {
      setTextList([...textList, { text, isToggled: false }]);
    }
  };

  const removeText = (index) => {
    const newList = [...textList];
    newList.splice(index, 1);
    setTextList(newList);
  };

  const toggleText = (index) => {
    const newList = [...textList];
    newList[index].isToggled = !newList[index].isToggled;
    setTextList(newList);
  };

  return (
    <div className="Fram">
      <br />
      <h1>Get things done!</h1>
      <br />

      <InputForm onTextSubmit={addText} />
      <ul className="ull">
        {textList.map((item, index) => (
          <li key={index}>
            <TaskList
              task={item}
              onToggle={() => toggleText(index)}
              onDelete={() => removeText(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
