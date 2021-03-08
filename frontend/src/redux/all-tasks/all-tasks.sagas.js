import { all, call, put, takeLatest, select} from "redux-saga/effects";
import { selectUserId } from "../user/user.selectors";
import { createTaskSucessful, createTaskFail, fetchTasksStart, fetchTasksFailure, fetchTasksSuccess } from "./all-tasks.actions";
import { TaskActionTypes } from "./all-tasks.types";

export function* createTask({payload}){
  try {
    let data = payload;
    let resp = yield fetch(`http://127.0.0.1:5000/create-task/${data.taskId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    resp = yield resp.json()
    if(resp.done){
        yield put(createTaskSucessful(resp.message));
        yield put(fetchTasksStart(data.projectId));
    }else{
      yield put(createTaskFail(resp.error))
    }
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
