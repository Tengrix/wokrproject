import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {friendsReducer} from "./friends-reducer";
import {ActionsTypesF} from "./ActionTypes";

export type messageType = {
    message: string;
    likeCount: number;
    id: number
}
export type userType = {
    id: string;
    name: string;
}
export type messagesType = {
    id: number;
    messages: string;
}
export type sidebarType = {
    id: number;
    name: string;
}
export type profilePageType = {
    message: messageType[],
    newPostText: string;
}
export type dialogsPageType = {
    users: userType[]
    messages: messagesType[]
    newMessageBody: string
}
export type sidebarsType = {
    friends: sidebarType[]
}
export type stateRootType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarsType
}
export type StoreType = {
    _state: stateRootType;
    _onChange: () => void;
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
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.sidebar = friendsReducer(this._state.sidebar, action)
        this._onChange()

    }
}

export default store;



