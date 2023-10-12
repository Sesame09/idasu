import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

document.addEventListener('contextmenu', (event) => {
  const target = event.target;
  if (target.tagName === 'IMG') {
      event.preventDefault();
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);