import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validator";
import {TextArea} from "../../common/FormController/FormController";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {messageType, profileActions} from "../../../redux/profile-reducer";

let maxLength = maxLengthCreator(99)

const MyPosts = React.memo((props) => {
    const dispatch = useDispatch()
    const message = useSelector<AppStateType, messageType[]>(state => state.profilePage.message)
    let messageData = message.map((el,i) => <Posts key={i} message={el.message} like={el.likeCount}/>)
    let addPost = (value:any) => {
        dispatch(profileActions.addPost(value.posts))
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
});

const PostForm: React.FC<InjectedFormProps<string>> = React.memo(({handleSubmit}) => {
    return (
        <form action="" onSubmit={handleSubmit}>
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
})
export default MyPosts;
export const PostFormRedux = reduxForm<string>({form: 'posts'})(PostForm)