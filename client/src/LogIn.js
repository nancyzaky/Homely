import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const LogIn = ({ changeUser }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassWord, setUserPassword] = useState("");
  const [errors, setErrors] = useState("");
  const history = useHistory();
  const handleLogIn = (e) => {
    e.preventDefault();
    fetch("/api/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail, password: userPassWord }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((d) => {
          console.log(d);
          changeUser(d.name);
        });
      } else {
        resp.json().then((d) => {
          console.log(d);
          setErrors(d.error);
        });
      }
    });
    setUserEmail("");
    setUserPassword("");
    history.push("/");
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundImage:
          "linear-gradient(to bottom, #ffffff, #dedcdf, #c0b9be, #a5989b, #897878)",
      }}
    >
      <form type="submit" style={{ paddingTop: "3rem", paddingBottom: "1rem" }}>
        <label
          Htmlfor="user-email"
          style={{ fontWeight: "bold", letterSpacing: "2px" }}
        >
          User Email
        </label>
        <br></br>
        <input
          style={{
            width: "16rem",
            height: "2rem",
            marginTop: "1rem",
            marginBottom: "1.5rem",
            fontWeight: "bold",
          }}
          type="email"
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        ></input>
        <br></br>

        <label
          htmlFor="user-password"
          style={{ fontWeight: "bold", letterSpacing: "2px" }}
        >
          User Password
        </label>
        <br></br>
        <input
          style={{
            width: "16rem",
            height: "2rem",
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
          type="password"
          value={userPassWord}
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        ></input>
        <br></br>
        <button
          type="submit"
          onClick={handleLogIn}
          className="btn"
          style={{ marginLeft: "3rem", backgroundColor: "black" }}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
