import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // We can use App.css for all styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
