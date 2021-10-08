import React from 'react'
import s from "./Message.module.css";

type setMessageType = {
    messages: string;
    id: number;
}

const Message = React.memo((props: setMessageType) => {
    return (
        <div>
            <div>
                <div>
                    {props.messages}
                </div>
            </div>
        </div>
    )
})

export default Message