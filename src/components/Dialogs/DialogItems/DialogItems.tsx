import React from 'react'
import {NavLink} from 'react-router-dom';
import s from "./DialogItems.module.css";

type DialogItemsTypes = {
    name:string
    id:string
}

function DialogItems(props:DialogItemsTypes) {

    return (
        <div>
            <div className={`${s.dialog} ${s.active}`}>
                <img className={s.img} src="https://media.vanityfair.com/photos/5c5325d3cec32271820c6fc1/master/w_1600%2Cc_limit/ava-max-interview.jpg" alt=""/>
                <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>
            </div>

        </div>
    )
}

export default DialogItems