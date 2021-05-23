import {combineReducers,createStore} from 'redux';
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

declare global {
    interface Window {store: any}
}

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sideBarPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType =ReturnType<typeof rootReducer>

let store:any = createStore(rootReducer);
window.store = window.store || {}
export default store;