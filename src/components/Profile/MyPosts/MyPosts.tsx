import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Post";
import {ProfilePropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps} from "redux-form";
import {reduxForm} from "redux-form";
import { maxLengthCreator, requiredField} from "../../utils/validators/validator";
import {TextArea} from "../../common/FormController/FormController";
let maxLength = maxLengthCreator(99)

function MyPosts(props: ProfilePropsType) {

    let messageData = props.message.map(el => <Posts message={el.message} like={el.likeCount}/>)
    let addPost = (value:any) => {
        props.addPost(value.posts)
    }
    return (
        <div className={s.postsBLock}>
            <h3>My posts</h3>
            <div>
                <PostFormRedux onSubmit={addPost}/>
            </div>
            <div className={s.posts}>
                {messageData}
            </div>
        </div>
    );
}

const PostForm: React.FC<InjectedFormProps<string>> = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name={'posts'} placeholder={'Enter some posts'}
                    validate={[requiredField, maxLength]}
                />
            </div>
            <div>
                <button>add new post</button>
            </div>
        </form>
    )
}
export default MyPosts;
export const PostFormRedux = reduxForm<string>({form: 'posts'})(PostForm)