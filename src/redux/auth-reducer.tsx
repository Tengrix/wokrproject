import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../api/api";

type ActionsTypesF =
    ReturnType<typeof setAuthUserData>|
    ReturnType<typeof setToggleFetching>

export type setUserDataType = {
    id: number | null,
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
    resultCode: number;
    messages: string[];
}
let initialState: InitialStateType = {
    data:{
        id:null,
        email:null,
        login: null
    },
    isFetching: false,
    isAuth: false,
    resultCode: 0,
    messages: ['']
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
export const setAuthUserData = ( id: number|null, email: string|null, login: string|null) : setUserDataTypeAT  => {
    return {
        type: 'SET-USER-DATA',
        data:{id, email, login}
    } as const
}
export const setToggleFetching = (isFetching: boolean):setToggleFetching => {
    return {
        type: "SET-TOGGLE-FETCHING",
        isFetching
    }as const
}

export const FollowOrUnfollow = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuthMe().then(response=> {
            dispatch(setToggleFetching(false))
            if(response.resultCode===0){
                let {id,login,email} = response.data
                dispatch(setAuthUserData(id,login,email))
                dispatch(setToggleFetching(true))
            }
        })
    }
}

export default authReducer