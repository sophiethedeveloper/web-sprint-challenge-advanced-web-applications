import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  console.log('login', login)

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", login)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.payload)
        props.history.push("/bubblePage")
      })
      .catch((err) =>
        console.log(`Login axiosWithAuth Failed: ${err.response}`)
      );
  };

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
        <h1>Log in to see beautiful colors!</h1>
        <label htmlFor="username" className="label">
          Username
        <input
          type="text"
          name="username"
          id="username"
          value={props.username}
          onChange={handleChange}
          placeholder="username"
          className="input"
        />
        </label>
        <label htmlFor="password" className="label">
          Password
        <input
          type="password"
          name="password"
          id="password"
          value={props.password}
          onChange={handleChange}
          placeholder="password"
          className="input"
        />
        </label>
        <button className="button">Log In</button>
      </form>
    </div>
  );
};

export default Login;
