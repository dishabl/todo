import "bootstrap/dist/css/bootstrap.min.css";
import trash from "./trash.png";
import edit from "./edit.png";
import { useState } from "react";

export default function TaskList({ task, onToggle, onDelete }) {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
    onToggle();
  };
  const { text } = task;
  const textDecoration = isToggled ? "line-through" : "none";
  const color = isToggled ? "rgb(117, 117, 117)" : "white";

  return (
    <div>
      <div
        className="input-group-text taska input-group"
        onClick={handleToggle}
        style={{ textDecoration, color }}
      >
        {text}
        <button className="edit" onClick={(e) => e.stopPropagation()}>
          <img src={edit} alt="edit" height="20" />
        </button>
        <button
          className="trash"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <img src={trash} alt="trash" height="20" />
        </button>
      </div>
    </div>
  );
}
