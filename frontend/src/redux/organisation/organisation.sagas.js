import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { onTaskCompletionStart } from "../current-task/current-task.sagas";
import { selectUserId } from "../user/user.selectors";
import { createOrganisationFail, createOrganisationSucessful, fetchAllOrganisationFailure, fetchAllOrganisationSuccess, fetchOrganisationFailure, fetchOrganisationSuccess } from "./organisation.actions";
import { OrganisationActionTypes } from "./organisation.types";

export function* fetchAllOrganisations({payload}){
    let userId = yield select(selectUserId)
    
    try {
        let organisation = yield fetch(`http://127.0.0.1:5000/organisation/${userId}`)
        organisation = yield organisation.json()
        organisation.done?
        yield put(fetchAllOrganisationSuccess(organisation.org))
        : yield put(fetchAllOrganisationFailure('error!'))
    } catch (error) {
        console.log(error)
    }
}

export function* createOrganisation({payload}){
    let userId = yield select(selectUserId)
    let data = payload
    try {
        let org = yield fetch(
            `http://127.0.0.1:5000/create-organisation/${userId}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
          org = yield org.json();
          org.done
            ? yield put(createOrganisationSucessful(org.message))
            : yield put(createOrganisationFail('error!'));
    } catch (error) {
        console.log(error)
    }
}

export function* fetchOrganisation({payload}){
    let orgId = payload
    try {
        let organisation = yield fetch(`http://127.0.0.1:5000/org/${orgId}`)
        organisation = yield organisation.json()
        organisation.done?
        yield put(fetchOrganisationSuccess(organisation.org))
        : yield put(fetchOrganisationFailure('error!'))
    } catch (error) {
        console.log(error)
    }
}

export function* onFetchAllOrganisations(){
    yield takeLatest(OrganisationActionTypes.FETCH_ALL_ORGANISATIONS_START, fetchAllOrganisations)
}

export function* onCreateOrganisationStart(){
    yield takeLatest(OrganisationActionTypes.CREATE_ORGANISATION_START, createOrganisation)
}

export function* onFetchOrganisationStart(){
    yield takeLatest(OrganisationActionTypes.FETCH_ORGANISATION_START, fetchOrganisation)
}

export function* organisationSagas(){
    yield all([
        call(onFetchAllOrganisations),
        call(onCreateOrganisationStart),
        call(onFetchOrganisationStart)
    ])
}