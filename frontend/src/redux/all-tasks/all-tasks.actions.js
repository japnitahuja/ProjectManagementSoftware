import { TaskActionTypes } from "./all-tasks.types";

export const createTaskStart = (taskDetails) => ({
  type: TaskActionTypes.CREATE_TASK_START,
  payload: taskDetails,
});

export const createTaskSucessful = () => ({
  type: TaskActionTypes.CREATE_TASK_SUCCESS,
});

export const createTaskFail = (errorMessage) => ({
  type: TaskActionTypes.CREATE_TASK_FAILURE,
  payload: errorMessage,
});

export const fetchTasksStart = (projectId) => ({
  type: TaskActionTypes.FETCH_TASKS_START,
  payload: projectId,
});

export const fetchTasksSuccess = (tasks) => ({
  type: TaskActionTypes.FETCH_TASKS_SUCCESS,
  payload: tasks,
});

export const fetchTasksFailure = (error) => ({
  type: TaskActionTypes.FETCH_TASKS_FAILURE,
  payload: error,
});

export const clearTaskData = () => ({
  type: TaskActionTypes.CLEAR_TASKS_DATA,
});
