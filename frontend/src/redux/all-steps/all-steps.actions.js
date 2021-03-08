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

