import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import s from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthLogOut, AuthMe, setUserDataType} from "../../redux/auth-reducer";
import {Avatar, Button, Col, Image, Layout, Menu, Row} from "antd";
import {AntDesignOutlined, UserOutlined} from "@ant-design/icons";
import userPhoto from "../../Pics/51f6fb256629fc755b8870c801092942.png";
import {ProfilePhotoType} from "../../redux/profile-reducer";

const Headers = React.memo(() => {
    const dispatch = useDispatch()
    const {isAuth, login} = useSelector<AppStateType, setUserDataType>(state => state.auth.data)
    const photos = useSelector<AppStateType, ProfilePhotoType>(state => state.profilePage.profile.photos)
    useEffect(() => {
        dispatch(AuthMe())
    }, [])

    const logout = () => {
        dispatch(AuthLogOut())
    }
    const {Header} = Layout
    return (
        <Header className={'header'}>
            <div>
                <Row>
                    <Col span={16}>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1"><Link to='/developers'>Developers</Link></Menu.Item>
                        </Menu>
                    </Col>
                    {isAuth ?
                        <>
                            <Col span={1}>
                                <Avatar src={<Image src={photos.small != null ? photos.small : userPhoto}/>}
                                        style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                            </Col>
                            <Col span={5}>
                                <Button onClick={logout}> Log out</Button>
                            </Col>
                        </>
                        :
                        <Col span={6}>
                            <Button><Link to={'/login'}>Login</Link></Button>
                        </Col>}
                </Row>
            </div>
        </Header>
    );
})
export default Headers;
