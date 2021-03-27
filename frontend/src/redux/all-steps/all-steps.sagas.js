import { all, call, put, takeLatest, select, delay} from "redux-saga/effects";
import { fetchCurrentTaskStart } from "../current-task/current-task.actions";
import { completeStepQuestionFailure, completeStepQuestionSuccess, createStepFail, createStepSucessful, fetchStepsFailure, fetchStepsStart, fetchStepsSuccess } from "./all-steps.actions";
import { StepActionTypes } from "./all-steps.types";

export function* createStep({payload}){
  try {
    let data = payload;
    const taskId = data.taskId
    console.log(data);
    let resp = yield fetch(`http://127.0.0.1:5000/create-step/${taskId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    resp = yield resp.json()
    if(resp.done){
      yield put(createStepSucessful(resp.message));
    }
    yield delay(500)
    yield put(fetchCurrentTaskStart(taskId))
    
  } catch (error) {
    console.log(error)
    yield put(createStepFail(error))
  }
}

export function* fetchSteps({payload}){
  const taskId = payload
  try {
    let steps = yield fetch(`http://127.0.0.1:5000/task/${taskId}/step`)
    steps = yield steps.json()
    steps.done
    ? yield put(fetchStepsSuccess(steps.steps.steps))
    : yield put(fetchStepsFailure('Steps not fetched!'))
  } catch (error) {
    yield put(fetchStepsFailure(error))
  }
}


export function* onStepCreateStart(){
  yield takeLatest(StepActionTypes.CREATE_STEP_START, createStep)
}

export function* onStepFetchStart(){
  yield takeLatest(StepActionTypes.FETCH_STEPS_START, fetchSteps)
}

export function* stepSagas() {
  yield all([
    call(onStepCreateStart),
    call(onStepFetchStart),
  ]);
}
