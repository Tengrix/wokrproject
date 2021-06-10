import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

function Dialogs(props: DialogsPropsType) {
    let state = props.dialogPage

    let usersData = state.users.map(el => <DialogItems
        key={el.id}
        name={el.name}
        id={el.id}
    />)
    let messagesData = state.messages.map(el => <Message
        key={el.id}
        messages={el.messages}
        id={el.id}
    />)
    let createMessageBody = state.newMessageBody
    let onNewMessageClick = () => {
        props.sendMessage()
    }
    let onSendMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatedMessageBody(e.currentTarget.value)
    }
    return (
        <div className={s.dialogs}>
            <div>

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