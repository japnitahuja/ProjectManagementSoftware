import { all, call, put, takeLatest, select } from "redux-saga/effects";
import { deleteCurrentTaskInReducer } from "../current-project/current-project.actions";
import { selectCurrentProjectId } from "../current-project/current-project.selectors";
import {
  completeCurrentTaskFailure,
  completeCurrentTaskSuccess,
  fetchCurrentTaskFailure,
  fetchCurrentTaskSuccess,
  deleteCurrentTaskSuccess,
  deleteCurrentTaskFailure,
  updateCurrentTaskSuccess,
  updateCurrentTaskFailure,
} from "./current-task.actions";
import { selectCurrentTaskId } from "./current-task.selectors";
import { CurrentTaskActionTypes } from "./current-task.types";

export function* fetchCurrentTask({ payload }) {
  try {
    const taskId = payload;
    console.log(taskId);
    let currentTask = yield fetch(`http://127.0.0.1:5000/task/${taskId}`);
    currentTask = yield currentTask.json();
    currentTask.done
      ? yield put(fetchCurrentTaskSuccess(currentTask.task))
      : yield put(fetchCurrentTaskFailure("CURRENT PROJECCT FETTCHING FAILED"));
  } catch (error) {
    fetchCurrentTaskFailure(error);
  }
}

export function* completeTask({ payload }) {
  try {
    console.log('task completion starts at saga')
    let taskId = payload
    let projectId = yield select(selectCurrentProjectId);
    projectId = yield { projectId: projectId }
    console.log('saga project id', projectId)
    let taskCompletion = yield fetch(
      `http://127.0.0.1:5000/complete-task/${taskId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectId),
      }
    );
    taskCompletion = yield taskCompletion.json();
    taskCompletion.done
      ? yield put(completeCurrentTaskSuccess(taskCompletion.message))
      : yield put(completeCurrentTaskFailure(taskCompletion.error));
  } catch (error) {
    console.log(error);
    yield put(completeCurrentTaskFailure(error));
  }
}

export function* deleteTask({ payload }) {
  try {
    let taskId = payload;
    yield put(deleteCurrentTaskInReducer(taskId));
    let projectId = yield select(selectCurrentProjectId);
    projectId = { projectId: projectId };
    console.log(projectId);
    let taskDeletion = yield fetch(`http://127.0.0.1:5000/task/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectId),
    });
    taskDeletion = yield taskDeletion.json();
    if (taskDeletion.done) {
      yield put(deleteCurrentTaskSuccess(taskDeletion.message));
    } else {
      yield put(deleteCurrentTaskFailure(taskDeletion.error));
    }
  } catch (error) {
    console.log(error);
    yield put(deleteCurrentTaskFailure(error));
  }
}

export function* updateTask({ payload }) {
  try {
    let {taskId} = payload;
    let data = {};
    console.log(payload)
    for (const key of Object.keys(payload)) {
      console.log(key);
      if(key != "taskId"){
        data[key] = payload[key];
      }
    }
    
    let taskUpdate = yield fetch(`http://127.0.0.1:5000/task/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    taskUpdate = yield taskUpdate.json();
    if (taskUpdate.done) {
      yield put(updateCurrentTaskSuccess(taskUpdate.message));
    } else {
      yield put(updateCurrentTaskFailure(taskUpdate.error));
    }
  } catch (error) {
    console.log(error);
    yield put(updateCurrentTaskFailure(error));
  }
}

export function* onCurrentTaskFetchStart() {
  yield takeLatest(
    CurrentTaskActionTypes.FETCH_CURRENT_TASK_START,
    fetchCurrentTask
  );
}

export function* onTaskCompletionStart() {
  yield takeLatest(
    CurrentTaskActionTypes.COMPLETE_CURRENT_TASK_START,
    completeTask
  );
}

export function* onDeleteTaskStart() {
  yield takeLatest(
    CurrentTaskActionTypes.DELETE_CURRENT_TASK_START,
    deleteTask
  );
}

export function* onUpdateTaskStart() {
  yield takeLatest(
    CurrentTaskActionTypes.UPDATE_CURRENT_TASK_START,
    updateTask
  );
}

export function* currentTaskSagas() {
  yield all([
    call(onCurrentTaskFetchStart),
    call(onTaskCompletionStart),
    call(onDeleteTaskStart),
    call(onUpdateTaskStart)
  ]);
}
