import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import Root from './Root'
import reportWebVitals from './reportWebVitals'
import axios from 'axios'

axios.defaults.baseURL = 'https://18.188.1.175:8443/'
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
