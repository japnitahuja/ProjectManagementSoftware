import { all, call, put, takeLatest, select} from "redux-saga/effects";
import { selectCurrentTaskId } from "../current-task/current-task.selectors";
import {completeStepQuestionSuccess, fetchCurrentStepFailure, fetchCurrentStepSuccess, completeStepQuestionFailure, completeStepSuccess, completeStepFailure } from "./current-step.actions";
import { selectCurrentStepId } from "./current-step.selectors";
import { CurrentStepActionTypes } from "./current-step.types";

export function* fetchCurrentStep({payload}){
  try {
      const stepId = payload
      console.log(stepId)
    let currentStep = yield fetch(`http://127.0.0.1:5000/step/${stepId}`)
    currentStep = yield currentStep.json()
    console.log(currentStep.step)
    currentStep.done
    ? yield put(fetchCurrentStepSuccess(currentStep.step))
    : yield put(fetchCurrentStepFailure('CURRENT PROJECCT FETTCHING FAILED'))
  } catch (error) {
    fetchCurrentStepFailure(error)
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
    stepQuestionCompletion = yield stepQuestionCompletion.json()
    stepQuestionCompletion.done ? 
    yield put(completeStepQuestionSuccess(stepQuestionCompletion.message)):
    yield put(completeStepQuestionFailure(stepQuestionCompletion.error))
  } catch (error) {
    yield put(completeStepQuestionFailure(error))
    console.log(error)
  }
}

export function* completeStep({payload}){
  let data = payload
  const stepId = data.stepId
  try {
    let stepCompletion = yield fetch(`http://127.0.0.1:5000/complete-step/${stepId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    stepCompletion = yield stepCompletion.json()
    stepCompletion.done ? 
    yield put(completeStepSuccess(stepCompletion.message)):
    yield put(completeStepFailure(stepCompletion.error))
  } catch (error) {
    yield put(completeStepFailure(error))
    console.log(error)
  }
}

export function* onStepQuestionCompletionStart(){
  yield takeLatest(CurrentStepActionTypes.COMPLETE_STEP_QUESTION_START, completeStepQuestion)
}

export function* onStepCompletionStart(){
  yield takeLatest(CurrentStepActionTypes.COMPLETE_STEP_START, completeStep)
}

export function* onCurrentStepFetchStart(){
  yield takeLatest(CurrentStepActionTypes.FETCH_CURRENT_STEP_START , fetchCurrentStep)
}

export function* currentStepSagas() {
  yield all([
    call(onCurrentStepFetchStart),
    call(onStepQuestionCompletionStart),
    call(onStepCompletionStart)
  ]);
}
