import React, { useState } from "react";
import "./styles.css";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    alert("Signup Sucessful Now you can login");
    navigate("/login");
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your username here"
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <input
          type="email"
          name="email"
          required
          value={input.email}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          placeholder="Enter your email here"
        />
        <input
          type="password"
          name="password"
          required
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          placeholder="Enter your password"
        />
        <button>Signup</button>
      </form>
      <p>
        Already have an account. <NavLink to="/login">Login</NavLink>
      </p>
    </div>
  );
};

export default Register;
