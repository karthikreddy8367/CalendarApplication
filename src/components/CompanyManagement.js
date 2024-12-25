import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyManagement = () => {
    const [companies, setCompanies] = useState([]);
    const [newCompany, setNewCompany] = useState({ name: '', location: '', linkedin: '', emails: '', phoneNumbers: '', comments: '', periodicity: '' });

    useEffect(() => {
        fetchCompanies();
    }, []);

    const fetchCompanies = async () => {
        const response = await axios.get('/api/companies');
        setCompanies(response.data);
    };

    const handleAddCompany = async () => {
        await axios.post('/api/companies', newCompany);
        fetchCompanies();
        setNewCompany({ name: '', location: '', linkedin: '', emails: '', phoneNumbers: '', comments: '', periodicity: '' });
    };

    return (
        <div>
            <h2>Company Management</h2>
            <input type="text" placeholder="Company Name" value={newCompany.name} onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })} />
            {/* Add other input fields similarly */}
            <button onClick={handleAddCompany}>Add Company</button>
            <ul>
                {companies.map(company => (
                    <li key={company._id}>{company.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyManagement;