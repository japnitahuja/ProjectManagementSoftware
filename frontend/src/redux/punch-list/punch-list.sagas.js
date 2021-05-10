import { all, call, takeLatest } from "@redux-saga/core/effects";
import { CurrentPunchListActionTypes } from "./punch-list.types";

export function* fetchAllPunchListStart({payload}){
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export function* onFetchCurrentPunchListStart(){
    yield takeLatest(CurrentPunchListActionTypes.FETCH_CURRENT_PUNCH_LIST_START, fetchAllPunchListStart)
}

export function* currentPunchListSagas(){
    yield all([
        call()
    ])
}