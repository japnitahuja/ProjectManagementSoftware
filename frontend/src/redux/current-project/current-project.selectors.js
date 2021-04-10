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
    (currentProject) => currentProject.selectCurrentProjectChangeOrders
  )

  export const selectIsProjectFetching = createSelector(
    [selectCurrentProjectDetails],
    (currentProject) => currentProject.isCurrentProjectFetching
  )

