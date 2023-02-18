import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./styles.css";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggedIn", true);

      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          placeholder="Enter your email here"
        />
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          placeholder="Enter your password"
        />
        <button>Login</button>
      </form>
      <p>
        Don't have an account. <NavLink to="/register">Create one</NavLink>
      </p>
    </div>
  );
};

export default Login;
