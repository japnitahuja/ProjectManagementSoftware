import { CurrentTaskActionTypes } from "./current-task.types";

const INITIAL_STATE = {
  isCurrentTaskFetching: false,
  currentTaskId: null,
  currentTaskName: null,
  currentTaskPurchaseOrders: null,
  currentTaskChangeOrders: null,
  currentTaskSteps: null,
  currentTaskTotalSteps: null,
  currentTaskCompletedSteps: null,
  currentTaskCompletionPercentage: null,
  currentTaskIsDone: null,
  currentTaskStartDate: null,
  currentTaskEndDate: null,
  currentTaskOwner: null,
  currentTaskMessage: null,
  errorMessage: null,
  currentTaskCompletionMessage: null,
  isCurrentTaskCompleting: null,
  isCurrentTaskDeleting: false,
  currentTaskDeletingMessage: null,
  currentTaskUpdateMessage: null
};

const currentTaskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrentTaskActionTypes.FETCH_CURRENT_TASK_START:
      return {
        ...state,
        isCurrentTaskFetching: true,
        currentTaskCompletionMessage: null,
      };
    case CurrentTaskActionTypes.FETCH_CURRENT_TASK_SUCCESS:
      const {
        taskName,
        taskStartDate,
        taskEndDate,
        taskOwner,
        purchaseOrders,
        _id,
        steps,
        completionPercentage,
        completedSteps,
        totalSteps,
        isTaskDone,
        changeOrders,
      } = action.payload;
      return {
        ...state,
        isCurrentTaskFetching: false,
        currentTaskId: _id,
        currentTaskName: taskName,
        currentTaskStartDate: taskStartDate,
        currentTaskEndDate: taskEndDate,
        currentTaskOwner: taskOwner,
        currentTaskPurchaseOrders: purchaseOrders,
        currentTaskSteps: steps,
        currentTaskCompletedSteps: completedSteps,
        currentTaskCompletionPercentage: completionPercentage,
        currentTaskTotalSteps: totalSteps,
        currentTaskIsDone: isTaskDone,
        currentTaskChangeOrders: changeOrders,
        currentTaskUpdating: null,
      };

    case CurrentTaskActionTypes.FETCH_CURRENT_TASK_FAILURE:
      return {
        ...state,
        isCurrentTaskFetching: false,
        errorMessage: action.payload,
      };
    case CurrentTaskActionTypes.COMPLETE_CURRENT_TASK_START:
      return {
        ...state,
        isCurrentTaskCompleting: true,
        currentTaskCompletionMessage: null,
      };
    case CurrentTaskActionTypes.COMPLETE_CURRENT_TASK_SUCCESS:
      return {
        ...state,
        isCurrentTaskCompleting: false,
        currentTaskCompletionMessage: action.payload,
      };
    case CurrentTaskActionTypes.COMPLETE_CURRENT_TASK_FAILURE:
      return {
        ...state,
        isCurrentTaskCompleting: false,
        currentTaskCompletionMessage: action.payload,
        isCurrentTaskCompleting: false,
      };
    case CurrentTaskActionTypes.DELETE_CURRENT_TASK_START:
      return {
        ...state,
        isCurrentTaskDeleting: true,
        currentTaskDeletionMessage: null,
      };
    case CurrentTaskActionTypes.DELETE_CURRENT_TASK_SUCCESS:
      return {
        ...state,
        isCurrentTaskDeleting: false,
        currentTaskDeletionMessage: action.payload,
      };
    case CurrentTaskActionTypes.DELETE_CURRENT_TASK_FAILURE:
      return {
        ...state,
        isCurrentTaskDeleting: false,
        currentTaskDeletionMessage: action.payload,
      };
    case CurrentTaskActionTypes.DELETE_STEP:
      let updatedSteps = state.currentTaskSteps.filter(
        (step) => step._id != action.payload
      );
      return {
        ...state,
        currentTaskSteps: updatedSteps,
      };
    case CurrentTaskActionTypes.UPDATE_CURRENT_TASK_START:
      return {
        currentTaskUpdating: true,
      };
    case CurrentTaskActionTypes.UPDATE_CURRENT_TASK_SUCCESS:
      return {
        currentTaskUpdating: false,
        currentTaskUpdateMessage: action.payload

      };
    case CurrentTaskActionTypes.UPDATE_CURRENT_TASK_FAILURE:
      return {
        currentTaskUpdating: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default currentTaskReducer;
