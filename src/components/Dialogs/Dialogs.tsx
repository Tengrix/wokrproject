import React from 'react'
import s from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Message/Message";
import { messagesType, userType} from '../../redux/state'

type stateDialogsType = {
    users:userType[]
    messages:messagesType[]
}

function Dialogs(props:stateDialogsType) {

    let usersData = props.users.map(el=><DialogItems name={el.name} id={el.id}/>)
    let messagesData = props.messages.map(el=> <Message messages={el.messages} id={el.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {usersData}

            </div>
            <div className={s.messages}>

                {messagesData}

            </div>
        </div>
    )
}

export default Dialogs