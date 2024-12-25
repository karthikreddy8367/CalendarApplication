// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional: Your global styles
import App from './App'; // Ensure this import is correct
import reportWebVitals from './reportWebVitals'; // Ensure this line is present

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Optional: Measure performance
reportWebVitals();