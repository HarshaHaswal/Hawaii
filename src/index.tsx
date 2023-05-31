import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./font/IBMPlexMono-Bold.ttf";
import "./font/IBMPlexMono-ExtraLight.ttf";
import "./font/IBMPlexMono-Light.ttf";
import "./font/IBMPlexMono-Medium.ttf";
import "./font/IBMPlexMono-Regular.ttf";
import "./font/IBMPlexMono-SemiBold.ttf";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
