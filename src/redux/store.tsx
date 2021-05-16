import profileReducer, {addPostAC, changeNewTextAC} from "./profile-reducer";
import dialogReducer, {newMessageBodyAC, sendMessageAC} from "./dialog-reducer";
import friendsReducer from "./friends-reducer";
import {followAC, setPageAC, setPageAT, setTotalUsersCountAC, setUsersAC, unFollowAC} from "./users-reducer";
export type ActionsTypesF =
    ReturnType<typeof newMessageBodyAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewTextAC>|
    ReturnType<typeof followAC>|
    ReturnType<typeof unFollowAC>|
    ReturnType<typeof setUsersAC>|
    ReturnType<typeof setPageAC>|
    ReturnType<typeof setTotalUsersCountAC>


type messageType = {
    message: string;
    likeCount: number;
    id: number
}
type userType = {
    id: string;
    name: string;
}
type messagesType = {
    id: number;
    messages: string;
}
type sidebarType = {
    id: number;
    name: string;
}

type profilePageType = {
    message: messageType[],
    newPostText: string;
}
type dialogsPageType = {
    users: userType[]
    messages: messagesType[]
    newMessageBody: string
}
type sidebarsType = {
    friends: sidebarType[]
}
type stateRootType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarsType
}
export type StoreType = {
    _state: stateRootType;
    _onChange: (state: stateRootType) => void;
    subscribe: (observer: () => void) => void;
    getState: () => stateRootType;
    dispatch: (action: ActionsTypesF) => void;
}
let store: StoreType = {
    _state: {
        profilePage: {
            message: [
                {id: 1, message: 'Hi, how are you?', likeCount: 22},
                {id: 2, message: 'It is my first post', likeCount: 11},

            ],
            newPostText: ''
        },
        dialogsPage: {
            users: [
                {id: '1', name: 'Damir'},
                {id: '2', name: 'Abay'},
                {id: '3', name: 'Kyama'},
                {id: '4', name: 'Kaidar'},
                {id: '5', name: 'Aday'},

            ],
            messages: [
                {id: 1, messages: 'Hi'},
                {id: 2, messages: 'What\'s up?'},
                {id: 3, messages: 'How\'s it going?'},

            ],
            newMessageBody: ''
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Abay'},
                {id: 2, name: 'Salta'},
                {id: 3, name: 'Samal'}
            ]
        }
    },
    _onChange() {

    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._onChange = observer
    },
    dispatch(action: ActionsTypesF) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.sidebar = friendsReducer(this._state.sidebar, action)
        this._onChange(this._state)

    }
}

export default store;



