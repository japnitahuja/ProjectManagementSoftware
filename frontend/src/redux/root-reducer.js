import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import projectReducer from "./all-projects/all-projects.reducer";
import stepReducer from "./all-steps/all-steps.reducer";
import taskReducer from "./all-tasks/all-tasks.reducer";
import currentProjectReducer from "./current-project/current-project.reducer";
import currentStepReducer from "./current-step/current-step.reducer";
import currentTaskReducer from "./current-task/current-task.reducer";
import userReducer from "./user/user.reducer";
import currentPurchaseOrderReducer from "./current-purchase-order/current-purchase-order.reducer";
import currentChangeOrderReducer from "./current-change-order/current-change-order.reducer";
import costBookReducer from "./costbook/costbook.reducer";
import organisationReducer from "./organisation/organisation.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "user",
    "project",
    "task",
    "step",
    "currentProject",
    "currentTask",
    "currentStep",
    "currentPurchaseOrder",
    "currentChangeOrder",
    "costBookReducer",
    "organisationReducer",
  ],
};

const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  task: taskReducer,
  step: stepReducer,
  currentProject: currentProjectReducer,
  currentTask: currentTaskReducer,
  currentStep: currentStepReducer,
  currentPurchaseOrder: currentPurchaseOrderReducer,
  currentChangeOrder: currentChangeOrderReducer,
  costBook: costBookReducer,
  organisation: organisationReducer,
});

export default persistReducer(persistConfig, rootReducer);
