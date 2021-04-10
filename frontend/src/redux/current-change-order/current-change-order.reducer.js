import { CurrentChangeOrderActionTypes } from "./current-change-order.types";

const INITIAL_STATE = {
  createChangeOrderStart: null,
  createChangeOrderMessage: null,
  currentChangeOrderFrom: null,
  currentChangeOrderItem: null,
  currentChangeOrderTotalAmount: null,
  currentChangeOrderPaidAmount: null,
  currentChangeOrderPurchasedItems: null,
  currentChangeOrderId: null,
  isCurrentChangeOrderBeingFetched: null,
  currentChangeOrderMessage: null,
  isCOitemBeingCreated: null,
  coItemCreationMessage: null,
};

const currentChangeOrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrentChangeOrderActionTypes.CREATE_CHANGE_ORDER_START:
      return {
        ...state,
        createChangeOrderStart: true,
        createChangeOrderMessage: null,
      };
    case CurrentChangeOrderActionTypes.CREATE_CHANGE_ORDER_SUCCESS:
      return {
        ...state,
        createChangeOrderStart: false,
        createChangeOrderMessage: action.payload,
      };

    case CurrentChangeOrderActionTypes.CREATE_CHANGE_ORDER_FAILURE:
      return {
        createChangeOrderMessage: action.payload,
        createChangeOrderStart: false,
      };
    case CurrentChangeOrderActionTypes.FETCH_CURRENT_CHANGE_ORDER_START:
      return {
        isCurrentChangeOrderBeingFetched: true,
      };
    case CurrentChangeOrderActionTypes.FETCH_CURRENT_CHANGE_ORDER_SUCCESS:
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
        isCurrentChangeOrderBeingFetched: false,
        currentChangeOrderFrom: orderFrom,
        currentChangeOrderId: _id,
        currentChangeOrderItem: purchasedItem,
        currentChangeOrderPaidAmount: totalPaidAmount,
        currentChangeOrderTotalAmount: totalOrderAmount,
        currentChangeOrderPurchasedItems: action.payload.purchasedItems,
      };
    case CurrentChangeOrderActionTypes.FETCH_CURRENT_CHANGE_ORDER_FAILURE:
      return {
        isCurrentChangeOrderBeingFetched: false,
        currentChangeOrderMessage: action.payload,
      };
    case CurrentChangeOrderActionTypes.CREATE_CURRENT_CO_ITEM_START:
      return {
        isCOitemBeingCreated: true,
      };
    case CurrentChangeOrderActionTypes.CREATE_CURRENT_CO_ITEM_SUCCESS:
      return {
        isCOitemBeingCreated: false,
        coItemCreationMessage: action.payload,
      };
    case CurrentChangeOrderActionTypes.CREATE_CURRENT_CO_ITEM_FAILURE:
      return {
        isCOitemBeingCreated: false,
        coItemCreationMessage: action.payload,
      };
    default:
      return state;
  }
};

export default currentChangeOrderReducer;
