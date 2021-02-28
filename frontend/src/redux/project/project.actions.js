import { ProjectActionTypes } from "./project.types"

export const createProjectStart = (projectDetails) => ({
    type: ProjectActionTypes.CREATE_PROJECT_START,
    payload: projectDetails
})

export const createProjectSucessful = () => ({
    type: ProjectActionTypes.CREATE_PROJECT_SUCCESS,
})

export const createProjectFail = (errorMessage) => ({
    type: ProjectActionTypes.CREATE_PROJECT_FAILURE,
    payload: errorMessage
})

