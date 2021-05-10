import { all, call, put, takeLatest, select, delay} from "redux-saga/effects";
import { createProjectSucessful, createProjectFail, fetchProjectsStart, fetchProjectsFailure, fetchProjectsSuccess, createProjectTemplateSuccess, createProjectTemplateFailure } from "./all-projects.actions";
import { ProjectActionTypes } from "./all-projects.types";
import { selectUserId } from "../user/user.selectors"

export function* createProject({payload}){
  try {
    let data = payload;
    let userId = yield select(selectUserId);
    console.log(userId);
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
    yield delay(500)
    yield put(fetchProjectsStart());
  } catch (error) {
    console.log(error)
  }
}

export function* fetchProjects(){
  try {
    // const token = yield JSON.parse(localStorage.getItem('token'))
    // console.log(token)
    const token =  localStorage.getItem('token')
    console.log(token)
    let userId = yield select(selectUserId);
    let projects = yield fetch(`http://127.0.0.1:5000/all-projects/${userId}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        // "Authorization" : `Bearer ${token}`,
        "UserPermission": 'ADMIN'
      }
    })
    projects = yield projects.json()
    projects.done
    ? yield put(fetchProjectsSuccess(projects.projects.projects))
    : yield put(fetchProjectsFailure(projects.error))
  } catch (error) {
    fetchProjectsFailure(error)
  }
}

export function* createProjectTemplate({payload}){
  try {
    let data = payload;
    let userId = yield select(selectUserId);
    console.log(userId);
    console.log(data);
    let resp = yield fetch(`http://127.0.0.1:5000/test-template/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    resp = yield resp.json()
    if(resp.done){
      yield put(createProjectTemplateSuccess(resp.message));
    }else{
      yield put(createProjectTemplateFailure(resp.error))
    }
    yield delay(500)
    yield put(fetchProjectsStart());
  } catch (error) {
    console.log(error)
  }
}


export function* onProjectCreateStart(){
  yield takeLatest(ProjectActionTypes.CREATE_PROJECT_START, createProject)
}

export function* onProjectFetchStart(){
  yield takeLatest(ProjectActionTypes.FETCH_PROJECTS_START, fetchProjects)
}

export function* OnProjectTemplateCreateStart(){
  yield takeLatest(ProjectActionTypes.CREATE_PROJECT_TEMPLATE_START, createProjectTemplate)
}

export function* projectSagas() {
  yield all([
    call(onProjectCreateStart),
    call(onProjectFetchStart),
    call(OnProjectTemplateCreateStart)
  ]);
}
