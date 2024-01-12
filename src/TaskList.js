import React from "react";
import trash from "./trash.png";
import axios from "axios";
import edit from "./edit.png";
import { useState, useEffect } from "react";

export default function TaskList({ task, onDelete, onToggle, onEdit }) {
  const { id, title, isCompleted } = task;
  const [editedText, setEditedText] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setEditedText(title);
  }, [title]);

  const handleEdit = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleUpdate = () => {
    onEdit(id, editedText);
    setIsEditing(false);
  };

  const handleTextClick = () => {
    onToggle(id);
  };

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUpdate();
    }
  };
  // const handleDelete = async () => {
  // try {
  //   await axios.delete(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   });

  // После успешного удаления, вызываем onDelete без параметров
  // onDelete();
  // } catch (error) {
  //   console.error(
  //     "Ошибка при удалении задачи:",
  //     error.response?.data || error.message
  //   );
  // }
  // };

  // const handleToggle = async () => {
  //   try {
  //     const response = await axios.patch(
  //       `${process.env.REACT_APP_API_URL}/todos/${id}/isCompleted`,
  //       null,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );

  //     const updatedTask = response.data;
  //     onToggle(updatedTask.isCompleted);
  //   } catch (error) {
  //     console.error(
  //       "Ошибка при изменении статуса задачи:",
  //       error.response?.data || error.message
  //     );
  //   }
  // };

  //   return (
  //     <div className="input-group-text taska input-group" onClick={onToggle}>
  //       <span
  //         style={{
  //           textDecoration: isCompleted ? "line-through" : "none",
  //           color: isCompleted ? "rgb(120, 120, 120)" : "white",
  //         }}
  //       >
  //         {title}
  //       </span>
  //       <button className="edit" onClick={handleEdit}>
  //         <img src={edit} alt="edit" height="20" />
  //       </button>
  //       <button className="trash" onClick={onDelete}>
  //         <img src={trash} alt="trash" height="20" />
  //       </button>
  //     </div>
  //   );
  // }
  return (
    <div>
      {isEditing ? (
        <div className="input-group purple-border my-3">
          <input
            type="text"
            value={editedText}
            onChange={handleTextChange}
            onKeyDown={handleKeyDown}
            className="form-control round"
            placeholder="Edit task"
          ></input>
          <button onClick={handleUpdate} className="input-group-text round">
            Update
          </button>
        </div>
      ) : (
        <div
          className="input-group-text taska input-group"
          onClick={handleTextClick}
          style={{
            textDecoration: isCompleted ? "line-through" : "none",
            color: isCompleted ? "rgb(120, 120, 120)" : "white",
          }}
        >
          {editedText} {/* Используем editedText вместо text */}
          <button className="edit" onClick={handleEdit}>
            <img src={edit} alt="edit" height="20" />
          </button>
          <button
            className="trash"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(id);
            }}
          >
            <img src={trash} alt="trash" height="20" />
          </button>
        </div>
      )}
    </div>
  );
}
