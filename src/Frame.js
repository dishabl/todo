import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputForm from "./InputForm";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";

export default function Frame() {
  const [textList, setTextList] = useState([]);
  const navigate = useNavigate();
  const addText = async (text) => {
    if (text.trim() !== "") {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/todos`,
          {
            title: text,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );

        const newTask = response.data;
        setTextList((prevList) => [...prevList, newTask]);
      } catch (error) {
        console.error(
          "Ошибка при создании задачи:",
          error.response?.data || error.message
        );
      }
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/todos`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const tasks = response.data;
      setTextList(tasks);
    } catch (error) {
      console.error(
        "Ошибка при получении списка задач:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/todos/${taskId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setTextList((prevList) => prevList.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error(
        "Ошибка при удалении задачи:",
        error.response?.data || error.message
      );
    }
  };

  const handleToggle = async (taskId, isToggled) => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_API_URL}/todos/${taskId}/isCompleted`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setTextList((prevList) =>
        prevList.map((task) =>
          task.id === taskId
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        )
      );
    } catch (error) {
      console.error(
        "Ошибка при изменении статуса задачи:",
        error.response?.data || error.message
      );
    }
  };

  const handleEdit = (taskId, newText) => {
    const newList = textList.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
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
                onDelete={() => handleDelete(item.id)}
                onToggle={(isToggled) => handleToggle(item.id, isToggled)}
                onEdit={() => handleEdit()}
              />
            </li>
          ))}
        </ul>
      </div>
      <a href="/login" onClick={handleLogout} style={{ color: "white" }}>
        Log out
      </a>
    </div>
  );
}
