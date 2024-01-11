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
          {editedText}
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
