import React from 'react'; 
import ReactDOM from 'react-dom/client'; //external node module (dependency)

// importing code from a default export is done
import App from './App'; // internal node module

// reserve code for globally available data 
// theme, user, auth, etc

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
