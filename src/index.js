// 1) import
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';


// 2) reference to ID root and
// 3) take control of that element
const root = ReactDOM.createRoot(document.getElementById('root'));

// 4) create a component
//      imported

// 5) show the component on the screen
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
