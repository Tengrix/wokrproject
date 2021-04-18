import React, {ChangeEvent} from 'react';

import s from './MyPosts.module.css';
import Posts from "./Post/Post";
import { messageType} from "../../../redux/store";
import {ActionsTypesF, addPostAC, changeNewTextAC} from "../../../redux/ActionTypes";


type stateMyPostsType = {
    message: messageType[]
    newPostText: string;
    dispatch: (action: ActionsTypesF) => void;
}


function MyPosts(props: stateMyPostsType) {

    let messageData = props.message.map(el => <Posts message={el.message} like={el.likeCount}/>)
    let addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
    }
    let addPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.dispatch(changeNewTextAC(e.currentTarget.value))
    }
    return (
        <div className={s.postsBLock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={addPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>add new post</button>
                </div>
            </div>
            <div className={s.posts}>

                {messageData}

            </div>
        </div>
    );
}

export default MyPosts;
