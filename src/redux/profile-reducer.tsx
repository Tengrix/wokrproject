
type ActionsTypesF =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewTextAC>
export const ADD_POST = 'ADD-POST'
export const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}
export const changeNewTextAC = (newPost: string) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newPost: newPost
    } as const
}
export type messageType = {
    message: string;
    likeCount: number;
    id: number
}

export type InitialStateType = {
    message: messageType[];
    newPostText: string;
}

let initialState : InitialStateType = {
    message: [
        {id: 1, message: 'Hi, how are you?', likeCount: 22},
        {id: 2, message: 'It is my first post', likeCount: 11},

    ]as messageType[] ,
    newPostText: ''
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
        default:
            return state;
    }
}
export default profileReducer