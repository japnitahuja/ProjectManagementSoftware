import { all, call, put, takeLatest, select} from "redux-saga/effects";
import { selectCurrentProjectId } from "../current-project/current-project.selectors";
import { fetchCurrentTaskStart } from "../current-task/current-task.actions";
import { fetchCurrentTask } from "../current-task/current-task.sagas";
import { selectUserId } from "../user/user.selectors";
import {createPoitemFailure, createPoitemSuccess, createPurchaseOrderFailure, createPurchaseOrderSuccess, fetchCurrentPurchaseOrderFailure, fetchCurrentPurchaseOrderStart, fetchCurrentPurchaseOrderSuccess} from './current-purchase-order.actions'
import { selectCurrentPOId } from "./current-purchase-order.selector";
import { CurrentPurchaseOrderActionTypes } from "./current-purchase-order.types";

export function* createPurchaseOrderStart({payload}){
  try {
      let data = payload
      const projectId = yield select(selectCurrentProjectId)
      const userId = yield select(selectUserId)
      console.log(projectId)
      const taskId = data.taskId
      data['projectId'] = projectId
      data['userId'] = userId
      console.log(data)
    let purchaseOrderCreation = yield fetch(`http://127.0.0.1:5000/create-purchase-order/${taskId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      purchaseOrderCreation = yield purchaseOrderCreation.json()
      purchaseOrderCreation.done ? 
      yield put(createPurchaseOrderSuccess(purchaseOrderCreation.message)):
      yield put(createPurchaseOrderFailure('ERROR'))
      yield put(fetchCurrentTaskStart(taskId))
  } catch (error) {
      console.log(error)
  }
}

export function* fetchCurrentPOStart({payload}){
    let POid = payload
    try {
        let PO = yield fetch(`http://127.0.0.1:5000/purchaseOrder/${POid}`)
        PO = yield PO.json()
        PO.done?
        yield put(fetchCurrentPurchaseOrderSuccess(PO.PO)):
        yield put(fetchCurrentPurchaseOrderFailure('error'))
    } catch (error) {
        console.log(error)
    }
}

export function* createPOitem({payload}){
    let data = payload
    let POid = data.poId
    try {
        
        let POitem = yield fetch(`http://127.0.0.1:5000/create-purchase-order-items/${POid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      POitem = yield POitem.json()
      POitem.done ? 
      yield put(createPoitemSuccess(POitem.message)):
      yield put(createPoitemFailure('ERROR'))
      yield put(fetchCurrentPurchaseOrderStart(POid))
    } catch (error) {
        console.log(error)
    }
}

export function* onCreatePurchaseOrderStart(){
  yield takeLatest(CurrentPurchaseOrderActionTypes.CREATE_PURCHASE_ORDER_START , createPurchaseOrderStart)
}

export function* onFetchCurrentPurchaseOrderStart(){
    yield takeLatest(CurrentPurchaseOrderActionTypes.FETCH_CURRENT_PURCHASE_ORDER_START, fetchCurrentPOStart)
}

export function* onCreatePOitemStart(){
    yield takeLatest(CurrentPurchaseOrderActionTypes.CREATE_CURRENT_PO_ITEM_START, createPOitem)
}

export function* currentPurchaseOrderSagas() {
  yield all([
    call(onCreatePurchaseOrderStart),
    call(onFetchCurrentPurchaseOrderStart),
    call(onCreatePOitemStart)
  ]);
}
