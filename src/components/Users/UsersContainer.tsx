import React from 'react'

import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    UsersType,
    followAC,
    unFollowAC,
    setUsersAC, setPageAC, setTotalUsersCountAC
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
type GetUsersType = {
    error: string;
    totalCount: number;
    items: UsersType[]
}
type MapStateToPropsType = {
    users: UsersType[];
    pageCount: number
    totalUsersCount:number
    currentPage: number
}

type MapDispatchToPropsType = {
    follow: (userId:number) => void;
    unfollow: (userId:number) => void;
    setUser:(users:UsersType[]) => void;
    setCurrentPage:(pageNumber:number) => void;
    setTotalUsersCount:(totalCount:number) => void;
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
class UsersAPIComponent extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageCount}`).then(response => {
            this.props.setUser(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageCount}`).then(response => {
            this.props.setUser(response.data.items)
        })
    }

    render() {
        return <Users currentPage={this.props.currentPage}
                      follow={this.props.follow}
                      pageCount={this.props.pageCount}
                      setCurrentPage={this.props.setCurrentPage}
                      setTotalUsersCount={this.props.setTotalUsersCount}
                      setUser={this.props.setUser}
                      totalUsersCount={this.props.totalUsersCount}
                      unfollow={this.props.unfollow}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}

        />
    }
}
let mapStateToProps = (state:AppStateType) :MapStateToPropsType => {
    return {
        users:state.usersPage.users,
        pageCount:state.usersPage.pageCount,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        setUser: (users:UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageNumber:number) =>{
            dispatch(setPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount) =>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer