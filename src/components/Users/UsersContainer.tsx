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
    getIsFollowing, getIsSearchingName,
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
    searchingName:string
}

type MapDispatchToPropsType = {
    getUser: (currentPage: number, pageCount: number, term:string) => void
    FollowFriend: (id: number) => void;
    UnFollowFriend: (id: number) => void;
    onFilterChanged: (term:string) => void;
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsType, UsersPropsType> {
    componentDidMount() {
        const {getUser,currentPage,pageCount} = this.props
        getUser(currentPage, pageCount, '')
    }

    onPageChanged = (pageNumber: number) => {
        const {getUser,pageCount,searchingName} = this.props
        getUser(pageNumber,pageCount,searchingName)
    }

    onFilterChanged = (term: string) =>{
        const {getUser,pageCount} = this.props
        getUser(1,pageCount,term)
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
                   onFilterChanged={this.onFilterChanged}
                   getUser={this.props.getUser}
                   searchingName={this.props.searchingName}/>
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
        isFollowing: getIsFollowing(state),
        searchingName:getIsSearchingName(state)
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