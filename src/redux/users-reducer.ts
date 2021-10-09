import {CommonResponseType, ResultCodesEnum, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {objectHelper} from "../components/utils/helper";
import {AppStateType, InferActionsType} from "./redux-store";
import {userType} from "./dialog-reducer";

export type UsersPhotoType = {
    small: string;
    large: string;
}
export type filterType = {
    searchingName:string;
    isFriend:null|boolean;
}

export type UsersType = {
    id: number;
    photoUrl: string
    name: string;
    status: string
    followed: boolean
    photos: UsersPhotoType;
}
export type userInitialStateType = {
    users: UsersType[];
    pageCount: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    isFollowing: number[];
    filter:filterType
}

let initialState: userInitialStateType = {
    users: [] as UsersType[],
    pageCount: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowing: [],
    filter:{
        searchingName: '',
        isFriend:null as null|boolean,
    }
}

const usersReducer = (state: userInitialStateType = initialState, action: ActionType): userInitialStateType => {
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
        case 'SEARCH-USER':
            return {
                ...state, filter: action.payload
            }
        // case "IS-FRIEND":
        //     return {
        //         ...state, isFriend: action.friend
        //     }
        default:
            return state;
    }
}

type ActionType = InferActionsType<typeof usersActions>

export const usersActions = {
    follow: (userId: number) => {
        return {
            type: 'FOLLOW',
            userId
        } as const
    },
    unfollow: (userId: number) => {
        return {
            type: 'UNFOLLOW',
            userId
        } as const
    },
    setUser: (users: UsersType[]) => {
        return {
            type: 'SET-USERS',
            users
        } as const
    },
    setCurrentPage: (pageNumber: number) => {
        return {
            type: 'SET-PAGE',
            pageNumber
        } as const
    },
    setTotalUsersCount: (totalUsersCount: number) => {
        return {
            type: 'SET-TOTAL-USERS',
            totalUsersCount
        } as const
    },
    setToggleFetching: (isFetching: boolean) => {
        return {
            type: "SET-TOGGLE-FETCHING",
            isFetching
        } as const
    },
    setToggleFollowing: (isFetching: boolean, id: number) => {
        return {
            type: 'SET-TOGGLE-FOLLOWING',
            id,
            isFetching
        } as const
    },
    setSearchingUser: (filter:filterType) =>{
        return{
            type:'SEARCH-USER',
            payload:filter
        }as const
    },
    // isUserMyFriend: (friend: boolean | null) =>{
    //     return{
    //         type:'IS-FRIEND',
    //         friend
    //     }as const
    // },
}



export const getUser = (currentPage: number, pageCount: number, filter:filterType) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(usersActions.setToggleFetching(true));
            dispatch(usersActions.setCurrentPage(currentPage))
            dispatch(usersActions.setSearchingUser(filter))
            const response = await usersAPI.getUsers(currentPage, pageCount,filter.searchingName, filter.isFriend)
            dispatch(usersActions.setToggleFetching(false))
            dispatch(usersActions.setUser(response.items))
            dispatch(usersActions.setTotalUsersCount(response.totalCount))
        } catch (e) {

        }
    }
}
export const followUnfollow = async (dispatch: Dispatch, userId: number, apiMethod: (userId:number)=> Promise<CommonResponseType>, actionCreator: (userId: number) => ActionType) => {
    dispatch(usersActions.setToggleFollowing(true, userId))
    const response = await apiMethod(userId)
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(usersActions.setToggleFollowing(false, userId))
}

export const FollowFriend = (userId: number) => {
    return async (dispatch: Dispatch) => {
        try {
            await followUnfollow(dispatch, userId, usersAPI.FollowFriends.bind(usersAPI), usersActions.follow)
        } catch (e) {

        }
    }
}
export const UnFollowFriend = (userId: number) => {
    return async (dispatch: Dispatch) => {
        try {
            await followUnfollow(dispatch, userId, usersAPI.UnFollowFriends.bind(usersAPI), usersActions.unfollow)
        } catch (e) {

        }
    }
}
export default usersReducer