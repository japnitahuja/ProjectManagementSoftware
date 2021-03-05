import React from "react";
import {Link} from "react-router-dom";


export default function ProjectList({ projects }) {
    if(!projects){
        projects = [];
    }
  return (
    <div>
        {projects.map(({ projectName, projectStatus, _id }) => {
          return (
            <div key={_id} style = {{ padding: '10px', border:'1px solid black'}}>
              <Link to={`/project/${_id}`}> <h3>{projectName} ({projectStatus})</h3> </Link>
            </div>
          );
        })}
    </div>
  );
}
