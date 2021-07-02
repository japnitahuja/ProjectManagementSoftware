import { createSelector } from "reselect";
const selectCostBook = (state) => state.costBook

export const selectCostBookDetails = createSelector([selectCostBook], (CB) => CB.costBook)