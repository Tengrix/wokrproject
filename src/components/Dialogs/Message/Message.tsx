import React, {ChangeEvent, LegacyRef} from 'react'
import s from "./Message.module.css";

type setMessageType = {
    messages: string;
    id: number;
}

function Message(props: setMessageType) {
    return (
        <div>
            <div className={s.message}>
                <div className={s.chat}>
                    {props.messages}
                </div>
            </div>
        </div>
    )
}

export default Message