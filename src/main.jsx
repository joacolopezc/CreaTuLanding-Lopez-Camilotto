import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Punto de entrada mínimo y claro.
// Mantén esto sencillo — el router y las rutas están en App.jsx.
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
