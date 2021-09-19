import {AuthMe} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {InferActionsType} from "./redux-store";

type initialStateType = {
    isInitialized: boolean
}
const initialState: initialStateType = {
    isInitialized: false
}
export const appReducer = (state: initialStateType = initialState, action:ActionsType): initialStateType => {
    switch (action.type) {
        case'IS-INITIALIZED': {
            return {...state, isInitialized: true}
        }
        default:
            return {...state}
    }
}

type ActionsType = InferActionsType<typeof appActions>

const appActions = {
    isInitializedAc: () => ({type: 'IS-INITIALIZED'} as const),
}
export const initializeAppTC = () => async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
        await dispatch(AuthMe())
        dispatch(appActions.isInitializedAc())
    } catch (e) {

    }


}
export default appReducer;