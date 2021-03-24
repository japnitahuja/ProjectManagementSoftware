import React from "react";
import { ProjectItem } from "../project-item/project-item.component";


export default function ProjectList({ projects }) {
    if(!projects){
        projects = [];
    }
  return (
    <div>
        {projects.map(({ projectName, projectStatus, _id }) => {
          return (
            <ProjectItem projectName = {projectName} projectStatus = {projectStatus} id={_id}/>
          );
        })}
    </div>
  );
}