import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Events = () => {

  const [eventsList, setEventsList] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [editData, setEditData] = useState({
    name: "",
    date: "",
    time: "",
    type: "",
    description: ""
  });

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const storedAnnouncements = JSON.parse(localStorage.getItem("announcements")) || [];

    setEventsList(storedEvents);
    setAnnouncements(storedAnnouncements);
  }, []);

  // 🔥 UPDATE FUNCTION
  const handleUpdate = (index) => {
    const updatedEvents = [...eventsList];
    updatedEvents[index] = editData;

    setEventsList(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));

    setEditIndex(null);

    alert("Event Updated!");
  };

  // 🔥 DELETE FUNCTION
  const deleteEvent = (indexToDelete) => {
    const updatedEvents = eventsList.filter((_, index) => index !== indexToDelete);
    setEventsList(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  // 🔹 Styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "30px",
    gap: "20px",
  };

  const cardWrapper = {
    width: "300px",
    backgroundColor: "#f0f8ff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    padding: "15px",
    textAlign: "center",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#000",
    fontWeight: "bold",
    display: "block",
    marginBottom: "10px",
  };

  const hoverStyle = {
    transform: "scale(1.05)",
  };

  const deleteBtnStyle = {
    marginTop: "10px",
    padding: "8px 15px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const editBtnStyle = {
    marginTop: "10px",
    marginRight: "10px",
    padding: "8px 12px",
    backgroundColor: "#ffc107",
    color: "#000",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        All Events
      </h2>

      {/* 🔔 Announcements */}
      <h3 style={{ textAlign: "center", marginTop: "20px" }}>
        Announcements
      </h3>

      {announcements.length === 0 ? (
        <p style={{ textAlign: "center" }}>No announcements yet</p>
      ) : (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          {announcements.map((a, i) => (
            <p key={i} style={{ fontWeight: "bold" }}>
              📢 {a}
            </p>
          ))}
        </div>
      )}

      {/* 🔹 Events */}
      {eventsList.length === 0 ? (
        <p style={{ textAlign: "center" }}>No events available</p>
      ) : (
        <div style={containerStyle}>
          {eventsList.map((event, index) => (
            <div key={index} style={cardWrapper}>

              {/* Event Link */}
              <Link
                to={`/eventdetails/${index}`}
                style={linkStyle}
                onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                {event.name} <br />
                {event.date} <br />
                {event.time}
              </Link>

              {/* 🔥 Edit Button */}
              <button
                onClick={() => {
                  setEditIndex(index);
                  setEditData(event);
                }}
                style={editBtnStyle}
              >
                Edit
              </button>

              {/* 🔥 Delete Button */}
              <button
                onClick={() => deleteEvent(index)}
                style={deleteBtnStyle}
              >
                Delete
              </button>

              {/* 🔥 Edit Form */}
              {editIndex === index && (
                <div style={{ marginTop: "10px" }}>

                  <input
                    value={editData.name}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    placeholder="Name"
                  />

                  <input
                    type="date"
                    value={editData.date}
                    onChange={(e) => setEditData({ ...editData, date: e.target.value })}
                  />

                  <input
                    value={editData.time}
                    onChange={(e) => setEditData({ ...editData, time: e.target.value })}
                    placeholder="Time"
                  />

                  <br />

                  <button
                    onClick={() => handleUpdate(index)}
                    style={{ marginTop: "5px" }}
                  >
                    Save
                  </button>

                </div>
              )}

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;