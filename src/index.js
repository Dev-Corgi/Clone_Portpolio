import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./fonts/Lausanne.ttf"
import "./fonts/Slack-Light.ttf"
import "./fonts/SomeTimes-times.ttf"

const root = ReactDOM.createRoot(document.getElementById('root'));
// Set the initial value of the custom property
// setFontSize();

// Listen for the resize event and update the custom property value
// window.addEventListener('resize', setFontSize);

// function setFontSize() {
//   // Calculate the font size based on the viewport width
//   const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
//   const fontSize = vw / 2560 * 100;

//   // Update the value of the custom property
//   document.documentElement.style.setProperty('default-font-size', `${fontSize}px`);
// }
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
