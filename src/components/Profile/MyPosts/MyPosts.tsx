import React, {ChangeEvent, ChangeEventHandler} from 'react';

import s from './MyPosts.module.css';
import Posts from "./Post/Post";
import {messageType} from "../../../redux/state";


type stateMyPostsType = {
    message: messageType[]
    addNewPost: (post: string) => void;
    newPostText:string;
    changeNewPostCallBack: (newPost: string) => void;
}

function MyPosts(props: stateMyPostsType) {

    let messageData = props.message.map(el => <Posts  message={el.message} like={el.likeCount}/>)
    let addPost = () => {
            props.addNewPost(props.newPostText)
        }
    let addPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewPostCallBack(e.currentTarget.value)
    }
    return (
        <div className={s.postsBLock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={addPostChange}></textarea>
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
