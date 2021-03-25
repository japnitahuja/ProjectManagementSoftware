import { CurrentProjectActionTypes } from "./current-project.types";

const INITIAL_STATE = {
  isCurrentProjectFetching: false,
  currentProjectId: null,
  currentProjectName: null,
  currentProjectStatus: null,
  currentProjectPurchaseOrders: null,
  currentProjectTasks: null,
  currentProjectMessage: null,
  errorMessage: null
};

const currentProjectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrentProjectActionTypes.FETCH_CURRENT_PROJECT_START:
      return {
        ...state,
        isCurrentProjectFetching: true
      };
    case CurrentProjectActionTypes.FETCH_CURRENT_PROJECT_SUCCESS:
      const {tasks, purchaseOrders, _id, projectName, projectStatus} = action.payload
      return {
        ...state,
        isCurrentProjectFetching: false,
        currentProjectStatus: projectStatus,
        currentProjectName: projectName,
        currentProjectTasks: tasks,
        currentProjectPurchaseOrders: purchaseOrders,
        currentProjectId: _id,
        currentProjectMessage: 'PROJECT FETCHED!'
      };
   
    case CurrentProjectActionTypes.FETCH_CURRENT_PROJECT_FAILURE:
      return {
        ...state,
       isCurrentProjectFetching: false,
       errorMessage: action.payload
      };
    
    case CurrentProjectActionTypes.DELETE_CURRENT_TASK_IN_REDUCER:
      console.log(state)
      let updatedTasks = state.currentProjectTasks.filter(task => task._id != action.payload)
      console.log('current project reducer', updatedTasks)
      console.log(action.payload)
      return {
        ...state,
       currentProjectTasks: updatedTasks
      };
    default:
    return state;
  }
};

export default currentProjectReducer;
