import { all, call, put, takeLatest, select} from "redux-saga/effects";
import { createProjectSucessful, createProjectFail } from "./project.actions";
import { ProjectActionTypes } from "./project.types";
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
        yield put(createProjectSucessful());
    }else{
      yield put(createProjectFail(resp.error))
    }
  } catch (error) {
    console.log(error)
  }
}


export function* onProjectCreateStart(){
  yield takeLatest(ProjectActionTypes.CREATE_PROJECT_START, createProject)
}

export function* projectSagas() {
  yield all([
    call(onProjectCreateStart)
  ]);
}
