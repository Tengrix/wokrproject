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
    dispatch: (action: ActionsTypes) => void;
}
export type AddPostActionType = {
    type: 'ADD-POST';
    post: string;
}
export type ChangeNewPostActionType = {
    type: 'CHANGE-NEW-POST-TEXT';
    newPost: string;
}
export type ActionsTypes = AddPostActionType | ChangeNewPostActionType

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

            ]
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
        if (action.type === 'ADD-POST') {
            const newPost: messageType = {
                id: 3,
                message: action.post,
                likeCount: 0
            };
            this._state.profilePage.message.push(newPost)
            this._state.profilePage.newPostText = ''
            this._onChange()
        } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPost
            this._onChange()
        }
    }
}

export default store;



