import {AuthMe} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";

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
            return {...state, isInitialized: true}
        }
        default:
            return {...state}
    }
}
export const isInitializedAc = () => ({type: 'IS-INITIALIZED'} as const)
export const initializeAppTC = () => async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
        await dispatch(AuthMe())
        dispatch(isInitializedAc())
    } catch (e) {

    }


}
export default appReducer;