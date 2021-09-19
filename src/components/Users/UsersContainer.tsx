import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    FollowFriend,
    getUser,
    UnFollowFriend,
    UsersType
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "react-router";
import {withAuthRedirectComponent} from "../../hoc/WithAuthRedirectComponent";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowing,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "./users-selectors";

export type MapStateToPropsType = {
    users: UsersType[];
    pageCount: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: number[]
}

type MapDispatchToPropsType = {
    getUser: (currentPage: number, pageCount: number) => void
    FollowFriend: (id: number) => void;
    UnFollowFriend: (id: number) => void;
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsType, UsersPropsType> {
    componentDidMount() {
        const {getUser,currentPage,pageCount} = this.props
        getUser(currentPage, pageCount)
    }

    onPageChanged = (pageNumber: number) => {
        const {getUser,pageCount} = this.props
        getUser(pageNumber,pageCount)
    }

    render() {
        return <div>
            {this.props.isFetching ? <Preloader/> : null}
            <Users currentPage={this.props.currentPage}
                   pageCount={this.props.pageCount}
                   totalUsersCount={this.props.totalUsersCount}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   isFetching={this.props.isFetching}
                   isFollowing={this.props.isFollowing}
                   FollowFriend={this.props.FollowFriend}
                   UnFollowFriend={this.props.UnFollowFriend}
                   getUser={this.props.getUser}/>
        </div>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageCount: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state)
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        FollowFriend,
        UnFollowFriend,
        getUser
    }),
    withRouter, withAuthRedirectComponent)
(UsersAPIComponent)