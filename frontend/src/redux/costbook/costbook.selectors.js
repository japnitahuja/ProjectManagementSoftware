import { createSelector } from "reselect";
const selectCostBook = (state) => state.costBook;

export const selectCostBookDetails = createSelector(
  [selectCostBook],
  (CB) => CB.costBook
);
export const selectFetchCostBookSuccess = createSelector(
  [selectCostBook],
  (CB) => CB.fetchCostBookSuccess
);

export const selectCreateCostBookCategorySuccess = createSelector(
  [selectCostBook],
  (CB) => CB.createCostBookCategorySuccessful
);

export const selectCreateCostCodeSuccess = createSelector(
  [selectCostBook],
  (CB) => CB.createCostCodeSuccess
);

export const selectCreateCostCodeItemSuccess = createSelector(
  [selectCostBook],
  (CB) => CB.createCostCodeItemSuccess
);

export const selectCreateCostCodeItemStart = createSelector(
  [selectCostBook],
  (CB) => CB.createCostCodeItemStart
);
