import appReducer, {appActions, appInitialStateType} from "./app-reducer";

let state:appInitialStateType

test('checking app initializing', ()=>{
    let newState = appReducer(state, appActions.isInitializedAc())
    expect(newState.isInitialized).toBe(true)
})