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
          history.push("/");
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
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form type="submit">
        <label Htmlfor="user-email">User Email</label>
        <br></br>
        <input
          type="email"
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        ></input>
        <br></br>

        <label htmlFor="user-password">User Password</label>
        <br></br>
        <input
          type="password"
          value={userPassWord}
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        ></input>
        <br></br>
        <button type="submit" onClick={handleLogIn}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
