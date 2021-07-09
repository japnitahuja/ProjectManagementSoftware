import { OrganisationActionTypes } from "./organisation.types";

const INITIAL_STATE = {
  createOrganisationStart: false,
  createOrganisationSucessful: false,
  createOrganisationFail: false,
  fetchOrganisationStart: false,
  fetchOrganisationSuccess: false,
  fetchOrganisationFailure: false,
  fetchAllOrganisationsStart: false,
  fetchAllOrganisationsSuccess: false,
  fetchAllOrganisationsFailure: false,
  organisation: null,
  allOrganisations: [],
  organisationId: null,
  errorMessage: undefined,
  message: null,
};

const organisationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrganisationActionTypes.CREATE_ORGANISATION_START:
      return {
        ...state,
        createOrganisationStart: true,
        createOrganisationFail: false,
        createOrganisationSuccesful: false,
        errorMessage: null,
      };
    case OrganisationActionTypes.CREATE_ORGANISATION_SUCCESS:
      return {
        ...state,
        createOrganisationStart: false,
        createOrganisationSuccessful: true,
        message: "ORGANISATION CREATED SUCCESSFULLY!",
      };

    case OrganisationActionTypes.CREATE_ORGANISATION_FAILURE:
      return {
        ...state,
        createOrganisationStart: false,
        createOrganisationFail: true,
        errorMessage: action.payload,
      };
    case OrganisationActionTypes.FETCH_ORGANISATION_START:
      return {
        ...state,
        fetchOrganisationStart: true,
        fetchOrganisationFailure: false,
        fetchOrganisationSuccess: false,
      };
    case OrganisationActionTypes.FETCH_ORGANISATION_SUCCESS:
      console.log(action.payload, 'payload in the reducer')
      return {
        ...state,
        fetchOrganisationStart: false,
        fetchOrganisationSuccess: true,
        organisation: action.payload,
        organisationId: action.payload._id,
      };
    case OrganisationActionTypes.FETCH_ORGANISATION_FAILURE:
      return {
        ...state,
        fetchOrganisationStart: false,
        fetchOrganisationFailure: true,
        errorMessage: action.payload,
      };
    case OrganisationActionTypes.FETCH_ALL_ORGANISATIONS_START:
      return {
        ...state,
        fetchAllOrganisationsStart: true,
        fetchAllOrganisationsFailure: false,
        fetchAllOrganisationsSuccess: false,
      };
    case OrganisationActionTypes.FETCH_ALL_ORGANISATIONS_SUCCESS:
      return {
        ...state,
        fetchAllOrganisationsStart: false,
        fetchAllOrganisationsSuccess: true,
        allOrganisations: action.payload,
      };
    case OrganisationActionTypes.FETCH_ALL_ORGANISATIONS_FAILURE:
      return {
        ...state,
        fetchAllOrganisationsStart: false,
        fetchAllOrganisationsFailure: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default organisationReducer;
