import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarStyle = {
    width: "220px",
    height: "100vh",
    backgroundColor: "#007bff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30px",
    boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
    position: "fixed",
    top: 0,
    left: 0,
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "15px 0",
    width: "90%",
    textAlign: "center",
    padding: "10px 0",
    borderRadius: "6px",
    transition: "background-color 0.2s",
    fontWeight: "bold",
  };

  const activeStyle = {
    backgroundColor: "#0056b3",
  };

  return (
    <div style={sidebarStyle}>
      <NavLink to="/login" style={linkStyle} activeStyle={activeStyle}>
        Login
      </NavLink>
      <NavLink to="/signup" style={linkStyle} activeStyle={activeStyle}>
        Signup
      </NavLink>
      <NavLink to="/dashboard" style={linkStyle} activeStyle={activeStyle}>
      Dashboard
      </NavLink>
      <NavLink to="/events" style={linkStyle} activeStyle={activeStyle}>
        Events
      </NavLink>
      <NavLink to="/eventregistration" style={linkStyle} activeStyle={activeStyle}>
        Register
      </NavLink>
    </div>
  );
};

export default Sidebar;