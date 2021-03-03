import {createSelector} from "reselect";

const selectProject = (state) => state.project;

export const selectProjectDetails = createSelector([selectProject], (project) => project);

export const selectCreateProjectStart = createSelector(
  [selectProjectDetails],
  (project) => project.createProjectStart
);

export const selectUserProjects = createSelector(
  [selectProjectDetails],
  (project) => project.projects
)