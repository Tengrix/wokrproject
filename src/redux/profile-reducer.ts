import {Dispatch} from "redux";
import {profileAPI, ResultCodesEnum} from "../api/api";
import {AppStateType, InferActionsType} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";


export type messageType = {
    message: string;
    likeCount: number;
    id: number;
}

export type ProfilePhotoType = {
    small: string
    large: string
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

export type profileInitialStateType = {
    message: messageType[];
    profile: ProfileType;
    status: string;
    isOwner: boolean;
    error: string;
    setToggle:boolean;
}

let initialState: profileInitialStateType = {
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
    error: '',
    setToggle:false
}

export const profileReducer = (state: profileInitialStateType = initialState, action: ActionType): profileInitialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
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
                ...state, error: action.error
            }
        case "IS-FETCHING":
            return {
                ...state, setToggle:action.value
            }
        default:
            return state;
    }
}

type ActionType = InferActionsType<typeof profileActions>

export const profileActions = {
    addPost:(posts: string) => {
        return {
            type: 'ADD-POST',
            posts
        } as const
    },
    setProfile:(profile: ProfileType) => {
        return {
            type: 'SET-PROFILE',
            profile
        } as const
    },
    setStatus: (status: string) => {
        return {
            type: 'SET-STATUS',
            status
        } as const
    },
    deletePost:(id: number) => {
        return {
            type: 'DEL-POST',
            id
        } as const
    },
    setToggleFetching: (value: boolean) => {
        return {
            type: 'IS-FETCHING',
            value
        } as const
    },
    isOwner: (value: boolean) => {
        return {
            type: 'IS-OWNER',
            value
        } as const
    },
    successSavePhoto: (photos: ProfilePhotoType) => {
        return {
            type: 'SAVE-PHOTO',
            photos
        } as const
    },
    setError: (error: string) => {
        return {
            type: 'SET-ERROR',
            error
        } as const
    }
}



export const GetProfile = (userId: number) => {
    return async (dispatch: ThunkDispatch<any, any, any>) => {
        dispatch(profileActions.setToggleFetching(false))
        try {
            const response = await profileAPI.getProfile(userId)
            dispatch(profileActions.setProfile(response.data))
            dispatch(profileActions.setToggleFetching(true))
        } catch (e) {

        }
    }
}
export const getProfileStatus = (userId: number) => {
    return async (dispatch: Dispatch) => {
        const response = await profileAPI.getStatus(userId)
        dispatch(profileActions.setStatus(response.data))
    }
}
export const updateProfileStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(profileActions.setStatus(status))
    } else {
        console.log(response.data.messages[0])
    }
}
export const saveUserProfile = (profile: ProfileType) => async (dispatch: ThunkDispatch<any, any, any>, getState: () => AppStateType) => {

    let userId = getState().auth.data.id
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === ResultCodesEnum.Success) {
        if (userId != null) {
            await dispatch(GetProfile(userId))
        }
    } else {
        dispatch(profileActions.setError(response.data.messages[0]))
        return Promise.reject(response.data.messages[0])
    }
}

export const saveUserPhoto = (img: File) => async (dispatch: Dispatch) => {

    const response = await profileAPI.savePhoto(img)
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(profileActions.successSavePhoto(response.data.data.photos))
    }
}
export default profileReducer