import { ProjectActionTypes } from "./all-projects.types"

export const createProjectStart = (projectDetails) => ({
    type: ProjectActionTypes.CREATE_PROJECT_START,
    payload: projectDetails
})

export const createProjectSucessful = () => ({
    type: ProjectActionTypes.CREATE_PROJECT_SUCCESS
})

export const createProjectFail = (errorMessage) => ({
    type: ProjectActionTypes.CREATE_PROJECT_FAILURE,
    payload: errorMessage
})

export const fetchProjectsStart = () => ({
    type: ProjectActionTypes.FETCH_PROJECTS_START,
    
})

export const fetchProjectsSuccess = (projects) => ({
    type: ProjectActionTypes.FETCH_PROJECTS_SUCCESS,
    payload: projects
})

export const fetchProjectsFailure = (error) => ({
    type: ProjectActionTypes.FETCH_PROJECTS_FAILURE,
    payload: error
})

