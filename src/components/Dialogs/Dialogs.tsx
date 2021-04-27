import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


function Dialogs(props: DialogsPropsType) {

    let usersData = props.users.map(el => <DialogItems
        name={el.name}
        id={el.id}
    />)
    let messagesData = props.messages.map(el => <Message
        messages={el.messages}
        id={el.id}
    />)
    let createMessageBody = props.newMessageBody
    let onNewMessageClick = () => {
        props.sendMessage()
    }
    let onSendMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatedMessageBody(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {usersData}

            </div>
            <div className={s.messages}>

                <div> {messagesData}</div>
                <div>
                    <div><textarea
                        value={createMessageBody}
                        placeholder={'Enter your message'}
                        onChange={onSendMessageChange}
                    ></textarea>
                    </div>
                    <div>
                        <button onClick={onNewMessageClick}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs