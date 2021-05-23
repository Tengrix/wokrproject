type ActionsTypesF = {

}
type sidebarType = {
    id: number;
    name: string;
}
export type InitialStateType = {
    friends: sidebarType[]
}
let initialState: InitialStateType = {
    friends: [
        {id: 1, name: 'Abay'},
        {id: 2, name: 'Karik'}
    ]
}

export const friendsReducer = (state:InitialStateType = initialState, action:ActionsTypesF): InitialStateType => {

    return state
}
export default friendsReducer