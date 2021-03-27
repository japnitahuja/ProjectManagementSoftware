import { all, call, put, takeLatest, select} from "redux-saga/effects";
import {deleteCurrentProjectFailure, deleteCurrentProjectSuccess, fetchCurrentProjectFailure, fetchCurrentProjectSuccess } from "./current-project.actions";
import { CurrentProjectActionTypes } from "./current-project.types";
import { selectUserId } from "../user/user.selectors"
import { deleteProject } from "../all-projects/all-projects.actions";

export function* fetchCurrentProject({payload}){
  try {
      const projectId = payload
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

export function* deleteCurrentProject({payload}){
  try {
    const projectId = payload
    console.log(projectId)
    yield put(deleteProject(projectId))
    let userId = yield select(selectUserId)
    userId = {userId: userId}
    console.log(userId)
    let projectDeletion = yield fetch(`http://127.0.0.1:5000/project/${projectId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userId),

    })
    projectDeletion = yield projectDeletion.json()
    projectDeletion.done?
    yield put(deleteCurrentProjectSuccess(projectDeletion.message)):
    yield put(deleteCurrentProjectFailure(projectDeletion.error))
  } catch (error) {
    console.log(error)
    deleteCurrentProjectFailure(error)
    console.log(error)
  }
}

export function* onCurrentProjectFetchStart(){
  yield takeLatest(CurrentProjectActionTypes.FETCH_CURRENT_PROJECT_START , fetchCurrentProject)
}

export function* onCurrentProjectDeleteStart(){
  yield takeLatest(CurrentProjectActionTypes.DELETE_CURRENT_PROJECT_START, deleteCurrentProject)
}

export function* currentProjectSagas() {
  yield all([
    call(onCurrentProjectFetchStart),
    call(onCurrentProjectDeleteStart)
  ]);
}
