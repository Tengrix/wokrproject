import React, {useEffect} from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import LoginForm from "./components/Login/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {initializeAppTC} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {CircularProgress} from "@material-ui/core";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const LoginForm = React.lazy(() => import("./components/Login/LoginForm"))

function App() {
    const dispatch = useDispatch()
    const isInitialized = useSelector<AppStateType, boolean>(state => state.appPage.isInitialized)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }


    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Switch>
                    <Route exact path='/' render={() => {
                        return <Redirect to={'/profile'}/>
                    }}/>
                    <React.Suspense fallback={<Preloader/>}>
                        <Route path='/dialogs' render={() => {
                            return <DialogsContainer/>
                        }}/>
                        <Route path='/profile/:userId?' render={() => {
                            return <ProfileContainer/>
                        }}/>
                        <Route path='/users' render={() => {
                            return <UsersContainer/>
                        }}/>
                        <Route path='/login' render={() => {
                            return <LoginForm/>
                        }}/>
                        {/*<Route path='*' render={() => {*/}
                        {/*    return <div>404 NOT FOUND</div>*/}
                        {/*}}/>*/}
                    </React.Suspense>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
