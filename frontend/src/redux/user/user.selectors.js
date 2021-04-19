import {createSelector} from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => user);

export const selectSignUpStart = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.signUpStart
);

export const selectUserId = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser._id
);

export const selectSignUpSuccessful = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.signUpSuccessful
);

export const selectCurrentUserFirstName = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.firstName
);

export const selectCurrentUserLastName = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.lastName
);

export const selectSignUpFail = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.signUpFail
);

export const selectSignInSignUpMessage = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.message
)

export const selectInviteUserMessage = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.inviteUserMessage
)

