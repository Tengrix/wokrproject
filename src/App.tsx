import React from 'react';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import store, {StoreType} from './redux/store'
import Friends from "./components/Friends/Friends";

type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/dialogs' render={() => <Dialogs users={store._state.dialogsPage.users}
                                                                  messages={store._state.dialogsPage.messages}
                                                                  dispatch={store.dispatch.bind(store)}
                                                                  newMessageBody={store._state.dialogsPage.newMessageBody}
                    />}/>
                    <Route path='/profile' render={() => <Profile message={props.store._state.profilePage.message}
                                                                  dispatch={store.dispatch.bind(store)}
                                                                  newPostText={props.store._state.profilePage.newPostText}

                    />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
