import { all, call, put, takeLatest, select, delay} from "redux-saga/effects";
import { selectUserId } from "../user/user.selectors";
import { createTaskSucessful, createTaskFail, fetchTasksStart, fetchTasksFailure, fetchTasksSuccess } from "./all-tasks.actions";
import { TaskActionTypes } from "./all-tasks.types";
import {selectCurrentProjectId, selectCurrentProjectTasks} from '../current-project/current-project.selectors'
import { fetchCurrentProjectStart } from "../current-project/current-project.actions";

export function* createTask({payload}){
  try {
    let data = payload;
    let userId = yield select(selectUserId)
    let projectTasks = yield select(selectCurrentProjectTasks)
    let projectId = yield select(selectCurrentProjectId)
    data['userId'] = userId
    let resp = yield fetch(`http://127.0.0.1:5000/create-task/${data.projectId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    resp = yield resp.json()
    console.log(resp)
    if(resp.done){
        yield put(createTaskSucessful(resp.message));
    }else{
      yield put(createTaskFail(resp.error))
    }
    yield delay(500)
    yield put(fetchCurrentProjectStart(projectId))
  } catch (error) {
    console.log(error)
  }
}

export function* fetchTasks({payload}){
  try {
    let tasks = yield fetch(`http://127.0.0.1:5000/project/${payload}/task`)
    tasks = yield tasks.json()

    tasks.done
    ? yield put(fetchTasksSuccess(tasks.tasks.tasks))
    : yield put(fetchTasksFailure('Error.'))
  } catch (error) {
    fetchTasksFailure(error)
  }
}


export function* onTaskCreateStart(){
  yield takeLatest(TaskActionTypes.CREATE_TASK_START, createTask)
}

export function* onTaskFetchStart(){
  yield takeLatest(TaskActionTypes.FETCH_TASKS_START, fetchTasks)
}

export function* taskSagas() {
  yield all([
    call(onTaskCreateStart),
    call(onTaskFetchStart)
  ]);
}
