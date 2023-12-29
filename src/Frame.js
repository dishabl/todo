import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "./InputForm";
import TaskList from "./TaskList";

export default function Frame() {
  const [textList, setTextList] = useState([]);
  const idCounter = useRef(1);
  const navigate = useNavigate();

  const addText = (text) => {
    if (text.trim() !== "") {
      const newTask = { id: idCounter.current++, text, isToggled: false };
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
    // Реализуйте здесь логику выхода пользователя, например, удаление токена из localStorage
    localStorage.removeItem("token");

    // Перенаправление на страницу регистрации
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
      <a href="/" onClick={handleLogout} style={{ color: "white" }}>
        Log out
      </a>
    </div>
  );
}
