import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
declare global {
    interface Window {store: any}
}

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sideBarPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    appPage:appReducer,
})

export type AppStateType =ReturnType<typeof rootReducer>
type PropertiesTypes<T> = T extends {[key:string]: infer U} ? U : never
export type InferActionsType<T extends {[key:string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
window.store = window.store || {}
export default store;