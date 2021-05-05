import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogData = [
    { id: 1, name: 'Andriy'},
    { id: 2, name: 'Oksana'},
];

const messageData = [
    { id: 1, message: 'One message'},
    { id: 2, message: 'Another message'},
];

const postData = [
    { message: 'This is my first post', likesCounter: 12},
    { message: 'I\'m fine', likesCounter: 27},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={postData} dialog={dialogData} message={messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
