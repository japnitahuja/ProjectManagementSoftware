import { CurrentPunchListActionTypes } from "./punch-list.types"

export const fetchCurrentPunchListStart = (stepId) => ({
    type: CurrentPunchListActionTypes.FETCH_CURRENT_STEP_START,
    payload: stepId
})

export const fetchCurrentPunchListSuccess = (currentStep) => ({
    type: CurrentPunchListActionTypes.FETCH_CURRENT_STEP_SUCCESS,
    payload: currentStep
})

export const fetchCurrentPunchListFailure = (error) => ({
    type: CurrentPunchListActionTypes.FETCH_CURRENT_STEP_FAILURE,
    payload: error
})

export const completeStepQuestionStart = (stepId) => ({
    type: CurrentPunchListActionTypes.COMPLETE_STEP_QUESTION_START,
    payload: stepId
})

export const completeStepQuestionSuccess = (message) => ({
    type: CurrentPunchListActionTypes.COMPLETE_STEP_QUESTION_SUCCESS,
    payload: message
})

export const completeStepQuestionFailure = (error) => ({
    type: CurrentPunchListActionTypes.COMPLETE_STEP_QUESTION_FAILURE,
    payload: error
})

export const completeStepStart = (stepId) => ({
    type: CurrentPunchListActionTypes.COMPLETE_STEP_START,
    payload: stepId
})

export const completeStepSuccess = (message) => ({
    type: CurrentPunchListActionTypes.COMPLETE_STEP_SUCCESS,
    payload: message
})

export const completeStepFailure = (error) => ({
    type: CurrentPunchListActionTypes.COMPLETE_STEP_FAILURE,
    payload: error
})

export const deleteCurrentPunchListStart = (stepId) => ({
    type: CurrentPunchListActionTypes.DELETE_CURRENT_STEP_START,
    payload: stepId
})

export const deleteCurrentPunchListSuccess = (message) => ({
    type: CurrentPunchListActionTypes.DELETE_CURRENT_STEP_SUCCESS,
    payload: message
})

export const deleteCurrentPunchListFailure = (error) => ({
    type: CurrentPunchListActionTypes.DELETE_CURRENT_STEP_FAILURE,
    payload: error
})

