export const ADD_POST = 'ADD-POST'
export const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
export const UPDATE_NEW_MESSAGE_BODY = 'NEW-MESSAGE-BODY'
export const SEND_MESSAGE = 'SEND-MESSAGE'
export type ActionsTypesF =
    ReturnType<typeof newMessageBody> | ReturnType<typeof sendMessage>|
    ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>

export const addPostAC = (newPost:string) => {
    return{
        type: ADD_POST,
        post: newPost
    } as const
}
export const changeNewTextAC = (newPost:string) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newPost: newPost
    } as const
}
export const newMessageBody = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const

}
export const sendMessage = () => {
    return{
        type: SEND_MESSAGE
    } as const

}