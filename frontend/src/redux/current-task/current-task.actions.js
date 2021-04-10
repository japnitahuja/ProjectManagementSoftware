import { CurrentTaskActionTypes } from "./current-task.types"

export const fetchCurrentTaskStart = (taskId) => ({
    type: CurrentTaskActionTypes.FETCH_CURRENT_TASK_START,
    payload: taskId
})

export const fetchCurrentTaskSuccess = (currentTask) => ({
    type: CurrentTaskActionTypes.FETCH_CURRENT_TASK_SUCCESS,
    payload: currentTask
})

export const fetchCurrentTaskFailure = (error) => ({
    type: CurrentTaskActionTypes.FETCH_CURRENT_TASK_FAILURE,
    payload: error
})

export const completeCurrentTaskStart = (taskId) => ({
    type: CurrentTaskActionTypes.COMPLETE_CURRENT_TASK_START,
    payload: taskId
})

export const completeCurrentTaskSuccess = (message) => ({
    type: CurrentTaskActionTypes.COMPLETE_CURRENT_TASK_SUCCESS,
    payload: message
})

export const completeCurrentTaskFailure = (error) => ({
    type: CurrentTaskActionTypes.COMPLETE_CURRENT_TASK_FAILURE,
    payload: error
})

export const deleteCurrentTaskStart = (taskId) => ({
    type: CurrentTaskActionTypes.DELETE_CURRENT_TASK_START,
    payload: taskId
})

export const deleteCurrentTaskSuccess = (message) => ({
    type: CurrentTaskActionTypes.DELETE_CURRENT_TASK_SUCCESS,
    payload: message
})

export const deleteCurrentTaskFailure = (error) => ({
    type: CurrentTaskActionTypes.DELETE_CURRENT_TASK_FAILURE,
    payload: error
})

export const updateCurrentTaskStart = (payload) => ({
    type: CurrentTaskActionTypes.UPDATE_CURRENT_TASK_START,
    payload: payload
})

export const updateCurrentTaskSuccess = (message) => ({
    type: CurrentTaskActionTypes.UPDATE_CURRENT_TASK_SUCCESS,
    payload: message
})

export const updateCurrentTaskFailure = (error) => ({
    type: CurrentTaskActionTypes.UPDATE_CURRENT_TASK_FAILURE,
    payload: error
})

export const deleteStepFromReducer = (stepId) => ({
    type: CurrentTaskActionTypes.DELETE_STEP,
    payload: stepId
})







