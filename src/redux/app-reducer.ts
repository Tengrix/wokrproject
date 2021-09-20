import {AuthMe} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {InferActionsType} from "./redux-store";

export type appInitialStateType = {
    isInitialized: boolean
}
const initialState: appInitialStateType = {
    isInitialized: false
}
export const appReducer = (state: appInitialStateType = initialState, action:ActionsType): appInitialStateType => {
    switch (action.type) {
        case'IS-INITIALIZED': {
            return {...state, isInitialized: true}
        }
        default:
            return {...state}
    }
}

type ActionsType = InferActionsType<typeof appActions>

export const appActions = {
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