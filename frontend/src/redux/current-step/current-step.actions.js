import { CurrentStepActionTypes } from "./current-step.types"

export const fetchCurrentStepStart = (stepId) => ({
    type: CurrentStepActionTypes.FETCH_CURRENT_STEP_START,
    payload: stepId
})

export const fetchCurrentStepSuccess = (currentStep) => ({
    type: CurrentStepActionTypes.FETCH_CURRENT_STEP_SUCCESS,
    payload: currentStep
})

export const fetchCurrentStepFailure = (error) => ({
    type: CurrentStepActionTypes.FETCH_CURRENT_STEP_FAILURE,
    payload: error
})

export const completeStepQuestionStart = (stepId) => ({
    type: CurrentStepActionTypes.COMPLETE_STEP_QUESTION_START,
    payload: stepId
})

export const completeStepQuestionSuccess = (message) => ({
    type: CurrentStepActionTypes.COMPLETE_STEP_QUESTION_SUCCESS,
    payload: message
})

export const completeStepQuestionFailure = (error) => ({
    type: CurrentStepActionTypes.COMPLETE_STEP_QUESTION_FAILURE,
    payload: error
})

export const completeStepStart = (stepId) => ({
    type: CurrentStepActionTypes.COMPLETE_STEP_START,
    payload: stepId
})

export const completeStepSuccess = (message) => ({
    type: CurrentStepActionTypes.COMPLETE_STEP_SUCCESS,
    payload: message
})

export const completeStepFailure = (error) => ({
    type: CurrentStepActionTypes.COMPLETE_STEP_FAILURE,
    payload: error
})

export const deleteCurrentStepStart = (stepId) => ({
    type: CurrentStepActionTypes.DELETE_CURRENT_STEP_START,
    payload: stepId
})

export const deleteCurrentStepSuccess = (message) => ({
    type: CurrentStepActionTypes.DELETE_CURRENT_STEP_SUCCESS,
    payload: message
})

export const deleteCurrentStepFailure = (error) => ({
    type: CurrentStepActionTypes.DELETE_CURRENT_STEP_FAILURE,
    payload: error
})

