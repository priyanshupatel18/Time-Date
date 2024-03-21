import React from 'react';
import  ReactDOM from 'react-dom';
import './index.css';

const name = 'priyanshu'
let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

ReactDOM.render(
<>
  <h1> Hello, My Name is {name}</h1>
  <p>Current Date is = {date} </p>
  <p>Current Time is = {time} </p>
</>,

document.getElementById('root')
);



