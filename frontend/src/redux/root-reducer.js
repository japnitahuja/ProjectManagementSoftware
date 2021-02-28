import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import projectReducer from './project/project.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
      'user',
      'project'
    ],
  };

  
const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer
});

export default persistReducer(persistConfig, rootReducer);