import React from 'react'
import { UsersPropsType} from "./UsersContainer";
import Pagination from "../common/Paginator/Pagination";
import User from "./User";
import SearchUsers from "./search-users";
import {useDispatch} from "react-redux";
import {usersActions} from "../../redux/users-reducer";

type onPageChangeType = {
    onPageChanged: (page: number) => void
    onFilterChanged: (term:string) => void;
}
type UsersType = UsersPropsType & onPageChangeType
let Users = (props: UsersType) => {
    const dispatch = useDispatch()
    const searchUsers = (term:string) =>{
        dispatch(usersActions.setSearchingUser(term))
        props.onFilterChanged(term)
    }
    return <div>
        <Pagination
            currentPage={props.currentPage}
            pageCount={props.pageCount}
            totalItemsCount={props.totalUsersCount}
            onPageChanged={props.onPageChanged}
            portionSize={10}
        />
        <SearchUsers searchUsers={searchUsers}/>
        {
            props.users.map(el =>  <User
                key={el.id}
                user={el}
                FollowFriend={props.FollowFriend}
                UnFollowFriend={props.UnFollowFriend}
                isFollowing={props.isFollowing}
                />
            )
        }
    </div>
}
export default Users