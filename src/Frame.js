import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "./InputForm";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";

export default function Frame() {
  const [textList, setTextList] = useState(
    JSON.parse(localStorage.getItem("textList")) || []
  );
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("textList", JSON.stringify(textList));
  }, [textList]);

  const addText = (text) => {
    if (text.trim() !== "") {
      const newTask = { id: uuidv4(), text, isToggled: false };
      setTextList([...textList, newTask]);
    }
  };

  const handleDelete = (taskId) => {
    setTextList((prevList) => prevList.filter((task) => task.id !== taskId));
  };

  const toggleText = (taskId) => {
    const newList = textList.map((task) =>
      task.id === taskId ? { ...task, isToggled: !task.isToggled } : task
    );
    setTextList(newList);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <div className="Fram">
        <br />
        <h1>Get things done!</h1>
        <br />

        <InputForm onTextSubmit={addText} />
        <ul className="ull">
          {textList.map((item) => (
            <li key={item.id}>
              <TaskList
                task={item}
                isToggled={item.isToggled}
                onToggle={() => toggleText(item.id)}
                onDelete={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      <a href="/todo" onClick={handleLogout} style={{ color: "white" }}>
        Log out
      </a>
    </div>
  );
}
