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

export const createCostCodeStart = (payload) => ({
    type: CostBookActionTypes.CREATE_COST_BOOK_COSTCODE_START,
    payload: payload
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

export const fetchCostBookStart = (projectId) => ({
    type: CostBookActionTypes.FETCH_COST_BOOK_START,
    payload: projectId
    
})

export const fetchCostBookSuccess = (tasks) => ({
    type: CostBookActionTypes.FETCH_COST_BOOK_SUCCESS,
    payload: tasks
})

export const fetchCostBookFailure = (error) => ({
    type: CostBookActionTypes.FETCH_COST_BOOK_FAILURE,
    payload: error
})

