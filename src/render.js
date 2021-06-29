import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { addPost, addMessage, updateNewPostText } from './redux/state';
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
          <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
