import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {addPost, messageType} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    message: messageType[];
}

type MapDispatchToPropsType = {
    addPost:(posts:string) => void;
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state:AppStateType): MapStateToPropsType => {
    return{
        message: state.profilePage.message,
    }
}
const mapDispatchToProps = (dispatch:Dispatch) :MapDispatchToPropsType => {
    return{
        addPost: (posts:string) => {
            dispatch(addPost(posts))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
