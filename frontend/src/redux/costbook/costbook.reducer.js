import { CostBookActionTypes } from "./costbook.types";

const INITIAL_STATE = {
  createCostBookCategoryStart: false,
  createCostBookCategorySucessful: false,
  createCostBookCategoryFail: false,
  fetchCostBookStart: false,
  fetchCostBookSuccess: false,
  fetchCostBookFailure: false,
  createCostCodeStart: false,
  createCostCodeSuccess: false,
  createCostCodeFailure: false,
  createCostCodeItemStart: false,
  createCostCodeItemFailure: false,
  createCostCodeItemSuccess: false,
  errorMessage: undefined,
  message: null,
  costBook: null
};

const costBookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CostBookActionTypes.CREATE_COST_BOOK_CATEGORY_START:
      return {
        ...state,
        createCostBookCategoryStart: true,
        createCostBookCategoryFail: false,
        createCostBookCategorySuccesful: false,
        errorMessage: null,
      };
    case CostBookActionTypes.CREATE_COST_BOOK_CATEGORY_SUCCESS:
      return {
        ...state,
        createCostBookCategoryStart: false,
        createCostBookCategorySuccessful: true,
        message: "TASK CREATED SUCCESSFULLY!",
      };
   
    case CostBookActionTypes.CREATE_COST_BOOK_CATEGORY_FAILURE:
      return {
        ...state,
        createCostBookCategoryStart: false,
        createCostBookCategoryFail: true,
        errorMessage: action.payload,
      };
    case CostBookActionTypes.CREATE_COST_BOOK_COSTCODE_START:
      return {
        ...state,
        createCostCodeStart: true,

      }
    case CostBookActionTypes.CREATE_COST_BOOK_COSTCODE_SUCCESS:
      return{
        ...state,
        createCostCodeStart: false,
        createCostCodeSuccess: true,
        message: 'COST BOOK COST CODE CREATED'
      }
    case CostBookActionTypes.CREATE_COST_BOOK_COSTCODE_FAILURE:
      return{
        ...state,
        createCostCodeStart: false,
        errorMessage: action.payload,
        createCostCodeFailure: true
      }
    case CostBookActionTypes.CREATE_COST_BOOK_COSTCODEITEM_START:
      return{
        ...state,
        createCostCodeItemStart: true
      }
    case CostBookActionTypes.CREATE_COST_BOOK_COSTCODEITEM_SUCCESS:
      return{
        ...state,
        createCostCodeItemStart: false,
        createCostCodeItemSuccess: true
      }
    case CostBookActionTypes.CREATE_COST_BOOK_COSTCODE_FAILURE:
      return{
        ...state,
        createCostCodeItemStart: false,
        createCostCodeItemFailure: true,
        errorMessage: action.payload
      }
    case CostBookActionTypes.FETCH_COST_BOOK_START:
      return{
        ...state,
        fetchCostBookStart: true
      }
      case CostBookActionTypes.FETCH_COST_BOOK_SUCCESS:
        return{
          ...state,
          fetchCostBookStart: false,
          fetchCostBookSuccess: true,
          costBook: action.payload
        }
      case CostBookActionTypes.FETCH_COST_BOOK_START:
          return{
            ...state,
            fetchCostBookStart: false,
            fetchCostBookFailure: true,
            errorMessage: action.payload
          }
    default:
      return state;
  }
};

export default costBookReducer;
