import React, {ChangeEvent, LegacyRef} from 'react'
import s from "./Message.module.css";

type setMessageType = {
    messages: string;
    id: number;
}

function Message(props: setMessageType) {
    let newPost = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        alert(newPost.current?.value)
    }
    return (
        <div>
            <div className={s.message}>
                <div className={s.chat}>
                    {props.messages}
                </div>
                <textarea ref={newPost}></textarea>
                <button onClick={addPost}>add</button>
            </div>
        </div>
    )
}

export default Message