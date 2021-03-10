import { all, call, put, takeLatest, select} from "redux-saga/effects";
import { selectCurrentProjectId } from "../current-project/current-project.selectors";
import {createPurchaseOrderFailure, createPurchaseOrderSuccess} from './current-purchase-order.actions'
import { CurrentPurchaseOrderActionTypes } from "./current-purchase-order.types";

export function* createPurchaseOrderStart({payload}){
  try {
      let data = payload
      const projectId = yield select(selectCurrentProjectId)
      const taskId = data.taskId
      data['projectId'] = projectId
    let purchaseOrderCreation = yield fetch(`http://127.0.0.1:5000/complete-step/${taskId}`, {
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
  } catch (error) {
      console.log(error)
  }
}

export function* onCreatePurchaseOrderStart(){
  yield takeLatest(CurrentPurchaseOrderActionTypes.CREATE_PURCHASE_ORDER_START , createPurchaseOrderStart)
}

export function* currentPurchaseOrderSagas() {
  yield all([
    call(onCreatePurchaseOrderStart)
  ]);
}
