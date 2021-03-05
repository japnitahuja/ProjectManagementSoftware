import { StepActionTypes } from "./all-project.types";

const INITIAL_STATE = {
  createStepStart: false,
  createStepSucessful: false,
  createStepFail: false,
  fetchStepStart: false,
  fetchStepSuccess: false,
  fetchStepFailure: false,
  errorMessage: undefined,
  message: null,
  projects: null
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StepActionTypes.CREATE_PROJECT_START:
      return {
        ...state,
        createStepStart: true,
        createStepFail: false,
        createStepSuccesful: false,
        errorMessage: null,
      };
    case StepActionTypes.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        createStepStart: false,
        createStepSuccessful: true,
        message: "PROJECT CREATED SUCCESSFULLY!",
      };
   
    case StepActionTypes.CREATE_PROJECT_FAILURE:
      return {
        ...state,
        createStepStart: false,
        createStepFail: true,
        errorMessage: action.payload,
      };
    case StepActionTypes.FETCH_PROJECTS_START:
      return{
        ...state,
        fetchStepStart: true
      }
      case StepActionTypes.FETCH_PROJECTS_SUCCESS:
        return{
          ...state,
          fetchStepStart: false,
          fetchStepSuccess: true,
          projects: action.payload
        }
      case StepActionTypes.FETCH_PROJECTS_START:
          return{
            ...state,
            fetchStepStart: false,
            fetchStepFailure: true,
            errorMessage: action.payload
          }
    default:
      return state;
  }
};

export default projectReducer;
