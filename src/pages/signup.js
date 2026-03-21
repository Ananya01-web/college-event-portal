import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>College Event Portal</h1>
        <h2>Signup</h2>

        <input style={styles.input} placeholder="Name" />
        <input style={styles.input} placeholder="Email" />
        <input style={styles.input} type="password" placeholder="Password" />

        <button style={styles.button}>Signup</button>

        <p>
          Already have an account? <Link to="/">Login</Link>
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
    background: "#f4f4f4",
  },
  card: {
    padding: "30px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  input: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    width: "250px",
  },
  button: {
    padding: "10px 20px",
    marginTop: "10px",
    cursor: "pointer",
  },
};

export default Signup;