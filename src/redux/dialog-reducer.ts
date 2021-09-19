import {InferActionsType} from "./redux-store";



export type messagesType = {
    id: number;
    messages: string;
}
export type userType = {
    id: string;
    name: string;
}


export type InitialDialogStateType = {
    users: userType[]
    messages: messagesType[]
}
let initialState: InitialDialogStateType = {
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

export const dialogReducer = (state: InitialDialogStateType = initialState, action: ActionType):InitialDialogStateType => {
    switch (action.type){
        case 'SEND-MESSAGE':
            return {
                ...state,
                messages: [...state.messages, {id:6, messages: action.dialog} ]
            }
        default:
            return state
    }
}

type ActionType = InferActionsType<typeof dialogActions>

export const dialogActions = {
    sendMessage:(dialog:string) => {
        return {
            type: 'SEND-MESSAGE',
            dialog
        } as const
    }
}


export default dialogReducer