import React, { useState } from "react";
import SecureRoute from './SecureRoute'

export default function Login(props) {
  const [loginData, setloginDetails] = useState({ username: "", password: "" });

  /* function changeLogInData(event) {
    setloginDetails({ ...loginData, [event.target.name]: event.target.value });
  } */

  function onLogin() {
  
    //    console.log(loginData)
    /* 
    When component render by react router, that component receive three different
    properties[location,match,history]
    */
    if (loginData.username === "admin" && loginData.password === "admin") {
        props.location.auth.onAuthentication()
        props.history.push("/profile");
    //   pushes a new entry onto the History Stack
    } else {
      alert("Invalid username/password");
    }
  }
  return (
    <div>
      <h2>Login Panel</h2>
      <p>
        Username :{" "}
        <input
          type="text"
          name="username"
          value={loginData.username}
          //  onChange={changeLogInData}
          onChange={(event) =>
            setloginDetails({ ...loginData, username: event.target.value })
          }
        />
      </p>
      <p>
        Password :{" "}
        <input
          type="password"
          name="password"
          value={loginData.password}
          //  onChange={changeLogInData}
          onChange={(event) =>
            setloginDetails({ ...loginData, password: event.target.value })
          }
        />
      </p>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}
