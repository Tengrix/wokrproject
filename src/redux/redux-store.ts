import {combineReducers,createStore} from 'redux';
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendsReducer from "./friends-reducer";
import {StoreType} from "./store";

declare global {
    interface Window {store: any}
}

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sideBarPage: friendsReducer
})

export type AppStateType =ReturnType<typeof rootReducer>

let store:StoreType = createStore(rootReducer);
window.store = window.store || {}
export default store;