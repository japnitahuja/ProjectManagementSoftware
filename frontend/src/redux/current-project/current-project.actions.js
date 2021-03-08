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

