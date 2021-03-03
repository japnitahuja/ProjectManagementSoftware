import { all, call, put, takeLatest, select} from "redux-saga/effects";
import { createProjectSucessful, createProjectFail, fetchProjectsStart, fetchProjectsFailure, fetchProjectsSuccess } from "./project.actions";
import { ProjectActionTypes } from "./all-project.types";
import { selectUserId } from "../user/user.selectors"

export function* createProject({payload}){
  try {
    let data = payload;
    let userId = yield select(selectUserId);
    console.log(data);
    let resp = yield fetch(`http://127.0.0.1:5000/create-project/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    resp = yield resp.json()
    if(resp.done){
        yield put(createProjectSucessful(resp.message));
    }else{
      yield put(createProjectFail(resp.error))
    }
  } catch (error) {
    console.log(error)
  }
}

export function* fetchProjects(){
  try {
    let userId = yield select(selectUserId);
    let projects = yield fetch(`http://127.0.0.1:5000/all-projects/${userId}`)
    projects = yield projects.json()
    projects.done
    ? yield put(fetchProjectsSuccess(projects.projects.projects))
    : yield put(fetchProjectsFailure(projects.error))
  } catch (error) {
    fetchProjectsFailure(error)
  }
}


export function* onProjectCreateStart(){
  yield takeLatest(ProjectActionTypes.CREATE_PROJECT_START, createProject)
}

export function* onProjectFetchStart(){
  yield takeLatest(ProjectActionTypes.FETCH_PROJECTS_START, fetchProjects)
}

export function* projectSagas() {
  yield all([
    call(onProjectCreateStart),
    call(onProjectFetchStart)
  ]);
}
