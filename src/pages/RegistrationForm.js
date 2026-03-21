import React, { useState } from "react";

const RegistrationForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: ""
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onRegister) {
      onRegister(formData);
      setFormData({ name: "", email: "", phone: "", event: "" });
    }
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    marginTop: "10px",
    width: "100%",
  };

  const inputStyle = {
    width: "90%",
    maxWidth: "350px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    textAlign: "center",
  };

  const selectStyle = {
    ...inputStyle,
    textAlignLast: "center",
  };

  const buttonStyle = {
    width: "160px",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.2s",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <select
        name="event"
        value={formData.event}
        onChange={handleChange}
        required
        style={selectStyle}
      >
        <option value="">Select Event</option>
        <option value="Workshop">Workshop</option>
        <option value="Seminar">Seminar</option>
        <option value="Competition">Competition</option>
      </select>
      <button
        type="submit"
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;