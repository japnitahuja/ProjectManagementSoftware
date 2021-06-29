import { all, call, put, takeLatest, select, delay} from "redux-saga/effects";
    import { createCostBookCategoryFail, createCostBookCategorySucessful, createCostCodeFailute, createCostCodeItemFailure, createCostCodeItemSuccess, createCostCodeSuccess, fetchCostBookFailure, fetchCostBookSuccess } from "./costbook.actions";
import { CostBookActionTypes } from "./costbook.types";

export function* fetchCostBook({payload}){
  try {
    let costBook = yield fetch(`http://127.0.0.1:5000/costbook`)
    costBook = yield costBook.json()

    costBook.done
    ? yield put(fetchCostBookSuccess(costBook.costbook))
    : yield put(fetchCostBookFailure('Error.'))
  } catch (error) {
    fetchCostBookFailure(error)
  }
}

export function* createCostBookCategory({payload}){
    let data = payload
    try {
        let costbookcategory = yield fetch(`http://127.0.0.1:5000/createCostBookCategory`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
        costbookcategory = yield costbookcategory.json()
        if(costbookcategory.done){
            yield put(createCostBookCategorySucessful(costbookcategory.message))
        }else{
            yield put(createCostBookCategoryFail('error'))
        }
    } catch (error) {
        console.log(error)
    }
}

export function* createCostBookCostCodeStart({payload}){
    let data = payload
    try {
        let resp = yield fetch(`http://127.0.0.1:5000/createCostBookCategory/createCostCode`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
         )
         resp = yield resp.json()
         if(resp.done){
             yield put(createCostCodeSuccess(resp.message))
         }else{
             yield put(createCostCodeFailute('error'))
         }
    } catch (error) {
        console.log(error)
    }
}

export function* createCostBookCostCodeItemStart({payload}){
    let data = payload
    try {
        let resp = yield fetch(`http://127.0.0.1:5000/createCostBookCategory/createCostCodeItem`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
         )
         resp = yield resp.json()
         if(resp.done){
             yield put(createCostCodeItemSuccess(resp.message))
         }else{
             yield put(createCostCodeItemFailure('error'))
         }
    } catch (error) {
        console.log(error)
    }
}

// export function* onTaskCreateStart(){
//   yield takeLatest(CostBookActionTypes.CREATE_TASK_START, createTask)
// }

export function* onCostBookFetchStart(){
  yield takeLatest(CostBookActionTypes.FETCH_COST_BOOK_START, fetchCostBook)
}

export function* onCreateCostCodeStart(){
    yield takeLatest(CostBookActionTypes.CREATE_COST_BOOK_COSTCODE_START, createCostBookCostCodeStart)
}

export function* onCreateCostCodeItemStart(){
    yield takeLatest(CostBookActionTypes.CREATE_COST_BOOK_COSTCODEITEM_START, createCostBookCostCodeItemStart)
}

export function* costBookSagas() {
  yield all([
    call(onCostBookFetchStart),
    call(onCreateCostCodeItemStart),
    call(onCreateCostCodeStart)
  ]);
}
