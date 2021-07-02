import { CostBookActionTypes } from "./costbook.types"

export const createCostBookCategoryStart = (costBookDetails) => ({
    type: CostBookActionTypes.CREATE_COST_BOOK_CATEGORY_START,
    payload: costBookDetails
})

export const createCostBookCategorySucessful = (message) => ({
    type: CostBookActionTypes.CREATE_COST_BOOK_CATEGORY_SUCCESS,
    payload: message
})

export const createCostBookCategoryFail = (errorMessage) => ({
    type: CostBookActionTypes.CREATE_COST_BOOK_CATEGORY_FAILURE,
    payload: errorMessage
})

export const createCostCodeStart = (costCodeDetails) => ({
    type: CostBookActionTypes.CREATE_COST_BOOK_COSTCODE_START,
    payload: costCodeDetails
})

export const createCostCodeSuccess = (payload) => ({
    type: CostBookActionTypes.CREATE_COST_BOOK_COSTCODE_SUCCESS,
    payload: payload
})

export const createCostCodeFailute = (payload) => ({
    type: CostBookActionTypes.CREATE_COST_BOOK_COSTCODE_FAILURE,
    payload: payload
})

export const createCostCodeItemStart = (payload) => ({
    type: CostBookActionTypes.CREATE_COST_BOOK_COSTCODEITEM_START,
    payload: payload
})

export const createCostCodeItemSuccess = (payload) => ({
    type: CostBookActionTypes.CREATE_COST_BOOK_COSTCODE_SUCCESS,
    payload: payload
})

export const createCostCodeItemFailure = (payload) => ({
    type: CostBookActionTypes.CREATE_COST_BOOK_COSTCODEITEM_FAILURE,
    payload: payload
})

export const fetchCostBookStart = () => ({
    type: CostBookActionTypes.FETCH_COST_BOOK_START,
    
})

export const fetchCostBookSuccess = (costbook) => ({
    type: CostBookActionTypes.FETCH_COST_BOOK_SUCCESS,
    payload: costbook
})

export const fetchCostBookFailure = (error) => ({
    type: CostBookActionTypes.FETCH_COST_BOOK_FAILURE,
    payload: error
})

