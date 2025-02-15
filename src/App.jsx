import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CalendarPage from "./components/Calender"; // Import Calendar component
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Side Navigation Bar */}
        <Navbar />
        {/* Main Content Area */}
        <main className="grow p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} /> {/* Default Page */}
            <Route path="/calendar" element={<CalendarPage />} /> {/* Calendar Page */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
