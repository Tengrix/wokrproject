import {dialogsPageType} from "./store";
import {ActionsTypesF, SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./ActionTypes";
export const dialogReducer = (state: dialogsPageType, action: ActionsTypesF) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, messages: body})
            return state
        default:
            return state
    }
}