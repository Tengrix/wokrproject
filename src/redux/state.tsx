
let rerenderEntireTree = () => {

}

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
    id:number;
    name:string;
}
export type profilePageType = {
    message: messageType[],
    newPostText:string;
}
export type dialogsPageType = {
    users: userType[]
    messages: messagesType[]
}
export type sidebarsType = {
    friends:sidebarType[]
}

export type stateRootType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarsType
}

export let state: stateRootType = {
    profilePage: {
        message: [
            {id: 1, message: 'Hi, how are you?', likeCount: 22},
            {id: 2, message: 'It is my first post', likeCount: 11},

        ],
        newPostText:''
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
            {id:1, name:'Abay'},
            {id:2, name:'Salta'},
            {id:3, name:'Samal'}
        ]
    }
}

export const addNewPost = (post:string) => {
    const newPost:messageType = {
        id:3,
        message:post,
        likeCount:0
    };
    state.profilePage.message.push(newPost)
    state.profilePage.newPostText=''
    rerenderEntireTree()
}
export const changeNewPostCallBack = (newPost:string) => {
    state.profilePage.newPostText=newPost
    rerenderEntireTree()
}

export const subscribe = (observer:()=> void) => {
    rerenderEntireTree = observer
}

export default state;