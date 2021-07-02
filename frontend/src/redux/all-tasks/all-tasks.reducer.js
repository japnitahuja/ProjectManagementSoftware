import { TaskActionTypes } from "./all-tasks.types";

const INITIAL_STATE = {
  createTaskStart: false,
  createTaskSucessful: false,
  createTaskFail: false,
  fetchTaskStart: false,
  fetchTaskSuccess: false,
  fetchTaskFailure: false,
  errorMessage: undefined,
  message: null,
  tasks: null,
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TaskActionTypes.CREATE_TASK_START:
      return {
        ...state,
        createTaskStart: true,
        createTaskFail: false,
        createTaskSuccesful: false,
        errorMessage: null,
      };
    case TaskActionTypes.CREATE_TASK_SUCCESS:
      return {
        ...state,
        createTaskStart: false,
        createTaskSuccessful: true,
        message: "TASK CREATED SUCCESSFULLY!",
      };

    case TaskActionTypes.CREATE_TASK_FAILURE:
      return {
        ...state,
        createTaskStart: false,
        createTaskFail: true,
        errorMessage: action.payload,
      };
    case TaskActionTypes.FETCH_TASKS_START:
      return {
        ...state,
        fetchTaskStart: true,
        fetchTaskFailure: false,
        fetchTaskSuccess: false,
      };
    case TaskActionTypes.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        fetchTaskStart: false,
        fetchTaskSuccess: true,
        tasks: action.payload,
      };
    case TaskActionTypes.FETCH_TASKS_START:
      return {
        ...state,
        fetchTaskStart: false,
        fetchTaskFailure: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
