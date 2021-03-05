import {createSelector} from "reselect";

const selectTask = (state) => state.task;

export const selectTaskDetails = createSelector([selectTask], (task) => task);

export const selectCreateTaskStart = createSelector(
  [selectTaskDetails],
  (task) => task.createTaskStart
);

export const selectUserTasks = createSelector(
  [selectTaskDetails],
  (task) => task.tasks
)