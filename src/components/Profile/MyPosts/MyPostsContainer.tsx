import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {addPostAC, changeNewTextAC, messageType} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    message: messageType[];
    newPostText: string;
}

type MapDispatchToPropsType = {
    changeNewText: (text: string) => void;
    addPost:() => void;
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state:AppStateType): MapStateToPropsType => {
    return{
        message: state.profilePage.message,
        newPostText: state.profilePage.newPostText

    }
}
const mapDispatchToProps = (dispatch:Dispatch) :MapDispatchToPropsType => {
    return{
        changeNewText: (text:string) => {
            dispatch(changeNewTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
