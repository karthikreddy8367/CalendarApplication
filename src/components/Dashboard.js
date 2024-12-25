import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

const Dashboard = ({ communications }) => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetchCompanies();
        // Log web vitals
        onCLS(console.log);
        onFID(console.log);
        onFCP(console.log);
        onLCP(console.log);
        onTTFB(console.log);
    }, []);

    const fetchCompanies = async () => {
        try {
            const response = await axios.get('/api/companies');
            setCompanies(response.data);
        } catch (error) {
            console.error("Error fetching companies:", error);
        }
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Last Communications</th>
                        <th>Next Scheduled Communication</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map(company => (
                        <tr key={company._id}>
                            <td>{company.name}</td>
                            <td>
                                {/* Display last communications */}
                                {communications
                                    .filter(comm => comm.companyId === company._id) // Assuming communications have a companyId
                                    .slice(-1) // Get the last communication
                                    .map(comm => (
                                        <div key={comm.date}>
                                            {comm.type} on {comm.date}
                                        </div>
                                    ))}
                            </td>
                            <td>
                                {/* Display next scheduled communication */}
                                {/* Assuming you have a way to determine the next scheduled communication */}
                                {communications
                                    .filter(comm => comm.companyId === company._id && new Date(comm.date) > new Date())
                                    .sort((a, b) => new Date(a.date) - new Date(b.date))
                                    .slice(0, 1) // Get the next scheduled communication
                                    .map(comm => (
                                        <div key={comm.date}>
                                            {comm.type} on {comm.date}
                                        </div>
                                    ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;