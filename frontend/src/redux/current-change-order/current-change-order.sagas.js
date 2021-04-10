import { all, call, put, takeLatest, select, delay} from "redux-saga/effects";
import { selectCurrentProjectId } from "../current-project/current-project.selectors";
import { fetchCurrentTaskStart } from "../current-task/current-task.actions";
import { fetchCurrentTask } from "../current-task/current-task.sagas";
import { selectUserId } from "../user/user.selectors";
import {createCOitemFailure, createCOitemSuccess, createChangeOrderFailure, createChangeOrderSuccess, fetchCurrentChangeOrderFailure, fetchCurrentChangeOrderStart, fetchCurrentChangeOrderSuccess} from './current-change-order.actions'
import { selectCurrentCOId } from "./current-change-order.selectors";
import { CurrentChangeOrderActionTypes } from "./current-change-order.types";

export function* createChangeOrderStart({payload}){
  try {
      let data = payload
      const projectId = yield select(selectCurrentProjectId)
      const userId = yield select(selectUserId)
      console.log(projectId)
      const taskId = data.taskId
      data['projectId'] = projectId
      data['userId'] = userId
      console.log(data)
    let changeOrderCreation = yield fetch(`http://127.0.0.1:5000/create-change-order/${taskId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      changeOrderCreation = yield changeOrderCreation.json()
      changeOrderCreation.done ? 
      yield put(createChangeOrderSuccess(changeOrderCreation.message)):
      yield put(createChangeOrderFailure('ERROR'))
      yield delay(500)
      yield put(fetchCurrentTaskStart(taskId))
  } catch (error) {
      console.log(error)
  }
}

export function* fetchCurrentCOStart({payload}){
    let COid = payload
    try {
        let CO = yield fetch(`http://127.0.0.1:5000/changeOrder/${COid}`)
        CO = yield CO.json()
        CO.done?
        yield put(fetchCurrentChangeOrderSuccess(CO.CO)):
        yield put(fetchCurrentChangeOrderFailure('error'))
    } catch (error) {
        console.log(error)
    }
}

export function* createCOitem({payload}){
    let data = payload
    let COid = data.coId
    console.log(COid, 'saga co id')
    try {
        
        let COitem = yield fetch(`http://127.0.0.1:5000/create-change-order-items/${COid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      COitem = yield COitem.json()
      COitem.done ? 
      yield put(createCOitemSuccess(COitem.message)):
      yield put(createCOitemFailure('ERROR'))
      yield delay(500)
      yield put(fetchCurrentChangeOrderStart(COid))
    } catch (error) {
        console.log(error)
    }
}

export function* onCreateChangeOrderStart(){
  yield takeLatest(CurrentChangeOrderActionTypes.CREATE_CHANGE_ORDER_START , createChangeOrderStart)
}

export function* onFetchCurrentChangeOrderStart(){
    yield takeLatest(CurrentChangeOrderActionTypes.FETCH_CURRENT_CHANGE_ORDER_START, fetchCurrentCOStart)
}

export function* onCreateCOitemStart(){
    yield takeLatest(CurrentChangeOrderActionTypes.CREATE_CURRENT_CO_ITEM_START, createCOitem)
}

export function* currentChangeOrderSagas() {
  yield all([
    call(onCreateChangeOrderStart),
    call(onFetchCurrentChangeOrderStart),
    call(onCreateCOitemStart)
  ]);
}
