import { all, call } from 'redux-saga/effects';
import { projectSagas } from './all-projects/all-projects.sagas';
import { taskSagas } from './all-tasks/all-tasks.sagas';
import { userSagas } from './user/user.sagas';
import {stepSagas} from './all-steps/all-steps.sagas'
import { currentProjectSagas } from './current-project/current-project.sagas';
import { currentTaskSagas } from './current-task/current-task.sagas';
import { currentStepSagas } from './current-step/current-step.sagas';
import {currentPurchaseOrderSagas} from './current-purchase-order/current-purchase-order.saga'

export default function* rootSaga(){
    yield all ([
        call(userSagas),
        call(projectSagas),
        call(taskSagas),
        call(stepSagas),
        call(currentProjectSagas),
        call(currentTaskSagas),
        call(currentStepSagas),
        call(currentPurchaseOrderSagas)
    ]);
}