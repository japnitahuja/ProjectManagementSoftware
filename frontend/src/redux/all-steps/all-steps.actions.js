import { StepActionTypes } from "./all-steps.types";

export const createStepStart = (stepDetails) => {
  console.log("action started", stepDetails);
  return {
    type: StepActionTypes.CREATE_STEP_START,
    payload: stepDetails,
  };
};

export const createStepSucessful = (message) => ({
  type: StepActionTypes.CREATE_STEP_SUCCESS,
  payload: message,
});

export const createStepFail = (errorMessage) => ({
  type: StepActionTypes.CREATE_STEP_FAILURE,
  payload: errorMessage,
});

export const fetchStepsStart = (taskId) => {
  console.log("action for fetching steps", taskId);
  return {
    type: StepActionTypes.FETCH_STEPS_START,
    payload: taskId,
  };
};

export const fetchStepsSuccess = (steps) => ({
  type: StepActionTypes.FETCH_STEPS_SUCCESS,
  payload: steps,
});

export const fetchStepsFailure = (error) => ({
  type: StepActionTypes.FETCH_STEPS_FAILURE,
  payload: error,
});

export const completeStepQuestionStart = (stepId) => ({
    type: StepActionTypes.COMPLETE_STEP_QUESTION_START,
    payload: stepId
})

export const completeStepQuestionSuccess = (message) => ({
    type: StepActionTypes.COMPLETE_STEP_QUESTION_SUCCESS,
    payload: message
})

export const completeStepQuestionFailure = (error) => ({
    type: StepActionTypes.COMPLETE_STEP_QUESTION_FAILURE,
    payload: error
})
