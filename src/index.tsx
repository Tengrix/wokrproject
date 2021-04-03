import state, {subscribe} from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewPost, changeNewPostCallBack, stateRootType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = () =>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addNewPost={addNewPost}
                 changeNewPostCallBack={changeNewPostCallBack}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree();
subscribe(rerenderEntireTree)

