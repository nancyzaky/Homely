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
    fetch("/users", {
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
    <div style={{ height: "100%", width: "100%" }}>
      <form type="submit">
        <label htmlFor="name" id="name">
          Name
        </label>
        <br></br>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="email" id="email">
          Email
        </label>
        <br></br>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="password" id="password">
          PassWord
        </label>

        <br></br>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="passwordC" id="passwordC">
          PassWord Confirmation
        </label>
        <br></br>
        <input
          type="password"
          value={passwordC}
          onChange={(e) => {
            setPasswordC(e.target.value);
          }}
        ></input>
        <br></br>
        <button onClick={handleSignUp}>Sign Up</button>
      </form>
      {errors.length > 0 && (
        <ul>
          {errors.map((error) => {
            return (
              <li>
                <h5>{error}</h5>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SignUp;
