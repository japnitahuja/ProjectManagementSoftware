import stepPageTaskNavComponent from "../../components/step-page-task-nav/step-page-task-nav.component";
import { CurrentPunchListActionTypes } from "./punch-list.types";

const INITIAL_STATE = {
  isCurrentPunchListFetching: false,
  currentPunchListName: null,
  currentPunchListAssignedBy: null,
  currentPunchListAssignedTo: null,
  currentPunchListItems: null,
  isCurrentPunchListCreating: false,
  isCurrentPunchListItemCreated: false,
  currentPunchListCreationMessage: null,
  currentPunchListItemErrorMessage: null,
  currentPunchListItemCreationMessage: null,
  currentPunchListErrorMessage: null,
};

const currentPunchListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrentPunchListActionTypes.CREATE_PUNCH_LIST_START:
      return {
        ...state,
        isCurrentPunchListCreating: true,
      };
    case CurrentPunchListActionTypes.CREATE_PUNCH_LIST_SUCCESS:
      return {
        ...state,
        isCurrentPunchListCreating: false,
        currentPunchListCreationMessage: action.payload,
      };
    case CurrentPunchListActionTypes.CREATE_PUNCH_LIST_FAILURE:
      return {
        ...state,
        isCurrentPunchListCreating: false,
        currentPunchListErrorMessage: action.paylod,
      };
    case CurrentPunchListActionTypes.CREATE_PUNCH_LIST_ITEM_START:
      return {
        ...state,
        isCurrentPunchListItemCreated: true,
      };
    case CurrentPunchListActionTypes.CREATE_PUNCH_LIST_ITEM_SUCCESS:
      return {
        ...state,
        isCurrentPunchListItemCreated: false,
        currentPunchListItemCreationMessage: action.payload,
      };
    case CurrentPunchListActionTypes.CREATE_PUNCH_LIST_ITEM_FAILURE:
      return {
        ...state,
        isCurrentPunchListItemCreated: false,
        currentPunchListItemErrorMessage: action.payload,
      };
    case CurrentPunchListActionTypes.FETCH_CURRENT_PUNCH_LIST_START:
      return {
        ...state,
        isCurrentPunchListFetching: true,
      };
    case CurrentPunchListActionTypes.FETCH_CURRENT_PUNCH_LIST_SUCCESS:
      const {
        punchListName,
        punchListAssignedBy,
        punchListAssignedTo,
      } = action.payload;
      return {
        ...state,
        isCurrentPunchListFetching: false,
        currentPunchListName: punchListName,
        currentPunchListAssignedTo: punchListAssignedTo,
        currentPunchListAssignedBy: punchListAssignedBy,
      };
    case CurrentPunchListActionTypes.FETCH_CURRENT_PUNCH_LIST_FAILURE:
      return {
        ...state,
        isCurrentPunchListFetching: false,
        currentPunchListErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default currentPunchListReducer;
