import { messageType, profilePageType} from "./store";
import {ActionsTypesF, ADD_POST, CHANGE_NEW_POST_TEXT} from "./ActionTypes";

export const profileReducer = (state: profilePageType, action: ActionsTypesF) => {
    switch (action.type){
        case ADD_POST:
            const newPost: messageType = {
                id: 3,
                message: action.post,
                likeCount: 0
            };
            state.message.push(newPost);
            state.newPostText = '';
            return state;
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newPost
            return state;
        default:
            return state;
    }
}
