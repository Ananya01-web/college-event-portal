import React, { useState, useEffect } from "react";
import RegistrationForm from "./RegistrationForm";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

const EventRegistration = () => {

  // 🔹 Participants State (persistent)
  const [participants, setParticipants] = useState(() => {
    const saved = localStorage.getItem("participants");
    return saved ? JSON.parse(saved) : [];
  });

  // 🔹 Other States
  const [confirmation, setConfirmation] = useState("");
  const [ticket, setTicket] = useState(null);

  const ticketRef = useRef();

  // 🔹 Add Participant + Generate Ticket
  const addParticipant = (data) => {
    const updatedList = [...participants, data];

    setParticipants(updatedList);
    localStorage.setItem("participants", JSON.stringify(updatedList));

    // 🎟️ Generate Ticket
    const generatedTicket = {
      name: data.name,
      email: data.email,
      event: data.event,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString()
    };

    setTicket(generatedTicket);

    setConfirmation(`Thank you ${data.name}, your registration is confirmed!`);
  };

  // 🔹 Auto-hide confirmation
  useEffect(() => {
    if (confirmation) {
      const timer = setTimeout(() => setConfirmation(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [confirmation]);

  // 🔹 Styles
  const cardStyle = {
    maxWidth: "520px",
    margin: "50px auto",
    padding: "25px",
    textAlign: "center",
    backgroundColor: "#f0f8ff",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
  };

  const titleStyle = {
    color: "#007bff",
    marginBottom: "20px",
  };

  const confirmationStyle = {
    color: "green",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const ticketStyle = {
    marginTop: "20px",
    padding: "20px",
    border: "2px dashed #333",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #74ebd5, #acb6e5)",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const thTdStyle = {
    border: "1px solid #ccc",
    padding: "8px",
    textAlign: "center",
  };

  const downloadTicket = async () => {
    const canvas = await html2canvas(ticketRef.current);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 180, 0);
    pdf.save("Event_Ticket.pdf");
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>Event Registration</h2>

      {/* ✅ Confirmation */}
      {confirmation && <p style={confirmationStyle}>{confirmation}</p>}

      {/* 🎟️ Ticket */}
      {ticket && (
        <div ref={ticketRef} style={ticketStyle}>
          <h3>🎟️ Your Ticket</h3>

          <p><b>Name:</b> {ticket.name}</p>
          <p><b>Email:</b> {ticket.email}</p>
          <p><b>Event:</b> {ticket.event}</p>
          <p><b>Date:</b> {ticket.date}</p>
          <p><b>Time:</b> {ticket.time}</p>

          <div style={{ marginTop: "15px" }}>
            <QRCodeCanvas
              value={JSON.stringify(ticket)}
              size={150}
              bgColor="#ffffff"
              fgColor="#000000"
            />
          </div>

           <button
             onClick={downloadTicket}
             style={{
              marginTop: "15px",
              padding: "10px 15px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
             }}
            >
             Download Ticket 📄
            </button>
        </div>
      )}

      {/* 🔹 Form */}
      <RegistrationForm onRegister={addParticipant} />

      {/* 🔹 Participants Table */}
      <h3 style={{ marginTop: "25px" }}>Registered Participants</h3>

      {participants.length === 0 ? (
        <p>No participants yet.</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>#</th>
              <th style={thTdStyle}>Name</th>
              <th style={thTdStyle}>Email</th>
              <th style={thTdStyle}>Phone</th>
              <th style={thTdStyle}>Event</th>
            </tr>
          </thead>

          <tbody>
            {participants.map((p, index) => (
              <tr key={index}>
                <td style={thTdStyle}>{index + 1}</td>
                <td style={thTdStyle}>{p.name}</td>
                <td style={thTdStyle}>{p.email}</td>
                <td style={thTdStyle}>{p.phone}</td>
                <td style={thTdStyle}>{p.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EventRegistration;