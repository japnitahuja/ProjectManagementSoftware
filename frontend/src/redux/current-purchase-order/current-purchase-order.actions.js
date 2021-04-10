import { CurrentPurchaseOrderActionTypes } from "./current-purchase-order.types"

export const createPurchaseOrderStart = (payload) => ({
    type: CurrentPurchaseOrderActionTypes.CREATE_PURCHASE_ORDER_START,
    payload: payload
})

export const createPurchaseOrderSuccess = (message) => ({
    type: CurrentPurchaseOrderActionTypes.CREATE_PURCHASE_ORDER_SUCCESS,
    payload: message
})

export const createPurchaseOrderFailure = (message) => ({
    type: CurrentPurchaseOrderActionTypes.CREATE_PURCHASE_ORDER_FAILURE,
    payload: message
})

export const fetchCurrentPurchaseOrderStart = (POid) => ({
    type: CurrentPurchaseOrderActionTypes.FETCH_CURRENT_PURCHASE_ORDER_START,
    payload: POid    
})

export const fetchCurrentPurchaseOrderSuccess = (PO) => ({
    type: CurrentPurchaseOrderActionTypes.FETCH_CURRENT_PURCHASE_ORDER_SUCCESS,
    payload: PO
})

export const fetchCurrentPurchaseOrderFailure = (error) => ({
    type: CurrentPurchaseOrderActionTypes.FETCH_CURRENT_PURCHASE_ORDER_FAILURE,
    payload: error
})

export const createPOitemStart = (payload) => ({
    type: CurrentPurchaseOrderActionTypes.CREATE_CURRENT_PO_ITEM_START,
    payload: payload
})

export const createPOitemSuccess = (message) => ({
    type: CurrentPurchaseOrderActionTypes.CREATE_CURRENT_PO_ITEM_SUCCESS,
    payload: message
})

export const createPOitemFailure = (error) => ({
    type: CurrentPurchaseOrderActionTypes.CREATE_CURRENT_PO_ITEM_FAILURE,
    payload: error
})
