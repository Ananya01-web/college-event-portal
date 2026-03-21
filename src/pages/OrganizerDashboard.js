import React, { useState } from "react";

const OrganizerDashboard = () => {

  // 🔹 Event States
  
  const [events, setEvents] = useState(() => {
    return JSON.parse(localStorage.getItem("events")) || [];
  });
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    type: "",
    description: ""
  });

  const [announcement, setAnnouncement] = useState("");
  const [announcements, setAnnouncements] = useState(() => {
    return JSON.parse(localStorage.getItem("announcements")) || [];
  });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedEvents = [...events, formData]; // ✅ correct

    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));

    setFormData({
      name: "",
      date: "",
      time: "",
      type: "",
      description: ""
    });

    alert("Event Created Successfully!");
  };

  // 🔹 Post Announcement (FIXED)
  const postAnnouncement = () => {
    if (announcement.trim() === "") return;

    const updatedAnnouncements = [...announcements, announcement];

    setAnnouncements(updatedAnnouncements);
    localStorage.setItem("announcements", JSON.stringify(updatedAnnouncements));

    setAnnouncement("");

    alert("Announcement Posted!");
  };

  // 🔹 Styles
  const cardStyle = {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#f0f8ff",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    textAlign: "center",
  };

  const inputStyle = {
    width: "90%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    textAlign: "center"
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px"
  };

  return (
    <div style={cardStyle}>

      <h2 style={{ color: "#007bff" }}>Organizer Dashboard</h2>

      {/* 🔹 Event Creation */}
      <h3>Create Event</h3>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Event Name" value={formData.name} onChange={handleChange} required style={inputStyle} />
        <input name="date" type="date" value={formData.date} onChange={handleChange} required style={inputStyle} />
        <input name="time" placeholder="Time" value={formData.time} onChange={handleChange} required style={inputStyle} />
        <input name="type" placeholder="Type (Workshop/Seminar)" value={formData.type} onChange={handleChange} required style={inputStyle} />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required style={inputStyle} />

        <br />
        <button type="submit" style={buttonStyle}>Add Event</button>
      </form>

      {/* 🔹 Show Created Events */}
      <h3 style={{ marginTop: "20px" }}>Created Events</h3>
      {events.length === 0 ? (
        <p>No events created yet</p>
      ) : (
        events.map((e, i) => (
          <p key={i}><b>{e.name}</b> - {e.date}</p>
        ))
      )}

      {/* 🔹 Announcements */}
      <h3 style={{ marginTop: "30px" }}>Announcements</h3>

      <input
        type="text"
        value={announcement}
        onChange={(e) => setAnnouncement(e.target.value)}
        placeholder="Write announcement..."
        style={inputStyle}
      />

      <br />

      <button onClick={postAnnouncement} style={buttonStyle}>
        Post
      </button>

      {/* 🔹 Show Announcements */}
      <div style={{ marginTop: "20px" }}>
        {announcements.length === 0 ? (
          <p>No announcements yet</p>
        ) : (
          announcements.map((a, i) => (
            <p key={i}><b>📢 {a}</b></p>
          ))
        )}
      </div>

    </div>
  );
};

export default OrganizerDashboard;