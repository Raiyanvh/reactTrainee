import { StrictMode } from 'react'              // Imports a development helper that can reveal certain problems.
import { createRoot } from 'react-dom/client'   // Imports the API used to mount the React application.
import './index.css'                            // Load global style
import App from './App.jsx'                     // Imports the main application compontent

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
