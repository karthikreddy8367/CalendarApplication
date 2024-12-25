// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CalendarView from './components/CalendarView';
import Dashboard from './components/Dashboard';
import CompanyManagement from './components/CompanyManagement';

import './App.css'; // Optional: Your CSS styles

const App = () => {
    // Sample communications data
    const [communications, setCommunications] = useState([
        { type: 'Email', date: '2023-10-01', companyId: '1' },
        { type: 'LinkedIn Post', date: '2023-10-05', companyId: '2' },
        { type: 'Phone Call', date: '2023-10-10', companyId: '1' },
        { type: 'Meeting', date: '2023-10-15', companyId: '3' },
        { type: 'Follow-up', date: '2023-10-20', companyId: '2' },
    ]);

    // Sample companies data
    const [companies, setCompanies] = useState([
        { _id: '1', name: 'Company A' },
        { _id: '2', name: 'Company B' },
        { _id: '3', name: 'Company C' },
    ]);

    return (
        <Router>
            <div>
                <h1>Communication Tracker</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/company-management">Company Management</Link></li>
                        <li><Link to="/calendar">Calendar</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard communications={communications} />} />
                    <Route path="/company-management" element={<CompanyManagement companies={companies} setCompanies={setCompanies} />} />
                    <Route path="/calendar" element={<CalendarView communications={communications} />} />
                    <Route path="/" element={<h2>Welcome to the Communication Tracker</h2>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App; // Ensure this line is present