import React from 'react'
import s from "./UsersApiComponent.module.css";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import userPhoto from './../../Pics/51f6fb256629fc755b8870c801092942.png'

type UserType = {
    user: UsersType
    FollowFriend: (id: number) => void,
    UnFollowFriend: (id: number) => void,
    isFollowing: number[]
}

let User = ({user, UnFollowFriend, FollowFriend, isFollowing}: UserType) => {

    return <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img className={s.img}
                                     src={user.photos.small != null ? user.photos.small : userPhoto}
                                     alt=""/>
                            </NavLink>
                        </div>
                        <div>

                            {user.followed ?
                                <button disabled={isFollowing.some(idx => idx == user.id)} onClick={() => {
                                    UnFollowFriend(user.id)
                                }}>unfollow</button>
                                : <button disabled={isFollowing.some(id => id == id)} onClick={() => {
                                    FollowFriend(user.id)
                                }}>follow</button>
                            }
                        </div>
                    </span>
        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                    </span>
    </div>
}
export default User