import { all, call } from 'redux-saga/effects';
import { projectSagas } from './all-projects/all-projects.sagas';
import { taskSagas } from './all-tasks/all-tasks.sagas';
import { userSagas } from './user/user.sagas';
import {stepSagas} from './all-steps/all-steps.sagas'

export default function* rootSaga(){
    yield all ([
        call(userSagas),
        call(projectSagas),
        call(taskSagas),
        call(stepSagas)
    ]);
}