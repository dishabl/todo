import "bootstrap/dist/css/bootstrap.min.css";
import trash from "./trash.png";
import edit from "./edit.png";

export default function TaskList() {
  return (
    <div>
      <button className="input-group-text taska input-group">
        Click me
        <button className="edit">
          <img src={edit} alt="edit" height="20" />
        </button>
        <button className="trash">
          <img src={trash} alt="trash" height="20" />
        </button>
      </button>
      {/* <img src={trash} alt="trash" /> */}
    </div>
  );
}
