import {createSelector} from "reselect";

const selectCurrentProject = (state) => state.currentProject;

export const selectCurrentProjectDetails = createSelector([selectCurrentProject], (currentProject) => currentProject);

export const selectCurrentProjectName = createSelector(
  [selectCurrentProjectDetails],
  (currentProject) => currentProject.currentProjectName
);

export const selectCurrentProjectStatus = createSelector(
    [selectCurrentProjectDetails],
    (currentProject) => currentProject.currentProjectStatus
  );

  export const selectCurrentProjectId = createSelector(
    [selectCurrentProjectDetails],
    (currentProject) => currentProject.currentProjectId
  );

  export const selectCurrentProjectTasks = createSelector(
    [selectCurrentProjectDetails],
    (currentProject) => currentProject.currentProjectTasks
  );

  export const selectCurrentProjectPurchaseOrders = createSelector(
    [selectCurrentProjectDetails],
    (currentProject) => currentProject.currentProjectPurchaseOrders
  )

  export const selectCurrentProjectChangeOrders = createSelector(
    [selectCurrentProjectDetails],
    (currentProject) => currentProject.currentProjectChangeOrders
  )

  export const selectIsProjectFetching = createSelector(
    [selectCurrentProjectDetails],
    (currentProject) => currentProject.isCurrentProjectFetching
  )

  export const selectCurrentProjectType = createSelector(
    [selectCurrentProjectDetails],
    (currentProject) => currentProject.currentProjectType
  )

  export const selectCurrentProjectRoles = createSelector(
    [selectCurrentProjectDetails],
    (currentProject) => currentProject.currentProjectRoles
  )

  export const selectCurrentProjectOwner = createSelector(
    [selectCurrentProjectDetails],
    (currentProject) => currentProject.currentProjectOwner
  )

  export const selectCurrentPropertyType = createSelector(
    [selectCurrentProjectDetails],
    (currentProject) => currentProject.selectCurrentPropertyType
  )

  export const selectCurrentProjectUsers = createSelector(
    [selectCurrentProjectDetails],
    (currentProject) => currentProject.currentProjectUsers
  )

  export const selectCurrentProjectBudget = createSelector(
    [selectCurrentProjectDetails],
    (currentProject) => currentProject.currentProjectBudget
  )

  export const selectCurrentProjectPublished = createSelector(
    [selectCurrentProjectDetails],
    (currentProject) => currentProject.currentProjectPublished
  )

  export const selectCurrentProjectPunchlists = createSelector(
    [selectCurrentProjectDetails],
    (currentProject) => currentProject.currentProjectPunchLists
  )
  
  