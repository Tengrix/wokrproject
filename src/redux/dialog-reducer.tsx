type ActionsTypesF =
    ReturnType<typeof updatedMessageBody> |
    ReturnType<typeof sendMessage>

export const UPDATE_NEW_MESSAGE_BODY = 'NEW-MESSAGE-BODY'
export const SEND_MESSAGE = 'SEND-MESSAGE'

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
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id:6, messages: body} ],
                newMessageBody: ''
            }
        default:
            return state
    }
}
export const updatedMessageBody= (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const

}
export const sendMessage = () => {
    return {
        type: SEND_MESSAGE
    } as const

}
// type dialogReducerAT = sendMessageAType|updateMessageAT
// export type sendMessageAType = {
//     type:'SEND-MESSAGE'
//     id: number;
//     title: string;
// }
// export type updateMessageAT = {
//     type: 'NEW-MESSAGE-BODY'
//     body: string
// }
// export const sendMessageAC = (id:number, title:string):sendMessageAType => {
//     return {type: 'SEND-MESSAGE', id, title}
// }
// export const updateMessageAC = (body:string):updateMessageAT => {
//     return {type: 'NEW-MESSAGE-BODY', body}
// }

export default dialogReducer