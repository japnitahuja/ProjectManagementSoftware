import { StepActionTypes } from "./all-step.types.types"

export const createStepStart = (projectDetails) => ({
    type: StepActionTypes.CREATE_STEP_START,
    payload: projectDetails
})

export const createStepSucessful = () => ({
    type: StepActionTypes.CREATE_STEP_SUCCESS,
})

export const createStepFail = (errorMessage) => ({
    type: StepActionTypes.CREATE_STEP_FAILURE,
    payload: errorMessage
})

export const fetchStepsStart = () => ({
    type: StepActionTypes.FETCH_STEPS_START,
    
})

export const fetchStepsSuccess = (projects) => ({
    type: StepActionTypes.FETCH_STEPS_SUCCESS,
    payload: projects
})

export const fetchStepsFailure = (error) => ({
    type: StepActionTypes.FETCH_STEPS_FAILURE,
    payload: error
})

