import React from 'react'
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    UsersType,
    followAC,
    unFollowAC,
    setUsersAC
} from "../../redux/users-reducer";
import Users from "./Users";

type MapStateToPropsType = {
    users: UsersType[];
}

type MapDispatchToPropsType = {
    follow: (userId:number) => void;
    unfollow: (userId:number) => void;
    setUser:(user:UsersType[]) => void;
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:AppStateType) :MapStateToPropsType => {
    return {
        users:state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch:Dispatch) : MapDispatchToPropsType => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:number) => {
            dispatch(unFollowAC(userId))
        },
        setUser: (user:UsersType[]) => {
            dispatch(setUsersAC(user))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer