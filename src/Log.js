import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function Log() {
  return (
    <div>
      <div className="Fram">
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            marginRight: "0",
          }}
        >
          email
        </p>
        <input
          type="text"
          className="registerInput"
          style={{ border: "1px solid #96f" }}
          placeholder="dino_saur_cream@gmail.com"
        ></input>
        <br />
        <br />
        {/* </div> */}
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            marginRight: "0",
          }}
        >
          password
        </p>
        <input
          type="text"
          className="registerInput"
          style={{ border: "1px solid #96f" }}
          placeholder="secret_info123"
        ></input>
        {/* </div> */}
        <br />
        <br />
        <Button
          className="input-group-text round"
          style={{ height: "30px", textAlign: "center", lineHeight: "10px" }}
        >
          Log in
        </Button>
        <br />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ margin: "-2px 3px 0px 0px", color: "white" }}>
          Don't have an account?
        </p>
        <a href="http://onliner.by" style={{ color: "white" }}>
          Sign up!
        </a>
      </div>
    </div>
  );
}
