import {Dispatch} from "redux";
import {profileAPI, ProfilesType, usersAPI} from "../api/api";
import {AppStateType} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";
import {Redirect} from "react-router-dom";


type ActionsTypesF =
    ReturnType<typeof addPost> |
    ReturnType<typeof setProfile> |
    ReturnType<typeof setStatus> |
    ReturnType<typeof deletePost> |
    ReturnType<typeof isOwner> |
    ReturnType<typeof successSavePhoto>|
    ReturnType<typeof setError>
export const ADD_POST = 'ADD-POST'

export type messageType = {
    message: string;
    likeCount: number;
    id: number;
}

export type ProfilePhotoType = {
    small: string
    large: string
}
type isOwnerType = {
    type: 'IS-OWNER'
    value: boolean;
}
type DelPostType = {
    type: 'DEL-POST'
    id: number;
}
type addPostType = {
    type: 'ADD-POST'
    posts: string
}
type setProfile = {
    type: 'SET-PROFILE'
    profile: ProfileType
}
type setStatus = {
    type: 'SET-STATUS'
    status: string
}
type savePhotoType = {
    type: 'SAVE-PHOTO'
    photos: ProfilePhotoType;
}
type setErrorType = {
    type: 'SET-ERROR'
    error: string;
}
export type ProfileType = {
    aboutMe: string
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: {
        github: string;
        vk: string;
        facebook: string;
        instagram: string;
        twitter: string;
        website: string;
        youtube: string;
        mainLink: string;
    }
    photos: ProfilePhotoType;
}

export type InitialStateType = {
    message: messageType[];
    profile: ProfileType;
    status: string;
    isOwner: boolean;
    error:string;
}

let initialState: InitialStateType = {
    message: [
        {id: 1, message: 'Hi, how are you?', likeCount: 22},
        {id: 2, message: 'It is my first post', likeCount: 11},

    ] as messageType[],
    profile: {
        aboutMe: '',
        userId: 16786,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: 'Uakhit Damir',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: 'damir.gst',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            large: '',
            small: ''
        }
    },
    isOwner: false,
    status: '',
    error:''
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypesF): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
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
                ...state, message: state.message.filter(el => el.id !== action.id)
            }
        case "IS-OWNER":
            return {
                ...state, isOwner: action.value
            }
        case "SAVE-PHOTO":
            debugger
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        case "SET-ERROR":
            return {
                ...state, error:action.error
            }
        default:
            return state;
    }
}
export const addPost = (posts: string): addPostType => {
    return {
        type: ADD_POST,
        posts
    } as const
}
export const setProfile = (profile: ProfileType): setProfile => {
    return {
        type: 'SET-PROFILE',
        profile
    } as const
}
export const setStatus = (status: string): setStatus => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}
export const deletePost = (id: number): DelPostType => {
    return {
        type: 'DEL-POST',
        id
    } as const
}
export const isOwner = (value: boolean): isOwnerType => {
    return {
        type: 'IS-OWNER',
        value
    } as const
}
export const successSavePhoto = (photos: ProfilePhotoType): savePhotoType => {
    return {
        type: 'SAVE-PHOTO',
        photos
    } as const
}
export const setError = (error:string): setErrorType => {
    return {
        type: 'SET-ERROR',
        error
    } as const
}
export const GetProfile = (userId: number) => {
    return async (dispatch: Dispatch) => {
        const response = await profileAPI.getProfile(userId)
        dispatch(setProfile(response.data))
    }
}
export const getProfileStatus = (userId: number) => {
    return async (dispatch: Dispatch) => {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }
}
export const updateProfileStatus = (status: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        }catch (e) {
            // return <Redirect to={'/404'}/>
        }

    }
}
export const saveUserProfile = (profile: ProfileType) => async (dispatch: ThunkDispatch<any, any, any>, getState: () => AppStateType) => {

    let userId = getState().auth.data.id
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        if (userId != null) {
            await dispatch(GetProfile(userId))
        }
    }else{
        dispatch(setError(response.data.messages[0]))
        return Promise.reject(response.data.messages[0])
    }
}

export const saveUserPhoto = (img: File) => async (dispatch: Dispatch) => {

    const response = await profileAPI.savePhoto(img)
    if (response.data.resultCode === 0) {
        dispatch(successSavePhoto(response.data.data.photos))
    }
}
export default profileReducer