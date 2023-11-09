import "bootstrap/dist/css/bootstrap.min.css";
import trash from "./trash.png";
import edit from "./edit.png";
import { useState } from "react";

export default function TaskList({ task }) {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled((prevState) => !prevState);
  };
  const textDecoration = isToggled ? "line-through" : "none";
  const color = isToggled ? "rgb(117, 117, 117)" : "white";

  return (
    <div>
      <div
        className="input-group-text taska input-group"
        onClick={handleClick}
        style={{ textDecoration, color }}
      >
        {task}
        <button className="edit">
          <img
            onClick={() => console.log("CLick edit")}
            // className="edit"
            src={edit}
            alt="edit"
            height="20"
          />
        </button>
        <button className="trash">
          <img
            // className="trash"
            onClick={() => console.log("CLick trash")}
            src={trash}
            alt="trash"
            height="20"
          />
        </button>
      </div>
    </div>
  );
}
