type ActionsTypesF = ReturnType<typeof sendMessage>

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

    ] as messagesType[]
}

export const dialogReducer = (state: InitialStateType = initialState, action: ActionsTypesF):InitialStateType => {
    switch (action.type){
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id:6, messages: action.dialog} ]
            }
        default:
            return state
    }
}
export const sendMessage = (dialog:string) => {
    return {
        type: SEND_MESSAGE,
        dialog
    } as const

}

export default dialogReducer