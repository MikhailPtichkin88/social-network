import {ReduxStoreType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsersList = (state: ReduxStoreType) => {
    return state.usersPage.users
}

export const getPageSize = (state: ReduxStoreType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: ReduxStoreType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: ReduxStoreType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: ReduxStoreType) => {
    return state.usersPage.isFetching
}

export const getIsFollowingInProgress = (state: ReduxStoreType) => {
    return state.usersPage.isFollowingInProgress
}

// Смысл этого селектора в мемоизации данных из зависимостей(getUsersList) с целью не вызывать функцию
//без изменений зависимости (= useMemo). Так же оптимизируется перерендеринг компонента, если функция не будет //каждый раз возвращать новый отфильтрованный список (пример для теории, в данном проекте практического эффекта //не несет)

export const getUsersSuperSelector = createSelector(getUsersList, (users) => {
    return users.filter(u => true)
})