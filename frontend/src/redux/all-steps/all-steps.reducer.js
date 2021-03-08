import { StepActionTypes } from "./all-steps.types";

const INITIAL_STATE = {
  createStepStart: false,
  createStepSucessful: false,
  createStepFail: false,
  fetchStepStart: false,
  fetchStepSuccess: false,
  fetchStepFailure: false,
  errorMessage: undefined,
  message: null,
  steps: null,
  isStepQuestionBeingAnswered: false,
  isStepQuestionAnswered: false,
  completionMessage: null,
  isStepAnswered: false
};

const stepReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StepActionTypes.CREATE_STEP_START:
      return {
        ...state,
        createStepStart: true,
        createStepFail: false,
        createStepSuccesful: false,
        errorMessage: null,
      };
    case StepActionTypes.CREATE_STEP_SUCCESS:
      return {
        ...state,
        createStepStart: false,
        createStepSuccessful: true,
        message: action.payload,
      };
   
    case StepActionTypes.CREATE_STEP_FAILURE:
      return {
        ...state,
        createStepStart: false,
        createStepFail: true,
        errorMessage: action.payload,
      };
    case StepActionTypes.FETCH_STEPS_START:
      return{
        ...state,
        fetchStepStart: true
      }
      case StepActionTypes.FETCH_STEPS_SUCCESS:
        return{
          ...state,
          fetchStepStart: false,
          fetchStepSuccess: true,
          steps: action.payload
        }
      case StepActionTypes.FETCH_STEPS_START:
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

export default stepReducer;
