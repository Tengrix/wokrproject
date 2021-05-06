import {ActionsTypesF} from "./store";

export type UsersType = {
    id:number;
    photoUrl:string
    fullName:string;
    status:string
    followed:boolean
    location:{
        city:string,
        country:string
    }
}
export type InitialStateType = {
    users: UsersType[]
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
    user:UsersType[]
}
let initialState : InitialStateType = {
    users: [] as UsersType[]
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
                ...state, users: [...state.users, ...action.user]
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
export const setUsersAC = (user:UsersType[]):setUserAT => {
    return{
        type:'SET-USERS',
        user
    } as const
}

export default usersReducer