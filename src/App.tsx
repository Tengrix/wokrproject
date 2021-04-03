import React, {RefObject} from 'react';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {stateRootType} from './redux/state'
import Friends from "./components/Friends/Friends";

type appState = {
    state:stateRootType;
    addNewPost:(post:string) => void;
    changeNewPostCallBack:(newPost:string) => void;
}

function App(props:appState) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/dialogs' render={()=><Dialogs users={props.state.dialogsPage.users}
                                                                messages={props.state.dialogsPage.messages}
                    />}/>
                    <Route path='/profile' render={()=><Profile message={props.state.profilePage.message}
                                                                addNewPost={props.addNewPost}
                                                                newPostText={props.state.profilePage.newPostText}
                                                                changeNewPostCallBack={props.changeNewPostCallBack}
                    />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends' render={()=><Friends/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
