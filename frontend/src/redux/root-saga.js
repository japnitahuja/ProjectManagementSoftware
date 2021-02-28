import { all, call } from 'redux-saga/effects';
import { projectSagas } from './project/project.sagas';
import { userSagas } from './user/user.sagas';

export default function* rootSaga(){
    yield all ([
        call(userSagas),
        call(projectSagas)
    ]);
}