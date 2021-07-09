import { OrganisationActionTypes } from "./organisation.types";

export const createOrganisationStart = (taskDetails) => ({
  type: OrganisationActionTypes.CREATE_ORGANISATION_START,
  payload: taskDetails,
});

export const createOrganisationSucessful = (message) => ({
  type: OrganisationActionTypes.CREATE_ORGANISATION_SUCCESS,
  payload: message,
});

export const createOrganisationFail = (errorMessage) => ({
  type: OrganisationActionTypes.CREATE_ORGANISATION_FAILURE,
  payload: errorMessage,
});

export const fetchAllOrganisationsStart = (userId) => ({
  type: OrganisationActionTypes.FETCH_ALL_ORGANISATIONS_START,
  payload: userId,
});

export const fetchAllOrganisationSuccess = (organisation) => ({
  type: OrganisationActionTypes.FETCH_ALL_ORGANISATIONS_SUCCESS,
  payload: organisation,
});

export const fetchAllOrganisationFailure = (error) => ({
  type: OrganisationActionTypes.FETCH_ALL_ORGANISATIONS_FAILURE,
  payload: error,
});

export const fetchOrganisationStart = (orgId) => ({
  type: OrganisationActionTypes.FETCH_ORGANISATION_START,
  payload: orgId,
});

export const fetchOrganisationSuccess = (organisation) => ({
  type: OrganisationActionTypes.FETCH_ORGANISATION_SUCCESS,
  payload: organisation,
});

export const fetchOrganisationFailure = (error) => ({
  type: OrganisationActionTypes.FETCH_ORGANISATION_FAILURE,
  payload: error,
});
