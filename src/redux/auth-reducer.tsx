type ActionsTypesF =
    ReturnType<typeof setAuthUserData>|
    ReturnType<typeof setToggleFetching>

export type setUserDataType = {
    userId: number | null,
    email: string | null,
    login: string | null
}
export type setToggleFetching = {
    type: 'SET-TOGGLE-FETCHING'
    isFetching:boolean
}
export type setUserDataTypeAT = {
    type: 'SET-USER-DATA'
    data: setUserDataType
}

export type InitialStateType = {
    data: setUserDataType
    isFetching: boolean;
    isAuth: boolean;
}
let initialState: InitialStateType = {
    data:{
        email:null,
        login:null,
        userId: null
    },
    isFetching: false,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypesF): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                data: action.data,
                isAuth:true
            }
        case "SET-TOGGLE-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}
export const setAuthUserData = ( userId: number|null, email: string|null, login: string|null) : setUserDataTypeAT  => {
    return {
        type: 'SET-USER-DATA',
        data:{userId, login, email}
    } as const
}
export const setToggleFetching = (isFetching: boolean):setToggleFetching => {
    return {
        type: "SET-TOGGLE-FETCHING",
        isFetching
    }as const
}
export default authReducer