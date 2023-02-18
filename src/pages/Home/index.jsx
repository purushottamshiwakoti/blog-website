import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/Searchbar";
import { blog } from "../../config/data";
import Blog from "../blog";

const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const logIn = JSON.parse(localStorage.getItem("loggedIn"));

  const handleLogout = () => {
    localStorage.removeItem(logIn);
    navigate("/login");
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        style={{
          marginLeft: "75rem",
          marginTop: "2rem",
          backgroundColor: "purple",
          width: "4rem",
          height: "2.5rem",
          padding: "0.5rem",
          fontSize: "1rem",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
      <h2 style={{ color: "purple" }}>Welcome {userName.name}</h2>
      <Header />
      <SearchBar />
      <Blog blogs={blog} />
    </div>
  );
};

export default Home;
