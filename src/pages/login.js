import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>College Event Portal</h1>
        <h2>Login</h2>

        <input style={styles.input} placeholder="Email" />
        <input style={styles.input} type="password" placeholder="Password" />

        <button style={styles.button}>Login</button>

        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#e0e0e0",
  },
  card: {
    padding: "40px",
    background: "white",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  input: {
    display: "block",
    margin: "15px auto",
    padding: "12px",
    width: "250px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    marginTop: "15px",
    cursor: "pointer",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
};

export default Login;