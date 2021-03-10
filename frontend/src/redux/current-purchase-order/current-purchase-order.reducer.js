import { CurrentPurchaseOrderActionTypes } from "./current-purchase-order.types";

const INITIAL_STATE = {
createPurchaseOrderStart: null,
createPurchaseOrderMessage: null,

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
        createPurchaseOrderMessage: action.payload
      };
   
    case CurrentPurchaseOrderActionTypes.CREATE_PURCHASE_ORDER_FAILURE:
      return {
      createPurchaseOrderMessage: action.payload,
      createPurchaseOrderStart: false
      };
    default:
    return state;
  }
};

export default currentPurchaseOrderReducer;
