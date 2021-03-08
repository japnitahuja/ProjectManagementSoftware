import { all, call, put, takeLatest, select} from "redux-saga/effects";
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
        yield put(fetchStepsStart(taskId))
    }
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

export function* completeStepQuestion({payload}){
  const stepId = payload
  try {
    let stepQuestionCompletion = yield fetch(`http://127.0.0.1:5000/complete-step-question/${stepId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    stepQuestionCompletion = stepQuestionCompletion.json()
    stepQuestionCompletion.done ? 
    yield put(completeStepQuestionSuccess(stepQuestionCompletion.message)):
    yield put(completeStepQuestionFailure(stepQuestionCompletion.message))
  } catch (error) {
    yield put(completeStepQuestionFailure(error))
  }
}


export function* onStepCreateStart(){
  yield takeLatest(StepActionTypes.CREATE_STEP_START, createStep)
}

export function* onStepFetchStart(){
  yield takeLatest(StepActionTypes.FETCH_STEPS_START, fetchSteps)
}

export function* onStepQuestionCompletionStart(){
  yield takeLatest(StepActionTypes.COMPLETE_STEP_QUESTION_START, completeStepQuestion)
}

export function* stepSagas() {
  yield all([
    call(onStepCreateStart),
    call(onStepFetchStart),
    call(onStepQuestionCompletionStart)
  ]);
}
