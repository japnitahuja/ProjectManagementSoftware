import { createSelector } from "reselect";

const selectProject = (state) => state.project;

export const selectProjectDetails = createSelector(
  [selectProject],
  (project) => project
);

export const selectCreateProjectStart = createSelector(
  [selectProjectDetails],
  (project) => project.createProjectStart
);

export const selectUserProjects = createSelector(
  [selectProjectDetails],
  (project) => project.projects
);

export const selectAreProjectsFetching = createSelector(
  [selectProjectDetails],
  (project) => project.fetchProjectStart
);

export const selectProjectsFetched = createSelector(
  [selectProjectDetails],
  (project) => project.fetchProjectSuccess
);
