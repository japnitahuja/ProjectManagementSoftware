import {createSelector} from "reselect";

const selectProject = (state) => state.project;

export const selectProject = createSelector([selectProject], (project) => project);

export const selectCreateProjectStart = createSelector(
  [selectProject],
  (project) => project.createProjectStart
);
