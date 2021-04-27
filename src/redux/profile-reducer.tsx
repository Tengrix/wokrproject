
import {ActionsTypesF, ADD_POST, CHANGE_NEW_POST_TEXT} from "./store";

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
            let stateCopy = {...state};
            stateCopy.message = [...state.message];
            stateCopy.message.push(newPost);
            stateCopy.newPostText = ''
            return stateCopy;
        }
        case CHANGE_NEW_POST_TEXT:{
            let stateCopy = {...state}
            stateCopy.newPostText = action.newPost
            return stateCopy;
        }
        default:
            return state;
    }
}
export default profileReducer