import { ProjectActionTypes } from "./all-project.types";

const INITIAL_STATE = {
  createProjectStart: false,
  createProjectSucessful: false,
  createProjectFail: false,
  fetchProjectStart: false,
  fetchProjectSuccess: false,
  fetchProjectFailure: false,
  errorMessage: undefined,
  message: null,
  projects: null
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectActionTypes.CREATE_PROJECT_START:
      return {
        ...state,
        createProjectStart: true,
        createProjectFail: false,
        createProjectSuccesful: false,
        errorMessage: null,
      };
    case ProjectActionTypes.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        createProjectStart: false,
        createProjectSuccessful: true,
        message: "PROJECT CREATED SUCCESSFULLY!",
      };
   
    case ProjectActionTypes.CREATE_PROJECT_FAILURE:
      return {
        ...state,
        createProjectStart: false,
        createProjectFail: true,
        errorMessage: action.payload,
      };
    case ProjectActionTypes.FETCH_PROJECTS_START:
      return{
        ...state,
        fetchProjectStart: true
      }
      case ProjectActionTypes.FETCH_PROJECTS_SUCCESS:
        return{
          ...state,
          fetchProjectStart: false,
          fetchProjectSuccess: true,
          projects: action.payload
        }
      case ProjectActionTypes.FETCH_PROJECTS_START:
          return{
            ...state,
            fetchProjectStart: false,
            fetchProjectFailure: true,
            errorMessage: action.payload
          }
    default:
      return state;
  }
};

export default projectReducer;
