import { createSelector } from "reselect"

const selectOrg = (state) => state.organisation

export const selectCurrentOrg = createSelector([selectOrg], (org) => org)

export const selectAllOrganisations = createSelector(
    [selectCurrentOrg],
    (org) => org.allOrganisations
)

export const selectCurrentOrganisationId = createSelector(
    [selectCurrentOrg],
    (org) => org.organisationId
)