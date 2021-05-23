type ActionsTypesF =
    ReturnType<typeof addPost> |
    ReturnType<typeof changeNewText>|
    ReturnType<typeof setProfile>

export const ADD_POST = 'ADD-POST'
export const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

export type messageType = {
    message: string;
    likeCount: number;
    id: number;
}

type ProfilePhotoType = {
    small:string
    large:string
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
    newPostText: string;
    profile: ProfileType | null
}

let initialState : InitialStateType = {
    message: [
        {id: 1, message: 'Hi, how are you?', likeCount: 22},
        {id: 2, message: 'It is my first post', likeCount: 11},

    ]as messageType[] ,
    newPostText: '',
    profile:null
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypesF): InitialStateType => {
    switch (action.type){
        case ADD_POST:{
            const newPost: messageType = {
                id: 3,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                message: [...state.message, newPost],
                newPostText: ''
            };
        }
        case CHANGE_NEW_POST_TEXT:{
            return{
                ...state,
                newPostText:action.newPost
            }
        }
        case "SET-PROFILE":
            return {
                ...state, profile: action.profile
            }
        default:
            return state;
    }
}
export const addPost = () => {
    return {
        type: ADD_POST,
    } as const
}
export const changeNewText = (newPost: string) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newPost
    } as const
}
export const setProfile = (profile:ProfileType) => {
    return {
        type: 'SET-PROFILE',
        profile
    } as const
}

export default profileReducer