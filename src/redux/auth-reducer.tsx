import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

type ActionsTypesF =
    ReturnType<typeof setAuthUserData> |
    ReturnType<typeof setToggleFetching>

export type setUserDataType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean;
}
export type setToggleFetching = {
    type: 'SET-TOGGLE-FETCHING'
    isFetching: boolean
}
export type setUserDataTypeAT = {
    type: 'SET-USER-DATA'
    data: setUserDataType
}

export type AuthInitialStateType = {
    data: setUserDataType
    isFetching: boolean;
    resultCode: number;
    messages: string[];
}
let initialState: AuthInitialStateType = {
    data: {
        id: null,
        email: null,
        login: null,
        isAuth: false
    },
    isFetching: false,
    resultCode: 0,
    messages: ['']
}

export const authReducer = (state: AuthInitialStateType = initialState, action: ActionsTypesF): AuthInitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                data: action.data
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
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setUserDataTypeAT => {
    return {
        type: 'SET-USER-DATA',
        data: {id, email, login, isAuth}
    } as const
}
export const setToggleFetching = (isFetching: boolean): setToggleFetching => {
    return {
        type: "SET-TOGGLE-FETCHING",
        isFetching
    } as const
}

export const AuthMe = () => {
    return async (dispatch: Dispatch) => {
        const response = await authAPI.getAuthMe()
        dispatch(setToggleFetching(false))
        if (response.resultCode === 0) {
            let {id, login, email} = response.data
            dispatch(setAuthUserData(id, login, email, true))
            dispatch(setToggleFetching(true))
        }
    }
}
export const AuthLogin = (email: string, password: string, rememberMe: boolean) => {
    return async (dispatch: any) => {
        const response = await authAPI.getLogin(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(AuthMe())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login',
                {_error: message}))
        }
    }
}
export const AuthLogOut = () => {
    return async (dispatch: Dispatch) => {
        const response = await authAPI.getLogOut()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}
// export const Captcha = (url:string) => {
//     return (dispatch:Dispatch) => {
//         authAPI.getCaptcha(url).then(response => {
//             response.data.getCaptcha('')
//         })
//     }
// }


export default authReducer