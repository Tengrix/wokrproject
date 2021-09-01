import React from 'react'
import {UsersPropsType} from "./UsersContainer";
import Pagination from "../common/Paginator/Pagination";
import User from "./User";

type onPageChangeType = {
    onPageChanged: (page: number) => void
}
type UsersType = UsersPropsType & onPageChangeType
let Users = (props: UsersType) => {

    return <div>
        <Pagination
            currentPage={props.currentPage}
            pageCount={props.pageCount}
            totalItemsCount={props.totalUsersCount}
            onPageChanged={props.onPageChanged}
            portionSize={10}
        />
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