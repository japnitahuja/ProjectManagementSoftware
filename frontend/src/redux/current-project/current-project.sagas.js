import { all, call, put, takeLatest, select} from "redux-saga/effects";
import {fetchCurrentProjectFailure, fetchCurrentProjectSuccess } from "./current-project.actions";
import { CurrentProjectActionTypes } from "./current-project.types";
import { selectUserId } from "../user/user.selectors"

export function* fetchCurrentProject({payload}){
  try {
      const projectId = payload
      console.log(projectId)
    let currentProject = yield fetch(`http://127.0.0.1:5000/project/${projectId}`)
    currentProject = yield currentProject.json()
    console.log(currentProject)
    currentProject.done
    ? yield put(fetchCurrentProjectSuccess(currentProject.project))
    : yield put(fetchCurrentProjectFailure('CURRENT PROJECCT FETTCHING FAILED'))
  } catch (error) {
    fetchCurrentProjectFailure(error)
  }
}

export function* onCurrentProjectFetchStart(){
  yield takeLatest(CurrentProjectActionTypes.FETCH_CURRENT_PROJECT_START , fetchCurrentProject)
}

export function* currentProjectSagas() {
  yield all([
    call(onCurrentProjectFetchStart)
  ]);
}
