import {createSelector} from 'reselect';
const selectCurrentCO = (state) => state.currentChangeOrder

export const selectCurrentCODetails = createSelector([selectCurrentCO], (CO) => CO)

export const selectCurrentCOorderFrom = createSelector(
    [selectCurrentCODetails],
    (CO) => CO.currentChangeOrderFrom
)

export const selectCurrentCOItem = createSelector(
    [selectCurrentCODetails],
    (CO) => CO.currentChangeOrderItem
)

export const selectCurrentCOTotalAmount = createSelector(
    [selectCurrentCODetails],
    (CO) => CO.currentChangeOrderTotalAmount
)

export const selectCurrentCOPaidAmount = createSelector(
    [selectCurrentCODetails],
    (CO) => CO.currentChangeOrderPaidAmount
)

export const selectCurrentCOId = createSelector(
    [selectCurrentCODetails],
    (CO) => CO.currentChangeOrderId
)

export const selectCurrentCOPurchasedItems = createSelector(
    [selectCurrentCODetails],
    (CO) => CO.currentChangeOrderPurchasedItems
)

export const isCuurentCOBeingFetched = createSelector(
    [selectCurrentCODetails],
    (CO) => CO.isCurrentPurchaseOrderBeingFetched
)
