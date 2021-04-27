import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Post";
import {ProfilePropsType} from "./MyPostsContainer";


function MyPosts(props: ProfilePropsType) {

    let messageData = props.message.map(el => <Posts message={el.message} like={el.likeCount}/>)
    let addPost = () => {
        props.addPost()
    }
    let addPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewText(e.currentTarget.value)
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
