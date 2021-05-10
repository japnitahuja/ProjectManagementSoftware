import { CurrentPunchListActionTypes } from "./punch-list.types"

export const fetchCurrentPunchListStart = (projectId) => ({
    type: CurrentPunchListActionTypes.FETCH_CURRENT_STEP_START,
    payload: projectId
})

export const fetchCurrentPunchListSuccess = (PL) => ({
    type: CurrentPunchListActionTypes.FETCH_CURRENT_STEP_SUCCESS,
    payload: PL
})

export const fetchCurrentPunchListFailure = (error) => ({
    type: CurrentPunchListActionTypes.FETCH_CURRENT_STEP_FAILURE,
    payload: error
})


export const createPunchListStart = (data) => ({
    type: CurrentPunchListActionTypes.CREATE_PUNCH_LIST_START,
    payload: data
})

export const createPunchListSuccess = (message) => ({
    type: CurrentPunchListActionTypes.CREATE_PUNCH_LIST_SUCCESS,
    payload: message
})

export const createPunchListFailure = (error) => ({
    type: CurrentPunchListActionTypes.CREATE_PUNCH_LIST_FAILURE,
    payload: error
})

export const createPunchListItemStart = (data) => ({
    type: CurrentPunchListActionTypes.CREATE_PUNCH_LIST_ITEM_START,
    payload: data
})

export const createPunchListItemSuccess = (message) => ({
    type: CurrentPunchListActionTypes.CREATE_PUNCH_LIST_ITEM_SUCCESS,
    payload: message
})

export const createPunchListItemFailure = (error) => ({
    type: CurrentPunchListActionTypes.CREATE_PUNCH_LIST_ITEM_FAILURE,
    payload: error
})

