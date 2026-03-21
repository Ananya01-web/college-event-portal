import React from "react";
import { useParams, Link } from "react-router-dom";

const EventDetails = () => {

  // 🔹 Get ID from URL
  const { id } = useParams();

  // 🔹 Get events from localStorage
  const events = JSON.parse(localStorage.getItem("events")) || [];

  // 🔹 Find selected event
  const event = events[id];

  // 🔹 If event not found
  if (!event) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Event not found</h2>
        <Link to="/events">Back to Events</Link>
      </div>
    );
  }

  // 🔹 Styles
  const cardStyle = {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "25px",
    textAlign: "center",
    backgroundColor: "#f0f8ff",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
  };

  const titleStyle = {
    color: "#007bff",
    marginBottom: "15px",
  };

  const textStyle = {
    margin: "8px 0",
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    display: "inline-block"
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>{event.name}</h2>

      <p style={textStyle}><strong>Date:</strong> {event.date}</p>
      <p style={textStyle}><strong>Time:</strong> {event.time}</p>
      <p style={textStyle}><strong>Type:</strong> {event.type}</p>
      <p style={textStyle}><strong>Description:</strong> {event.description}</p>

      <Link to="/events" style={buttonStyle}>
        Back to Events
      </Link>
    </div>
  );
};

export default EventDetails;