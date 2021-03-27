import {createSelector} from "reselect";

const selectStep = (state) => state.step;

export const selectStepDetails = createSelector([selectStep], (step) => step);

export const selectCreateStepStart = createSelector(
  [selectStepDetails],
  (step) => step.createStepStart
);

export const selectUserSteps = createSelector(
  [selectStepDetails],
  (step) => step.steps
)

export const selectStepQuestionAnsweredConfirmation = createSelector(
  [selectStepDetails],
  (step) => step.isStepQuestionAnswered
)

export const selectStepQuestionAnsweredConfirmationMessage = createSelector(
  [selectStepDetails],
  (step) => step.completionMessage
)

export const selectIsStepBeingCreated = createSelector(
  [selectStepDetails],
  (step) => step.createStepStart
)