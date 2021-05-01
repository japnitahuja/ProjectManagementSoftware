import { CurrentProjectActionTypes } from "./current-project.types"

export const fetchCurrentProjectStart = (projectId) => ({
    type: CurrentProjectActionTypes.FETCH_CURRENT_PROJECT_START,
    payload: projectId
})

export const fetchCurrentProjectSuccess = (currentProject) => ({
    type: CurrentProjectActionTypes.FETCH_CURRENT_PROJECT_SUCCESS,
    payload: currentProject
})

export const fetchCurrentProjectFailure = (error) => ({
    type: CurrentProjectActionTypes.FETCH_CURRENT_PROJECT_FAILURE,
    payload: error
})

export const deleteCurrentTaskInReducer = (taskId) => ({
    type: CurrentProjectActionTypes.DELETE_CURRENT_TASK_IN_REDUCER,
    payload: taskId
})

export const deleteCurrentProjectStart = (projectId) => ({
    type: CurrentProjectActionTypes.DELETE_CURRENT_PROJECT_START,
    payload: projectId
})

export const deleteCurrentProjectSuccess = (message) => ({
    type: CurrentProjectActionTypes.DELETE_CURRENT_PROJECT_SUCCESS,
    payload: message
})

export const deleteCurrentProjectFailure = (message) => ({
    type: CurrentProjectActionTypes.DELETE_CURRENT_PROJECT_FAILURE,
    payload: message
})

export const inviteUserStart = (userDetails) => ({
    type: CurrentProjectActionTypes.INVITE_USER_START,
    payload: userDetails
})

export const inviteUserSuccess = (message) => ({
    type: CurrentProjectActionTypes.INVITE_USER_SUCCESS,
    payload: message
})

export const inviteUserFailure = (message) => ({
    type: CurrentProjectActionTypes.INVITE_USER_FAILURE,
    payload: message
})

export const UpdateUserInProjectStart = (userDetails) => ({
    type: CurrentProjectActionTypes.UPDATE_USER_IN_PROJECT_START,
    payload: userDetails
})

export const UpdateUserInProjectSuccess = (message) => ({
    type: CurrentProjectActionTypes.UPDATE_USER_IN_PROJECT_SUCCESS,
    payload: message
})

export const UpdateUserInProjectFailure = (message) => ({
    type: CurrentProjectActionTypes.UPDATE_USER_IN_PROJECT_FAILURE,
    payload: message
})