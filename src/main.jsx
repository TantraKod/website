import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { initEmailJS } from './services/emailService';
import { initGA } from './services/analyticsService';

// Initialise EmailJS and Google Analytics 4 before React tree mounts.
initEmailJS();
initGA();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
