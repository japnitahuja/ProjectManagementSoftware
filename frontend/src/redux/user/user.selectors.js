import {createSelector} from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => user);

export const selectSignUpStart = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.signUpStart
);

export const selectSignUpSuccessful = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.signUpSuccessful
);

export const selectSignUpFail = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.signUpFail
);
