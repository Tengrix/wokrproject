import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {messageType} from "../../redux/state";

type stateProfileType ={
    message:messageType[]
    newPostText:string;
    addNewPost:(post:string) => void;
    changeNewPostCallBack:(newPost:string) => void;

}
function Profile(props:stateProfileType) {
    return (
        <div>
            <ProfileInfo pic={'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'}/>
            <MyPosts message={props.message}
                     addNewPost={props.addNewPost}
                     newPostText={props.newPostText}
                     changeNewPostCallBack={props.changeNewPostCallBack}/>
        </div>
    );
}

export default Profile;
