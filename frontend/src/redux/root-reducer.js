import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import projectReducer from './all-projects/all-projects.reducer';
import stepReducer from './all-steps/all-steps.reducer';
import taskReducer from './all-tasks/all-tasks.reducer';
import currentProjectReducer from './current-project/current-project.reducer';
import currentStepReducer from './current-step/current-step.reducer';
import currentTaskReducer from './current-task/current-task.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
      'user',
      'project',
      'task'
    ],
  };

  
const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  task: taskReducer,
  step: stepReducer,
  currentProject: currentProjectReducer,
  currentTask: currentTaskReducer,
  currentStep: currentStepReducer
});

export default persistReducer(persistConfig, rootReducer);