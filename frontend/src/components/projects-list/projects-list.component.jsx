import React from "react";
import ProjectItem from "../project-item/project-item.component";

export default function ProjectList({ projects }) {
  if (!projects) {
    projects = [];
  }
  console.log(projects);
  return (
    <div>
      {projects.map(
        (
          {
            published,
            projectBudget,
            totalTasks,
            completedTasks,
            projectName,
            projectStatus,
            _id,
          },
          index
        ) => {
          return (
            <ProjectItem
              published={published}
              projectBudget={projectBudget}
              totalTasks={totalTasks}
              completedTasks={completedTasks}
              key={_id}
              projectName={projectName}
              projectStatus={projectStatus}
              id={_id}
            />
          );
        }
      )}
    </div>
  );
}
