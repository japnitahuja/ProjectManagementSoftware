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

export const createProjectTemplateStart = (projectDetails) => ({
    type: ProjectActionTypes.CREATE_PROJECT_TEMPLATE_START,
    payload: projectDetails
})

export const createProjectTemplateSuccess = (project) => ({
    type: ProjectActionTypes.CREATE_PROJECT_TEMPLATE_SUCCESS,
    payload: project
})

export const createProjectTemplateFailure = (error) => ({
    type: ProjectActionTypes.CREATE_PROJECT_TEMPLATE_FAILURE,
    payload: error
})

export const fetchProjectsStart = (orgId) => ({
    type: ProjectActionTypes.FETCH_PROJECTS_START,
    payload: orgId
})

export const fetchProjectsSuccess = (projects) => ({
    type: ProjectActionTypes.FETCH_PROJECTS_SUCCESS,
    payload: projects
})


export const fetchProjectsFailure = (error) => ({
    type: ProjectActionTypes.FETCH_PROJECTS_FAILURE,
    payload: error
})

export const deleteProject = (projectId) => ({
    type: ProjectActionTypes.DELETE_PROJECT,
    payload: projectId
})

