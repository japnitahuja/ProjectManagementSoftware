import { CurrentProjectActionTypes } from "./current-project.types";

const INITIAL_STATE = {
  isCurrentProjectFetching: false,
  currentProjectId: null,
  currentProjectName: null,
  currentProjectStatus: null,
  currentProjectPurchaseOrders: null,
  currentProjectChangeOrders: null,
  currentProjectTasks: null,
  currentProjectMessage: null,
  currentProjectRoles: null,
  currentProjectUsers: null,
  currentProjectType: null,
  currentPropertyType: null,
  currentProjectOwner: null,
  currentProjectBudget:null, 
  currentProjectPublished:null,
  errorMessage: null,
  isCurrentProjectDeleting: false,
  deletionMessage: null,
  deletionError: null,
  inviteUserStart: false,
  inviteUserMessage: null,
  updateUserInProjectStart: null,
  updateUserInProjectMessage: null,
  updatePublishedInProjectStart: null,
  updatePublishedInProjectMessage: null,
  updateRolesInProjectStart: null,
  updateRolesInProjectMessage: null
};

const currentProjectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrentProjectActionTypes.FETCH_CURRENT_PROJECT_START:
      return {
        ...state,
        isCurrentProjectFetching: true,
      };
    case CurrentProjectActionTypes.FETCH_CURRENT_PROJECT_SUCCESS:
      const {
        tasks,
        purchaseOrders,
        _id,
        projectName,
        projectStatus,
        changeOrders,
        projectOwner,
        projectType,
        propertyType,
        projectRoles,
        projectBudget,
        published,
        Users
      } = action.payload;
      return {
        ...state,
        isCurrentProjectFetching: false,
        currentProjectStatus: projectStatus,
        currentProjectName: projectName,
        currentProjectTasks: tasks,
        currentProjectPurchaseOrders: purchaseOrders,
        currentProjectChangeOrders: changeOrders,
        currentProjectId: _id,
        currentProjectType: projectType,
        currentProjectOwner: projectOwner,
        currentPropertyType: propertyType,
        currentProjectRoles: projectRoles,
        currentProjectUsers: Users,
        currentProjectBudget: projectBudget,
        currentProjectPublished: published,
        currentProjectMessage: "PROJECT FETCHED!",
      };

    case CurrentProjectActionTypes.FETCH_CURRENT_PROJECT_FAILURE:
      return {
        ...state,
        isCurrentProjectFetching: false,
        errorMessage: action.payload,
      };

    case CurrentProjectActionTypes.DELETE_CURRENT_TASK_IN_REDUCER:
      console.log(state);
      let updatedTasks = state.currentProjectTasks.filter(
        (task) => task._id != action.payload
      );
      console.log("current project reducer", updatedTasks);
      console.log(action.payload);
      return {
        ...state,
        currentProjectTasks: updatedTasks,
      };
    case CurrentProjectActionTypes.DELETE_CURRENT_PROJECT_START:
      return {
        isCurrentProjectDeleting: true,
      };
    case CurrentProjectActionTypes.DELETE_CURRENT_PROJECT_SUCCESS:
      return {
        isCurrentProjectDeleting: false,
        deletionMessage: action.payload,
      };
    case CurrentProjectActionTypes.DELETE_CURRENT_PROJECT_FAILURE:
      return {
        isCurrentProjectDeleting: false,
        deletionError: action.payload,
      };
      case CurrentProjectActionTypes.INVITE_USER_START:
        return{
          ...state,
          inviteUserStart: true,
          inviteUserMessage: null
        }
      case CurrentProjectActionTypes.INVITE_USER_SUCCESS:
        return{
          ...state,
          inviteUserStart: false,
          inviteUserMessage: action.payload
        }
      case CurrentProjectActionTypes.INVITE_USER_FAILURE:
        return{
          ...state,
          inviteUserStart: false,
          inviteUserMessage: action.payload
        }
        case CurrentProjectActionTypes.UPDATE_USER_IN_PROJECT_START:
          return{
            ...state,
            updateUserInProjectStart: true,
            updateUserInProjectMessage: null
          }
        case CurrentProjectActionTypes.UPDATE_USER_IN_PROJECT_SUCCESS:
          return{
            ...state,
            updateUserInProjectStart: false,
            updateUserInProjectMessage: action.payload
          }
        case CurrentProjectActionTypes.UPDATE_USER_IN_PROJECT_FAILURE:
          return{
            ...state,
            updateUserInProjectStart: false,
            updateUserInProjectMessage: action.payload
          }
          case CurrentProjectActionTypes.UPDATE_PUBLISHED_IN_PROJECT_START:
          return{
            ...state,
            updatePublishedInProjectStart: true,
            updatePublishedInProjectMessage: null
          }
        case CurrentProjectActionTypes.UPDATE_PUBLISHED_IN_PROJECT_SUCCESS:
          return{
            ...state,
            updatePublishedInProjectStart: false,
            updatePublishedInProjectMessage: action.payload
          }
        case CurrentProjectActionTypes.UPDATE_PUBLISHED_IN_PROJECT_FAILURE:
          return{
            ...state,
            updatePublishedInProjectStart: false,
            updatePublishedInProjectMessage: action.payload
          }
        case CurrentProjectActionTypes.UPDATE_ROLES_IN_PROJECT_START:
          return{
            ...state,
            updateRolesInProjectStart: true
          }
        case CurrentProjectActionTypes.UPDATE_ROLES_IN_PROJECT_SUCCESS:
          return{
            ...state,
            updateRolesInProjectStart: false,
            updateRolesInProjectMessage: action.payload
          }
        case CurrentProjectActionTypes.UPDATE_ROLES_IN_PROJECT_FAILURE:
          return{
            ...state,
            updateRolesInProjectStart: false,
            updateRolesInProjectMessage: action.payload
          }
    default:
      return state;
  }
};

export default currentProjectReducer;
