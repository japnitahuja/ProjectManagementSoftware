import {createSelector} from "reselect";

const selectCurrentTask = (state) => state.currentTask;

export const selectCurrentTaskDetails = createSelector([selectCurrentTask], (currentTask) => currentTask);

export const selectCurrentTaskName = createSelector(
  [selectCurrentTaskDetails],
  (currentTask) => currentTask.currentTaskName
);

export const selectCurrentTaskId = createSelector(
  [selectCurrentTaskDetails],
  (currentTask) => currentTask.currentTaskId
);

export const selectCurrentTaskPurchaseOrders = createSelector(
  [selectCurrentTaskDetails],
  (currentTask) => currentTask.currentTaskPurchaseOrders
);

export const selectCurrentTaskChangeOrders = createSelector(
  [selectCurrentTaskDetails],
  (currentTask) => currentTask.currentTaskChangeOrders
);

export const selectCurrentTaskSteps = createSelector(
  [selectCurrentTaskDetails],
  (currentTask) => currentTask.currentTaskSteps
);

export const selectCurrentTaskTotalSteps = createSelector(
  [selectCurrentTaskDetails],
  (currentTask) => currentTask.currentTaskTotalteps
);

export const selectCurrentTaskCompletedSteps = createSelector(
  [selectCurrentTaskDetails],
  (currentTask) => currentTask.currentTaskCompletedSteps
);

export const selectCurrentTaskCompletionPercentage = createSelector(
  [selectCurrentTaskDetails],
  (currentTask) => currentTask.currentTaskCompletionPercentage
);

export const selectCurrentTaskIsDone = createSelector(
  [selectCurrentTaskDetails],
  (currentTask) => currentTask.currentTaskIsDone
);

export const selectCurrentTaskCompletionMessage = createSelector(
  [selectCurrentTaskDetails],
  (currentTask) => currentTask.currentTaskCompletionMessage
)

export const selectCurrentTaskStartDate = createSelector(
  [selectCurrentTaskDetails],
  (currentTask) => currentTask.currentTaskStartDate
);

export const selectCurrentTaskEndDate = createSelector(
  [selectCurrentTaskDetails],
  (currentTask) => currentTask.currentTaskEndDate
);

export const selectCurrentTaskOwner = createSelector(
  [selectCurrentTaskDetails],
  (currentTask) => currentTask.currentTaskOwner
);

export const selectCurrentTaskMessage = createSelector(
  [selectCurrentTaskDetails],
  (currentTask) => currentTask.currentTaskMessage
);

export const selectIsCurrentTaskFetching = createSelector(
  [selectCurrentTaskDetails],
  (currentTask) => currentTask.isCurrentTaskFetching
);

