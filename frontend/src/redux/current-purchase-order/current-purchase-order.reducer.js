import { CurrentPurchaseOrderActionTypes } from "./current-purchase-order.types";

const INITIAL_STATE = {
  createPurchaseOrderStart: null,
  createPurchaseOrderMessage: null,
  currentPurchaseOrderFrom: null,
  currentPurchaseOrderItem: null,
  currentPurchaseOrderTotalAmount: null,
  currentPurchaseOrderPaidAmount: null,
  currentPurchaseOrderPurchasedItems: null,
  currentPurchaseOrderId: null,
  isCurrentPurchaseOrderBeingFetched: null,
  currentPurchaseOrderMessage: null,
  isPOitemBeingCreated: null,
  poItemCreationMessage: null,
};

const currentPurchaseOrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrentPurchaseOrderActionTypes.CREATE_PURCHASE_ORDER_START:
      return {
        ...state,
        createPurchaseOrderStart: true,
        createPurchaseOrderMessage: null,
      };
    case CurrentPurchaseOrderActionTypes.CREATE_PURCHASE_ORDER_SUCCESS:
      return {
        ...state,
        createPurchaseOrderStart: false,
        createPurchaseOrderMessage: action.payload,
      };

    case CurrentPurchaseOrderActionTypes.CREATE_PURCHASE_ORDER_FAILURE:
      return {
        createPurchaseOrderMessage: action.payload,
        createPurchaseOrderStart: false,
      };
    case CurrentPurchaseOrderActionTypes.FETCH_CURRENT_PURCHASE_ORDER_START:
      return {
        isCurrentPurchaseOrderBeingFetched: true,
      };
    case CurrentPurchaseOrderActionTypes.FETCH_CURRENT_PURCHASE_ORDER_SUCCESS:
      const {
        _id,
        orderFrom,
        totalOrderAmount,
        totalPaidAmount,
        purchasedItem,
      } = action.payload;
      if(action.payload.purchasedItems){
        const {purchasedItems} = action.payload
      }
      return {
        isCurrentPurchaseOrderBeingFetched: false,
        currentPurchaseOrderFrom: orderFrom,
        currentPurchaseOrderId: _id,
        currentPurchaseOrderItem: purchasedItem,
        currentPurchaseOrderPaidAmount: totalPaidAmount,
        currentPurchaseOrderTotalAmount: totalOrderAmount,
        currentPurchaseOrderPurchasedItems: action.payload.purchasedItems,
      };
    case CurrentPurchaseOrderActionTypes.FETCH_CURRENT_PURCHASE_ORDER_FAILURE:
      return {
        isCurrentPurchaseOrderBeingFetched: false,
        currentPurchaseOrderMessage: action.payload,
      };
    case CurrentPurchaseOrderActionTypes.CREATE_CURRENT_PO_ITEM_START:
      return {
        isPOitemBeingCreated: true,
      };
    case CurrentPurchaseOrderActionTypes.CREATE_CURRENT_PO_ITEM_SUCCESS:
      return {
        isPOitemBeingCreated: false,
        poItemCreationMessage: action.payload,
      };
    case CurrentPurchaseOrderActionTypes.CREATE_CURRENT_PO_ITEM_FAILURE:
      return {
        isPOitemBeingCreated: false,
        poItemCreationMessage: action.payload,
      };
    default:
      return state;
  }
};

export default currentPurchaseOrderReducer;
