import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    UsersType,
    follow,
    unfollow,
    setUser,
    setCurrentPage,
    setTotalUsersCount, setToggleFetching
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
type GetUsersType = {
    error: string;
    totalCount: number;
    items: UsersType[]
}
export type MapStateToPropsType = {
    users: UsersType[];
    pageCount: number
    totalUsersCount:number
    currentPage: number
    isFetching: boolean
}

type MapDispatchToPropsType = {
    follow: (userId:number) => void;
    unfollow: (userId:number) => void;
    setUser:(users:UsersType[]) => void;
    setCurrentPage:(pageNumber:number) => void;
    setTotalUsersCount:(totalCount:number) => void;
    setToggleFetching:(isFetching:boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
class UsersAPIComponent extends React.Component<UsersPropsType, UsersPropsType> {
    componentDidMount() {
        this.props.setToggleFetching(true)
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageCount}`).then(response => {
            this.props.setToggleFetching(false)
            this.props.setUser(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleFetching(true)
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageCount}`).then(response => {
            this.props.setToggleFetching(false)
            this.props.setUser(response.data.items)
        })
    }

    render() {
        return <div>
            {this.props.isFetching? <Preloader/>:null}
        <Users currentPage={this.props.currentPage}
                      follow={this.props.follow}
                      pageCount={this.props.pageCount}
                      setCurrentPage={this.props.setCurrentPage}
                      setTotalUsersCount={this.props.setTotalUsersCount}
                      setUser={this.props.setUser}
                      totalUsersCount={this.props.totalUsersCount}
                      unfollow={this.props.unfollow}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      isFetching={this.props.isFetching}
                      setToggleFetching={this.props.setToggleFetching}/>
        </div>
    }
}
let mapStateToProps = (state:AppStateType) :MapStateToPropsType => {
    return {
        users:state.usersPage.users,
        pageCount:state.usersPage.pageCount,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
const UsersContainer = connect(mapStateToProps, { follow,unfollow, setUser, setCurrentPage, setTotalUsersCount, setToggleFetching })(UsersAPIComponent);

export default UsersContainer