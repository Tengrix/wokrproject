import React from 'react'
import s from "./UsersApiComponent.module.css";
import {UsersPropsType} from "./UsersContainer";

type onPageChangedType = {
    onPageChanged: (page: number) => void
}
type UsersPresentPropsType = UsersPropsType & onPageChangedType
let Users = (props: UsersPresentPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageCount)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(el => {
                return <span className={props.currentPage === el ? s.selectedPage : ''}
                             onClick={() => props.onPageChanged(el)}>{el}</span>
            })}

        </div>
        {
            props.users.map(el => <div key={el.id}>
                    <span>
                        <div>

                            <img className={s.img}
                                 src={el.photoUrl != null ? el.photoUrl : 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'}
                                 alt=""/>

                        </div>
                        <div>
                            {el.followed ? <button onClick={() => {
                                    props.follow(el.id)
                                }}>follow</button> :
                                <button onClick={() => {
                                    props.unfollow(el.id)
                                }}>unfollow</button>
                            }
                        </div>
                    </span>
                <span>
                            <span>
                                <div>{el.name}</div>
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
}
export default Users