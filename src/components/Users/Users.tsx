import React from 'react'
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import {UsersType} from "../../redux/users-reducer";

type GetUsersType = {
    error:string;
    totalCount:number;
    items:UsersType[]
}
class Users extends React.Component<UsersPropsType>{
        componentDidMount() {
        axios.get<GetUsersType>('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger
            this.props.setUser(response.data.items)
        })
    }
    render() {
        return (
            <div>
                {
                    this.props.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <img className={s.img} src={el.photoUrl != null? el.photoUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'} alt=""/>
                        </div>
                        <div>
                            {el.followed ? <button onClick={() => {
                                    this.props.follow(el.id)
                                }}>follow</button> :
                                <button onClick={() => {
                                    this.props.unfollow(el.id)
                                }}>unfollow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{el.fullName}</div>
                        <div>{el.status}</div>

                        </span>
                        <span>
                        <div>{'el.location.country'}</div>
                            <div>{'el.location.city'}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        );
    }
}
export default Users