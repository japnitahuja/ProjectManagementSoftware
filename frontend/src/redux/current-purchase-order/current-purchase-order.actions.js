import { CurrentPurchaseOrderActionTypes } from "./current-purchase-order.types"

export const createPurchaseOrderStart = (projectId) => ({
    type: CurrentPurchaseOrderActionTypes.CREATE_PURCHASE_ORDER_START,
    payload: projectId
})

export const createPurchaseOrderSuccess = (message) => ({
    type: CurrentPurchaseOrderActionTypes.CREATE_PURCHASE_ORDER_SUCCESS,
    payload: message
})

export const createPurchaseOrderFailure = (message) => ({
    type: CurrentPurchaseOrderActionTypes.CREATE_PURCHASE_ORDER_FAILURE,
    payload: message
})

