import {createSelector} from 'reselect';
const selectCurrentPO = (state) => state.currentPurchaseOrder

export const selectCurrentPODetails = createSelector([selectCurrentPO], (PO) => PO)

export const selectCurrentPOorderFrom = createSelector(
    [selectCurrentPODetails],
    (PO) => PO.currentPurchaseOrderFrom
)

export const selectCurrentPOItem = createSelector(
    [selectCurrentPODetails],
    (PO) => PO.currentPurchaseOrderItem
)

export const selectCurrentPOTotalAmount = createSelector(
    [selectCurrentPODetails],
    (PO) => PO.currentPurchaseOrderTotalAmount
)

export const selectCurrentPOPaidAmount = createSelector(
    [selectCurrentPODetails],
    (PO) => PO.currentPurchaseOrderPaidAmount
)

export const selectCurrentPOId = createSelector(
    [selectCurrentPODetails],
    (PO) => PO.currentPurchaseOrderId
)

export const selectCurrentPOPurchasedItems = createSelector(
    [selectCurrentPODetails],
    (PO) => PO.currentPurchaseOrderPurchasedItems
)
