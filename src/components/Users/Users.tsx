import React, {useEffect} from 'react'
import Pagination from "../common/Paginator/Pagination";
import User from "./User";
import SearchUsers from "./SearchWithHookForm";
import {useDispatch, useSelector} from "react-redux";
import {
    filterType,
    FollowFriend,
    getUser,
    UnFollowFriend,
    userInitialStateType,
    usersActions
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {useHistory} from "react-router-dom";
import * as queryString from "querystring";
import SearchWithFormik from "./SearchWithFormik";


type UsersType = {
    title: string
}
const Users = React.memo((props: UsersType) => {
    const {
        totalUsersCount,
        pageCount,
        currentPage,
        isFollowing,
        filter,
        users
    } = useSelector<AppStateType, userInitialStateType>(state => state.usersPage)
    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1))
        let actualPage = currentPage
        let actualFilter = filter
        if (!!parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualFilter = {...actualFilter, searchingName:parsed.term as string}
        switch (parsed.friend) {
            case 'null':
                actualFilter = {...actualFilter, isFriend:null}
                break;
            case 'false':
                actualFilter = {...actualFilter, isFriend:false}
                break;
            case 'true':
                actualFilter = {...actualFilter, isFriend:true}
                break;
        }
        dispatch(getUser(actualPage, pageCount, actualFilter))
    }, [])
    useEffect(() => {
        history.push({
            pathname: '/developers',
            search: `?term=${filter.searchingName}&friend=${filter.isFriend}&page=${currentPage}`
        })
    }, [filter, currentPage])

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUser(pageNumber, pageCount, filter))
    }

    const onFilterChanged = (filter:filterType) => {
        dispatch(getUser(currentPage, pageCount,filter))
    }

    const followFriend = (userId: number) => {
        dispatch(FollowFriend(userId))
    }
    const unFollowFriend = (userId: number) => {
        dispatch(UnFollowFriend(userId))
    }

    return <div>
        <h1>{props.title}</h1>
        <span>
           <SearchWithFormik onFilterChanged={onFilterChanged}/>
        </span>

        <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            totalItemsCount={totalUsersCount}
            onPageChanged={onPageChanged}
            portionSize={10}
        />

        {
            users.map(el => <User
                    key={el.id}
                    user={el}
                    FollowFriend={followFriend}
                    UnFollowFriend={unFollowFriend}
                    isFollowing={isFollowing}
                />
            )
        }
    </div>
})
export default Users