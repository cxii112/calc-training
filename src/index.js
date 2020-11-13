import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/iconsfont.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const links = document.querySelectorAll('a');
// for (item in links) {

// }


ReactDOM.render(
  <React.StrictMode>
    <App load='greet' status='' />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
