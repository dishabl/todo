import React, { useState, useEffect } from "react";
import trash from "./trash.png";
import edit from "./edit.png";

export default function TaskList({ task, onDelete }) {
  const { id, text } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [originalText, setOriginalText] = useState({
    text,
    isToggled: false,
    prevIsToggled: false,
  });

  useEffect(() => {
    setEditedText(originalText.text);
  }, [originalText.text]);

  const handleEdit = () => {
    setOriginalText((prev) => ({ ...prev, prevIsToggled: prev.isToggled }));
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setOriginalText((prev) => ({
      ...prev,
      text: editedText,
      isToggled: prev.prevIsToggled,
    }));
    setIsEditing(false);
  };

  const handleTextClick = () => {
    setOriginalText((prev) => ({
      ...prev,
      isToggled: !prev.isToggled,
    }));
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
            textDecoration: originalText.isToggled ? "line-through" : "none",
            color: originalText.isToggled ? "rgb(120, 120, 120)" : "white",
          }}
        >
          {originalText.text}
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
