import {ActionsTypesF, SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./store";

export type messagesType = {
    id: number;
    messages: string;
}
export type userType = {
    id: string;
    name: string;
}

export type InitialStateType = {
    users: userType[]
    messages: messagesType[]
    newMessageBody: string
}
let initialState: InitialStateType = {
    users: [
        {id: '1', name: 'Damir'},
        {id: '2', name: 'Abay'},
        {id: '3', name: 'Kyama'},
        {id: '4', name: 'Kaidar'},
        {id: '5', name: 'Aday'},

    ] as userType[],
    messages: [
        {id: 1, messages: 'Hi'},
        {id: 2, messages: 'What\'s up?'},
        {id: 3, messages: 'How\'s it going?'},

    ] as messagesType[],
    newMessageBody: ''
}

export const dialogReducer = (state: InitialStateType = initialState, action: ActionsTypesF):InitialStateType => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:{
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body
            return stateCopy
        }
        case SEND_MESSAGE:{
            let stateCopy = {...state}
            let body = stateCopy.newMessageBody
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push({id: 6, messages: body})
            stateCopy.newMessageBody = ''
            return stateCopy
        }
        default:
            return state
    }
}
export default dialogReducer