import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommunicationMethodManagement = () => {
    const [methods, setMethods] = useState([]);
    const [newMethod, setNewMethod] = useState({ name: '', description: '', sequence: '', mandatory: false });

    useEffect(() => {
        fetchMethods();
    }, []);

    const fetchMethods = async () => {
        const response = await axios.get('/api/communication-methods');
        setMethods(response.data);
    };

    const handleAddMethod = async () => {
        await axios.post('/api/communication-methods', newMethod);
        fetchMethods();
        setNewMethod({ name: '', description: '', sequence: '', mandatory: false });
    };

    return (
        <div>
            <h2>Communication Method Management</h2>
            <input type="text" placeholder="Method Name" value={newMethod.name} onChange={(e) => setNewMethod({ ...newMethod, name: e.target.value })} />
            <input type="text" placeholder="Description" value={newMethod.description} onChange={(e) => setNewMethod({ ...newMethod, description: e.target.value })} />
            <input type="number" placeholder="Sequence" value={newMethod.sequence} onChange={(e) => setNewMethod({ ...newMethod, sequence: e.target.value })} />
            <label>
                Mandatory:
                <input type="checkbox" checked={newMethod.mandatory} onChange={(e) => setNewMethod({ ...newMethod, mandatory: e.target.checked })} />
            </label>
            <button onClick={handleAddMethod}>Add Method</button>
            <ul>
                {methods.map(method => (
                    <li key={method._id}>{method.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CommunicationMethodManagement;