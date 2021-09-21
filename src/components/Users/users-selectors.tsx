import {createSelector} from "reselect";
import {UsersType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";

export const getUsersSelector = (state:AppStateType) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users:UsersType[]) => {
    return users.filter(el=>true)
})
export const getPageSize = (state:AppStateType) => {
    return state.usersPage.pageCount
}
export const getTotalUsersCount = (state:AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state:AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state:AppStateType) => {
    return state.usersPage.isFetching
}
export const getIsFollowing = (state:AppStateType) => {
    return state.usersPage.isFollowing
}
export const getIsSearchingName = (state:AppStateType) => {
    return state.usersPage.searchingName
}
