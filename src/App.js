import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/login";
import Signup from "./pages/signup";
import Events from "./pages/events";
import EventDetails from "./pages/EventDetails";
import EventRegistration from "./pages/EventRegistration";
import OrganizerDashboard from "./pages/OrganizerDashboard";

// Sidebar
import Sidebar from "./components/sidebar";

function App() {
  const mainStyle = {
    marginLeft: "220px", // same width as sidebar
    padding: "20px",
  };

  return (
    <Router>
      <Sidebar />
      <div style={mainStyle}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/events" element={<Events />} />
          <Route path="/eventdetails/:id" element={<EventDetails />} />
          <Route path="/eventregistration" element={<EventRegistration />} />
          <Route path="/dashboard" element={<OrganizerDashboard />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;