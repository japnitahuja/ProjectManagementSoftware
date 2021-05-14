import { all, call, put, takeLatest, select, delay } from "redux-saga/effects";
import {
  UpdatePublishedInProjectFailure,
  UpdatePublishedInProjectSuccess,
  deleteCurrentProjectFailure,
  deleteCurrentProjectSuccess,
  fetchCurrentProjectFailure,
  fetchCurrentProjectStart,
  fetchCurrentProjectSuccess,
  inviteUserFailure,
  inviteUserSuccess,
  UpdateUserInProjectFailure,
  UpdateUserInProjectSuccess,
  UpdateRolesInProjectSuccess,
  UpdateRolesInProjectFailure,
} from "./current-project.actions";
import { CurrentProjectActionTypes } from "./current-project.types";
import { selectUserId } from "../user/user.selectors";
import { deleteProject } from "../all-projects/all-projects.actions";
import { selectCurrentProjectId } from "./current-project.selectors";
import currentProjectReducer from "./current-project.reducer";
import { setUserPermission } from "../user/user.actions";

export function* fetchCurrentProject({ payload }) {
  try {
    const projectId = payload;
    const userId = yield select(selectUserId);
    const token = localStorage.getItem("token");
    let currentProject = yield fetch(
      `http://127.0.0.1:5000/project/${projectId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          role: "ADMIN",
          authorization: `Bearer ${token}`,
        },
      }
    );
    currentProject = yield currentProject.json();
    console.log("saga", currentProject);
    currentProject.done
      ? yield put(fetchCurrentProjectSuccess(currentProject.project))
      : yield put(
          fetchCurrentProjectFailure("CURRENT PROJECCT FETTCHING FAILED")
        );
  } catch (error) {
    fetchCurrentProjectFailure(error);
  }
}

export function* deleteCurrentProject({ payload }) {
  try {
    const projectId = payload;
    console.log(projectId);
    yield put(deleteProject(projectId));
    let userId = yield select(selectUserId);
    userId = { userId: userId };
    console.log(userId);
    let projectDeletion = yield fetch(
      `http://127.0.0.1:5000/project/${projectId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userId),
      }
    );
    projectDeletion = yield projectDeletion.json();
    projectDeletion.done
      ? yield put(deleteCurrentProjectSuccess(projectDeletion.message))
      : yield put(deleteCurrentProjectFailure(projectDeletion.error));
  } catch (error) {
    console.log(error);
    deleteCurrentProjectFailure(error);
    console.log(error);
  }
}

export function* inviteUser({ payload }) {
  try {
    let data = payload;
    let projectId = yield select(selectCurrentProjectId);
    data["projectId"] = projectId;
    let resp = yield fetch("http://127.0.0.1:5000/inviteUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    resp = yield resp.json();
    if (resp.done) {
      yield put(inviteUserSuccess(resp.message));
      yield put(fetchCurrentProjectStart(projectId));
    } else {
      yield put(inviteUserFailure(resp.message));
    }
  } catch (error) {
    console.log(error);
    yield put(inviteUserFailure(error));
  }
}

export function* updateUserInProject({ payload }) {
  try {
    let data = payload;
    let projectId = yield select(selectCurrentProjectId);
    console.log(data, "saga data");
    console.log(projectId);
    let resp = yield fetch(
      `http://127.0.0.1:5000/updatePermissions/${projectId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    resp = yield resp.json();
    if (resp.done) {
      yield put(UpdateUserInProjectSuccess(resp.message));
      yield delay(500);
      yield put(fetchCurrentProjectStart(projectId));
    } else {
      yield put(UpdateUserInProjectFailure(resp.message));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* updatePublishedInProject() {
  try {
    console.log("Inside update published saga");
    let projectId = yield select(selectCurrentProjectId);
    let resp = yield fetch(`http://127.0.0.1:5000/publish/${projectId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    resp = yield resp.json();
    if (resp.done) {
      yield put(UpdatePublishedInProjectSuccess(resp.message));
      yield delay(500);
      yield put(fetchCurrentProjectStart(projectId));
    } else {
      yield put(UpdatePublishedInProjectFailure(resp.message));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* updateRoles({payload}){
  try {
    let data = payload
    let projectId = yield select(selectCurrentProjectId);
    let resp = yield fetch(`http://127.0.0.1:5000/updateRoles/${projectId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    resp = yield resp.json();
    if (resp.done) {
      yield put(UpdateRolesInProjectSuccess(resp.message));
      yield delay(500);
      yield put(fetchCurrentProjectStart(projectId));
    } else {
      yield put(UpdateRolesInProjectFailure(resp.message));
    }
  } catch (error) {
    console.log(error)
  }
}

export function* onCurrentProjectFetchStart() {
  yield takeLatest(
    CurrentProjectActionTypes.FETCH_CURRENT_PROJECT_START,
    fetchCurrentProject
  );
}

export function* onCurrentProjectDeleteStart() {
  yield takeLatest(
    CurrentProjectActionTypes.DELETE_CURRENT_PROJECT_START,
    deleteCurrentProject
  );
}

export function* onInviteUserStart() {
  yield takeLatest(CurrentProjectActionTypes.INVITE_USER_START, inviteUser);
}

export function* onUpdateUserStart() {
  yield takeLatest(
    CurrentProjectActionTypes.UPDATE_USER_IN_PROJECT_START,
    updateUserInProject
  );
}

export function* onUpdateRolesStart(){
  yield takeLatest(
    CurrentProjectActionTypes.UPDATE_ROLES_IN_PROJECT_START,
    updateRoles
  )
}

export function* onUpdatePublishedStart() {
  yield takeLatest(
    CurrentProjectActionTypes.UPDATE_PUBLISHED_IN_PROJECT_START,
    updatePublishedInProject
  );
}

export function* currentProjectSagas() {
  yield all([
    call(onCurrentProjectFetchStart),
    call(onCurrentProjectDeleteStart),
    call(onInviteUserStart),
    call(onUpdateUserStart),
    call(onUpdatePublishedStart),
    call(onUpdateRolesStart)
  ]);
}
