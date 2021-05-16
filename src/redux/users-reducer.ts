import {ActionsTypesF} from "./store";

export type UsersType = {
    id:number;
    photoUrl:string
    name:string;
    status:string
    followed:boolean
    location:{
        city:string,
        country:string
    }
}
export type InitialStateType = {
    users: UsersType[]
    pageCount:number
    totalUsersCount: number
    currentPage: number
}
export type followAT = {
    type:'FOLLOW'
    userId:number
}
export type unfollowAT = {
    type:'UNFOLLOW'
    userId:number
}
export type setUserAT = {
    type:'SET-USERS'
    users:UsersType[]
}
export type setPageAT = {
    type: 'SET-PAGE'
    pageNumber: number
}
export type setTotalUsersCountAT = {
    type: 'SET-TOTAL-USERS'
    totalUsersCount:number
}
let initialState : InitialStateType = {
    users: [] as UsersType[],
    pageCount: 8,
    totalUsersCount: 0,
    currentPage: 2
}

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypesF): InitialStateType => {
    switch (action.type){
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed:false}:el)}
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed:true}:el)
            }
        case "SET-USERS":
            return {
                ...state, users:action.users
            }
        case 'SET-PAGE':
            return {
                ...state, currentPage:action.pageNumber
            }
        case "SET-TOTAL-USERS":
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        default:
            return state;
    }
}
export const followAC = (userId:number):followAT => {
    return {
        type:'FOLLOW',
        userId
    } as const
}
export const unFollowAC = (userId:number):unfollowAT => {
    return {
        type:'UNFOLLOW',
        userId
    } as const
}
export const setUsersAC = (users:UsersType[]):setUserAT => {
    return{
        type:'SET-USERS',
        users
    } as const
}
export const setPageAC = (pageNumber:number):setPageAT =>{
    return {
        type:'SET-PAGE',
        pageNumber
    } as const
}
export const setTotalUsersCountAC = (totalUsersCount:number):setTotalUsersCountAT =>{
    return {
        type:'SET-TOTAL-USERS',
        totalUsersCount
    } as const
}

export default usersReducer