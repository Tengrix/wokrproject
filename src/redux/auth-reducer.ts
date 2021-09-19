import {Dispatch} from "redux";
import {authAPI, ResultCodesEnum, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkDispatch} from "redux-thunk";
import {InferActionsType} from "./redux-store";


export type setUserDataType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean;
}

export type AuthInitialStateType = {
    data: setUserDataType
    isFetching: boolean;
    resultCode: number;
    messages: string[];
    captcha: string;
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
    messages: [''],
    captcha: ''
}

export const authReducer = (state: AuthInitialStateType = initialState, action: ActionsType): AuthInitialStateType => {
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
        case "GET-CAPTCHA":
            return {
                ...state, captcha: action.url
            }
        default:
            return state
    }
}

type ActionsType = InferActionsType<typeof authActions>

export const authActions = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
        return {
            type: 'SET-USER-DATA',
            data: {id, email, login, isAuth}
        } as const
    },
    setToggleFetching: (isFetching: boolean) => {
        return {
            type: "SET-TOGGLE-FETCHING",
            isFetching
        } as const
    },
    getCaptcha: (url: string) => {
        return {
            type: "GET-CAPTCHA",
            url
        } as const
    },
}


export const AuthMe = () => {
    return async (dispatch: Dispatch) => {
        const response = await authAPI.getAuthMe()
        dispatch(authActions.setToggleFetching(false))
        if (response.resultCode === ResultCodesEnum.Success) {
            let {id, login, email} = response.data
            dispatch(authActions.setAuthUserData(id, login, email, true))
            dispatch(authActions.setToggleFetching(true))
        }
    }
}
export const AuthLogin = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: ThunkDispatch<any, any, any>) => {
    const response = await authAPI.getLogin(email, password, rememberMe, captcha)
    if (response.data.resultCode === ResultCodesEnum.Success) {
        await dispatch(AuthMe())
    } else {
        if (response.data.resultCode === ResultCodesEnum.InvalidSymbols) {
            await dispatch(Captcha())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login',
                {_error: message}))
        }

    }
}
export const AuthLogOut = () => async (dispatch: Dispatch) => {
    const response = await authAPI.getLogOut()
    if (response.data.resultCode === 0) {
        dispatch(authActions.setAuthUserData(null, null, null, false))
        dispatch(authActions.setToggleFetching(true))
    }
}
export const Captcha = () => async (dispatch: Dispatch) => {
    const response = await authAPI.getCaptcha()
    if (response.status === 200) {
        dispatch(authActions.getCaptcha(response.data.url))
    }
}


export default authReducer