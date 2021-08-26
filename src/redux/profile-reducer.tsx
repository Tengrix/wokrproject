import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

type ActionsTypesF =
    ReturnType<typeof addPost> |
    ReturnType<typeof setProfile>|
    ReturnType<typeof setStatus>|
    ReturnType<typeof deletePost>
export const ADD_POST = 'ADD-POST'

export type messageType = {
    message: string;
    likeCount: number;
    id: number;
}

type ProfilePhotoType = {
    small:string
    large:string
}
type addPostType = {
    type: 'ADD-POST'
    posts:string
}
type setProfile = {
    type: 'SET-PROFILE'
    profile:ProfileType
}
type setStatus = {
    type: 'SET-STATUS'
    status: string
}

export type ProfileType = {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: {
        github:string;
        vk: string;
        facebook: string;
        instagram: string;
        twitter: string;
        website:string;
        youtube: string;
        mainLink: string;
    }
    photos:ProfilePhotoType
}

export type InitialStateType = {
    message: messageType[];
    profile: ProfileType | null;
    status:string;
}

let initialState : InitialStateType = {
    message: [
        {id: 1, message: 'Hi, how are you?', likeCount: 22},
        {id: 2, message: 'It is my first post', likeCount: 11},

    ]as messageType[] ,
    profile: null,
    status:''
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypesF): InitialStateType => {
    switch (action.type){
        case ADD_POST:{
            const newPost: messageType = {
                id: 3,
                message: action.posts,
                likeCount: 0
            };
            return {
                ...state,
                message: [...state.message, newPost],
            };
        }
        case "SET-PROFILE":
            return {
                ...state, profile: action.profile
            }
        case "SET-STATUS":
            return {
                ...state, status: action.status
            }
        case "DEL-POST":
            return {
                ...state, message:state.message.filter(el=>el.id !== action.id)
            }
        default:
            return state;
    }
}
export const addPost = (posts:string):addPostType => {
    return {
        type: ADD_POST,
        posts
    } as const
}
export const setProfile = (profile:ProfileType):setProfile => {
    return {
        type: 'SET-PROFILE',
        profile
    } as const
}
export const setStatus = (status:string):setStatus => {
    return{
        type: 'SET-STATUS',
        status
    } as const
}
export const deletePost = (id:number) => {
    return{
        type: 'DEL-POST',
        id
    } as const
}
export const GetProfile=(userId:number)=>{
    return async (dispatch:Dispatch) =>{
        const response = await usersAPI.getProfile(userId)
           dispatch(setProfile(response.data))
    }
}
export const getProfileStatus = (userId:number) => {
    return async (dispatch:Dispatch) => {
        const response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data))
    }
}
export const updateProfileStatus = (status:string) => {
    return async (dispatch:Dispatch) => {
        const response = await profileAPI.updateStatus(status)
            if(response.data.resultCode===0){
                dispatch(setStatus(status))
            }
    }
}
export default profileReducer