import {createSelector} from "reselect";

const selectCurrentStep = (state) => state.currentStep;

export const selectCurrentStepDetails = createSelector([selectCurrentStep], (currentStep) => currentStep);

export const selectCurrentStepName = createSelector(
  [selectCurrentStepDetails],
  (currentStep) => currentStep.currentStepName
);

export const selectCurrentStepQuestion = createSelector(
    [selectCurrentStepDetails],
    (currentStep) => currentStep.currentStepQuestion
  );

  export const selectCurrentStepId = createSelector(
    [selectCurrentStepDetails],
    (currentStep) => currentStep.currentStepId
  );

  export const selectCurrentStepQuestionAnswered = createSelector(
    [selectCurrentStepDetails],
    (currentStep) => currentStep.currentStepQuestionAnswered
  );

  export const selectCurrentStepQuestionType = createSelector(
    [selectCurrentStepDetails],
    (currentStep) => currentStep.currentStepQuestionType
  );

  export const selectCurrentStepIsDone = createSelector(
    [selectCurrentStepDetails],
    (currentStep) => currentStep.currentStepIsDone
  );

  export const selectCurrentStepQuestionAnswerConfirmation = createSelector(
    [selectCurrentStepDetails],
    (currentStep) => currentStep.questionCompletionMessage
  );

  export const selectCurrentStepCompletionMessage = createSelector(
    [selectCurrentStepDetails],
    (currentStep) => currentStep.stepCompletionMessage
  );
  

