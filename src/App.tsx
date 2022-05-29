import React, {useEffect} from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import {Link, Redirect, Route, Switch} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import 'antd/dist/antd.css'
import {Layout, Menu, Breadcrumb, Col, Row} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import LoginForm from "./components/Login/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {initializeAppTC} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {CircularProgress} from "@material-ui/core";
import Headers from "./components/Header/Header";
import s from "./components/Navbar/Navbar.module.css";
import {setUserDataType} from "./redux/auth-reducer";
import {profileActions, ProfileType} from "./redux/profile-reducer";

const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const LoginForm = React.lazy(() => import("./components/Login/LoginForm"))
const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

function App() {
    console.log('Dialogs')
    const dispatch = useDispatch()
    const isInitialized = useSelector<AppStateType, boolean>(state => state.appPage.isInitialized)
    const {login, email} = useSelector<AppStateType, setUserDataType>(state => state.auth.data)
        const profileName = useSelector<AppStateType, string>(state => state.profilePage.profile.fullName)
    useEffect(()=>{
        dispatch(profileActions.updateProfilesName(profileName))
    },[])

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
        <Layout>
            <Headers/>
            <Content style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>{login}</Breadcrumb.Item>
                    <Breadcrumb.Item>{profileName}</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%'}}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
                                <Menu.Item key="1"><Link to='/profile'>Profile</Link></Menu.Item>
                                <Menu.Item key="2"><Link to='/dialogs'>Messages</Link></Menu.Item>
                                <Menu.Item key="3"><Link to='/news'>News</Link></Menu.Item>
                                <Menu.Item key="4"><Link to='/music'>Music</Link></Menu.Item>
                                <Menu.Item key="5"><Link to='/settings'>Settings</Link></Menu.Item>
                                <Menu.Item key="6"><Link to='/music'>Music</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Developers">
                                <Menu.Item key="5"><Link to='/developers'>Users</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<NotificationOutlined/>} title="Friends">
                                <Menu.Item key="9"><Link to='/friends'>Friends</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{padding: '0 24px', minHeight: 280}}>
                        <Switch>
                            <Route exact path='/workproject' render={() => <Redirect to={'/profile'}/>}/>
                            <React.Suspense fallback={<Preloader/>}>
                                <Route path='/dialogs' render={() => <Dialogs/>}/>
                                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                                <Route path='/developers' render={() => <UsersContainer title={'Samurais'}/>}/>
                                <Route path='/login' render={() => <LoginForm/>}/>
                                {/*<Route path='*' render={() => <div>404 NOT FOUND</div>}/>*/}
                            </React.Suspense>
                            <Route path='/news' component={News}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>
                            <Route path='/friends' render={() => <Friends/>}/>
                        </Switch>
                    </Content>
                </Layout>
            </Content>
            <Footer style={{textAlign: 'center'}}>Social Network ©2018 Created by Uakhit Damir</Footer>
        </Layout>
        // <div className="app-wrapper">
        //
        //     <Navbar/>
        //     <div className={'app-wrapper-content'}>
        //         <Switch>
        //             <Route exact path='/' render={() => {
        //                 return <Redirect to={'/profile'}/>
        //             }}/>
        //             <React.Suspense fallback={<Preloader/>}>
        //                 <Route path='/dialogs' render={() => {
        //                     return <Dialogs/>
        //                 }}/>
        //                 <Route path='/profile/:userId?' render={() => {
        //                     return <ProfileContainer/>
        //                 }}/>
        //                 <Route path='/users' render={() => {
        //                     return <UsersContainer title={'Samurais'}/>
        //                 }}/>
        //                 <Route path='/login' render={() => {
        //                     return <LoginForm/>
        //                 }}/>
        //
        //                 {/*<Route path='*' render={() => {*/}
        //                 {/*    return <div>404 NOT FOUND</div>*/}
        //                 {/*}}/>*/}
        //             </React.Suspense>
        //             <Route path='/news' component={News}/>
        //             <Route path='/music' component={Music}/>
        //             <Route path='/settings' component={Settings}/>
        //             <Route path='/friends' render={() => <Friends/>}/>
        //         </Switch>
        //     </div>
        // </div>
    );
}

export default App;
