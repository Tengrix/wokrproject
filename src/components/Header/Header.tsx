import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthLogOut, AuthMe, setUserDataType} from "../../redux/auth-reducer";

const Header = React.memo(() => {
  const dispatch = useDispatch()
  const {isAuth,login} = useSelector<AppStateType, setUserDataType>(state => state.auth.data)

  useEffect(()=>{
    dispatch(AuthMe())
  },[])

  const logout = () => {
    dispatch(AuthLogOut())
  }

  return (
    <header className={s.header}>
      <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt=""/>
        <div className={s.loginBlock}>
            {isAuth ?
                <div>{login} - <button onClick={logout}> Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
  );
})
export default Header;
