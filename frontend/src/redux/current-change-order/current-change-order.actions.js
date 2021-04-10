import { CurrentChangeOrderActionTypes } from "./current-change-order.types"

export const createChangeOrderStart = (payload) => ({
    type: CurrentChangeOrderActionTypes.CREATE_CHANGE_ORDER_START,
    payload: payload
})

export const createChangeOrderSuccess = (message) => ({
    type: CurrentChangeOrderActionTypes.CREATE_CHANGE_ORDER_SUCCESS,
    payload: message
})

export const createChangeOrderFailure = (message) => ({
    type: CurrentChangeOrderActionTypes.CREATE_CHANGE_ORDER_FAILURE,
    payload: message
})

export const fetchCurrentChangeOrderStart = (COid) => ({
    type: CurrentChangeOrderActionTypes.FETCH_CURRENT_CHANGE_ORDER_START,
    payload: COid    
})

export const fetchCurrentChangeOrderSuccess = (CO) => ({
    type: CurrentChangeOrderActionTypes.FETCH_CURRENT_CHANGE_ORDER_SUCCESS,
    payload: CO
})

export const fetchCurrentChangeOrderFailure = (error) => ({
    type: CurrentChangeOrderActionTypes.FETCH_CURRENT_CHANGE_ORDER_FAILURE,
    payload: error
})

export const createCOitemStart = (payload) => ({
    type: CurrentChangeOrderActionTypes.CREATE_CURRENT_CO_ITEM_START,
    payload: payload
})

export const createCOitemSuccess = (message) => ({
    type: CurrentChangeOrderActionTypes.CREATE_CURRENT_CO_ITEM_SUCCESS,
    payload: message
})

export const createCOitemFailure = (error) => ({
    type: CurrentChangeOrderActionTypes.CREATE_CURRENT_CO_ITEM_FAILURE,
    payload: error
})
