import { CurrentTaskActionTypes } from "./current-task.types";

const INITIAL_STATE = {
  isCurrentTaskFetching: false,
  currentTaskId: null,
  currentTaskName: null,
  currentTaskPurchaseOrders: null,
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
  isCurrentTaskCompleting: null
};

const currentTaskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrentTaskActionTypes.FETCH_CURRENT_TASK_START:
      return {
        ...state,
        isCurrentTaskFetching: true,
        currentTaskCompletionMessage: null
      };
    case CurrentTaskActionTypes.FETCH_CURRENT_TASK_SUCCESS:
      const {taskName, taskStartDate, taskEndDate, taskOwner, purchaseOrders, _id, steps, completionPercentage, completedSteps, totalSteps, isTaskDone} = action.payload
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
        currentTaskIsDone: isTaskDone
      };
   
    case CurrentTaskActionTypes.FETCH_CURRENT_TASK_FAILURE:
      return {
        ...state,
       isCurrentTaskFetching: false,
       errorMessage: action.payload
      };
    case CurrentTaskActionTypes.COMPLETE_CURRENT_TASK_START:
      return{
        ...state,
        isCurrentTaskCompleting: true,
        currentTaskCompletionMessage: null
      }
    case CurrentTaskActionTypes.COMPLETE_CURRENT_TASK_SUCCESS:
      return{
        ...state,
        isCurrentTaskCompleting: false,
        currentTaskCompletionMessage: action.payload
      }
    case CurrentTaskActionTypes.COMPLETE_CURRENT_TASK_FAILURE:
      return{
        ...state,
        isCurrentTaskCompleting: false,
        currentTaskCompletionMessage: action.payload,
        isCurrentTaskCompleting: false
      }
    default:
    return state;
  }
};

export default currentTaskReducer;
