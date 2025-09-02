/**
 * @fileoverview Main entry point for the File Explorer React application.
 * This file bootstraps the React application and renders it to the DOM.
 * 
 * @author File Explorer Team
 * @version 1.0.0
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create root element for React 18 concurrent features
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component wrapped in StrictMode for development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
