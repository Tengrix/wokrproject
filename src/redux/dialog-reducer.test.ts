import dialogReducer, {dialogActions, InitialDialogStateType, messagesType, userType} from "./dialog-reducer";
let state:InitialDialogStateType

beforeEach(()=>{
    state = {
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
})

test('testing sending message',()=>{
    let newState = dialogReducer(state, dialogActions.sendMessage('Hi'))
    expect(newState.messages[3].messages).toBe('Hi')
})