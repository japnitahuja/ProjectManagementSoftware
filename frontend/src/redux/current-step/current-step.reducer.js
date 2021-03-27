import { CurrentStepActionTypes } from "./current-step.types";

const INITIAL_STATE = {
  isCurrentStepFetching: false,
  currentStepId: null,
  currentStepName: null,
  currentStepQuestion: null,
  currentStepIsDone: null,
  currentStepQuestionAnswered: null,
  currentStepMessage: null,
  currentStepQuestionType: null,
  errorMessage: null,
  isStepQuestionBeingAnswered: null,
  questionCompletionMessage: null,
  isStepBeingCompleted: null,
  stepCompletionMessage: null,
  isStepBeingDeleted: false,
  stepDeletionMessage: null
};

const currentStepReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrentStepActionTypes.FETCH_CURRENT_STEP_START:
      return {
        ...state,
        isCurrentStepFetching: true,
        stepCompletionMessage: null
      };
    case CurrentStepActionTypes.FETCH_CURRENT_STEP_SUCCESS:
      const {
        isStepDone,
        isQuestionAnswered,
        _id,
        stepName,
        questionStatement,
        questionType,
      } = action.payload;
      return {
        ...state,
        isCurrentStepFetching: false,
        currentStepName: stepName,
        currentStepQuestionAnswered: isQuestionAnswered,
        currentStepQuestion: questionStatement,
        currentStepQuestionType: questionType,
        currentStepIsDone: isStepDone,
        currentStepId: _id,
        currentStepMessage: "STEP FETCHED!",
        stepCompletionMessage: null
      };

    case CurrentStepActionTypes.FETCH_CURRENT_STEP_FAILURE:
      return {
        ...state,
        isCurrentStepFetching: false,
        errorMessage: action.payload,
        stepCompletionMessage: null
      };
    case CurrentStepActionTypes.COMPLETE_STEP_QUESTION_START:
      return {
        isStepQuestionBeingAnswered: true,
        stepCompletionMessage: null
      };
    case CurrentStepActionTypes.COMPLETE_STEP_QUESTION_SUCCESS:
      return {
        isStepQuestionBeingAnswered: false,
        questionCompletionMessage: action.payload,
        currentStepQuestionAnswered: true,
      };
    case CurrentStepActionTypes.COMPLETE_STEP_QUESTION_FAILURE:
      return {
        isStepQuestionBeingAnswered: false,
        questionCompletionMessage: action.payload,
      };
    case CurrentStepActionTypes.COMPLETE_STEP_START:
      return {
        isStepBeingCompleted: true,
        stepCompletionMessage: null
      };
    case CurrentStepActionTypes.COMPLETE_STEP_SUCCESS:
      return {
        isStepBeingCompleted: false,
        stepCompletionMessage: action.payload,
        currentStepIsDone: true,
      };
    case CurrentStepActionTypes.COMPLETE_STEP_FAILURE:
      return {
        isStepBeingCompleted: false,
        stepCompletionMessage: action.payload,
      };
    case CurrentStepActionTypes.DELETE_CURRENT_STEP_START:
      return{
        ...state,
        isStepBeingDeleted: true,
      }
    case CurrentStepActionTypes.DELETE_CURRENT_STEP_SUCCESS:
      return{
        ...state,
        isStepBeingDeleted: false,
        stepDeletionMessage: action.payload
      }
    case CurrentStepActionTypes.DELETE_CURRENT_STEP_FAILURE:
      return{
        ...state,
        isStepBeingDeleted: false,
        stepDeletionMessage: action.payload
      }
    default:
      return state;
  }
};

export default currentStepReducer;
