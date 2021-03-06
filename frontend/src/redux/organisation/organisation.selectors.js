import { createSelector } from "reselect";

const selectOrg = (state) => state.organisation;

export const selectCurrentOrg = createSelector([selectOrg], (org) => org);

export const selectAllOrganisations = createSelector(
  [selectCurrentOrg],
  (org) => org.allOrganisations
);

export const selectCurrentOrganisationId = createSelector(
  [selectCurrentOrg],
  (org) => org.organisationId
);

export const selectFetchAllOrganisationsSuccess = createSelector(
  [selectCurrentOrg],
  (org) => org.fetchAllOrganisationsSuccess
);

export const selectCreateOrganisationSuccessful = createSelector(
  [selectCurrentOrg],
  (org) => org.createOrganisationSuccessful
);

export const selectCreateOrganisationStart = createSelector(
  [selectCurrentOrg],
  (org) => org.createOrganisationStart
);
