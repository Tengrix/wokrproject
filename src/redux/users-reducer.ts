import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {objectHelper} from "../components/utils/helper";

type ActionsTypesF =
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUser> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof setToggleFetching> |
    ReturnType<typeof setToggleFollowing>

export type UsersPhotoType = {
    small: string;
    large: string;
}

export type UsersType = {
    id: number;
    photoUrl: string
    name: string;
    status: string
    followed: boolean
    photos: UsersPhotoType;
}
export type InitialStateType = {
    users: UsersType[]
    pageCount: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: number[]
}
export type followAT = {
    type: 'FOLLOW'
    userId: number
}
export type unfollowAT = {
    type: 'UNFOLLOW'
    userId: number
}
export type followUnfollow = followAT | unfollowAT
export type setUserAT = {
    type: 'SET-USERS'
    users: UsersType[]
}
export type setPageAT = {
    type: 'SET-PAGE'
    pageNumber: number
}
export type setTotalUsersCountAT = {
    type: 'SET-TOTAL-USERS'
    totalUsersCount: number
}
export type setToggleFetching = {
    type: 'SET-TOGGLE-FETCHING'
    isFetching: boolean
}
export type setToggleFollowing = {
    type: 'SET-TOGGLE-FOLLOWING'
    id: number
    isFetching: boolean;
}
let initialState: InitialStateType = {
    users: [] as UsersType[],
    pageCount: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowing: []
}

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypesF): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: objectHelper(state.users, action.userId,{followed:true})
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: objectHelper(state.users, action.userId,{followed:false})
            }
        case "SET-USERS":
            return {
                ...state, users: action.users
            }
        case 'SET-PAGE':
            return {
                ...state, currentPage: action.pageNumber
            }
        case "SET-TOTAL-USERS":
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case "SET-TOGGLE-FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "SET-TOGGLE-FOLLOWING":
            return {
                ...state,
                isFollowing: action.isFetching ? [...state.isFollowing, action.id] :
                    state.isFollowing.filter(el => el != action.id)
            }
        default:
            return state;
    }
}
export const follow = (userId: number): followAT => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export const unfollow = (userId: number): unfollowAT => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}
export const setUser = (users: UsersType[]): setUserAT => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const setCurrentPage = (pageNumber: number): setPageAT => {
    return {
        type: 'SET-PAGE',
        pageNumber
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountAT => {
    return {
        type: 'SET-TOTAL-USERS',
        totalUsersCount
    } as const
}
export const setToggleFetching = (isFetching: boolean): setToggleFetching => {
    return {
        type: "SET-TOGGLE-FETCHING",
        isFetching
    } as const
}
export const setToggleFollowing = (isFetching: boolean, id: number): setToggleFollowing => {
    return {
        type: 'SET-TOGGLE-FOLLOWING',
        id,
        isFetching
    } as const
}

export const getUser = (currentPage: number, pageCount: number) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(setToggleFetching(true));
            dispatch(setCurrentPage(currentPage))
            const response = await usersAPI.getUsers(currentPage, pageCount)
            dispatch(setToggleFetching(false))
            dispatch(setUser(response.items))
            dispatch(setTotalUsersCount(response.totalCount))
        } catch (e) {

        }
    }

}

const followUnfollow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: (userId: number) => followUnfollow) => {
    dispatch(setToggleFollowing(true, userId))
    const response = await apiMethod(userId)
    if (response.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(setToggleFollowing(false, userId))
}

export const FollowFriend = (userId: number) => {
    return async (dispatch: Dispatch) => {
        try {
            await followUnfollow(dispatch, userId, usersAPI.FollowFriends.bind(usersAPI), follow)
        } catch (e) {

        }

    }
}
export const UnFollowFriend = (userId: number) => {
    return async (dispatch: Dispatch) => {
        try {
            await followUnfollow(dispatch, userId, usersAPI.UnFollowFriends.bind(usersAPI), unfollow)
        } catch (e) {

        }
    }
}
export default usersReducer