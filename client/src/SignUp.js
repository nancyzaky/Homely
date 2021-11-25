import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
        password_confirmation: passwordC,
      }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((d) => {
          history.push("/login");
        });
      } else {
        resp.json().then((d) => setErrors(d.errors));
      }
    });
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        justifyContent: "center",
        backgroundImage:
          "linear-gradient(to bottom, #ffffff, #dedcdf, #c0b9be, #a5989b, #897878)",
      }}
    >
      <form type="submit" style={{ paddingTop: "3rem", paddingBottom: "1rem" }}>
        <label
          htmlFor="name"
          id="name"
          style={{ fontWeight: "bold", letterSpacing: "2px" }}
        >
          Name
        </label>
        <br></br>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          style={{
            width: "16rem",
            height: "2rem",
            marginTop: "1rem",
            marginBottom: "1.5rem",
            fontWeight: "bold",
          }}
        ></input>
        <br></br>
        <label
          htmlFor="email"
          id="email"
          style={{ fontWeight: "bold", letterSpacing: "2px" }}
        >
          Email
        </label>
        <br></br>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          style={{
            width: "16rem",
            height: "2rem",
            marginTop: "1rem",
            marginBottom: "1.5rem",
            fontWeight: "bold",
          }}
        ></input>
        <br></br>
        <label
          htmlFor="password"
          id="password"
          style={{ fontWeight: "bold", letterSpacing: "2px" }}
        >
          PassWord
        </label>

        <br></br>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          style={{
            width: "16rem",
            height: "2rem",
            marginTop: "1rem",
            marginBottom: "1.5rem",
            fontWeight: "bold",
          }}
        ></input>
        <br></br>
        <label
          htmlFor="passwordC"
          id="passwordC"
          style={{ fontWeight: "bold", letterSpacing: "2px" }}
        >
          Password Confirmation
        </label>
        <br></br>
        <input
          type="password"
          value={passwordC}
          onChange={(e) => {
            setPasswordC(e.target.value);
          }}
          style={{
            width: "16rem",
            height: "2rem",
            marginTop: "1rem",
            marginBottom: "1.5rem",
            fontWeight: "bold",
          }}
        ></input>
        <br></br>
        <button
          onClick={handleSignUp}
          className="btn"
          style={{ backgroundColor: "black" }}
        >
          Sign Up
        </button>
        {errors.length > 0 && (
          <ul style={{ top: "0" }}>
            {errors.map((error) => {
              return (
                <li>
                  <h5>{error}</h5>
                </li>
              );
            })}
          </ul>
        )}
      </form>
    </div>
  );
};

export default SignUp;
