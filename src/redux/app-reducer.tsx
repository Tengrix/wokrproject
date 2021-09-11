import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {setAuthUserData} from "./auth-reducer";

type initialStateType = {
    isInitialized: boolean
}
type ActionType = ReturnType<typeof isInitializedAc>
const initialState: initialStateType = {
    isInitialized: false
}
export const appReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case'IS-INITIALIZED': {
            return {...state, isInitialized: action.isInitialized}
        }
        default:
            return {...state}
    }
}
export const isInitializedAc = (isInitialized: boolean) => ({type: 'IS-INITIALIZED', isInitialized} as const)
export const initializeAppTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.getAuthMe()
        if (res.resultCode === 0) {
            let {id, login, email} = res.data
            dispatch(setAuthUserData(id, login, email, true))
            dispatch(isInitializedAc(true))
        }
    } catch (err) {

    }
}
export default appReducer;