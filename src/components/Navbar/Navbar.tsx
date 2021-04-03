import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

type NavbarType = {

}
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.itemFriends}>
                <NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink>
            </div>
            <span className={s.itemFriends}>
                <NavLink to='/Abay' activeClassName={s.activeLink}> Abay </NavLink>
            </span>
            <span className={s.itemFriends}>
                <NavLink to='/Salta' activeClassName={s.activeLink}> Salta </NavLink>
            </span>
            <span className={s.itemFriends}>
                <NavLink to='/Samal' activeClassName={s.activeLink}> Samal </NavLink>
            </span>
        </nav>
    );
}

export default Navbar;
