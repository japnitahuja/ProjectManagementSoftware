import React from "react";
import {Link} from "react-router-dom";


export default function TaskList({tasks}) {
    console.log(tasks);
    if(!tasks){
      tasks = []
    }
  return (
    <div>
        {tasks.map(({ taskName, taskStartDate, taskEndDate, completedSteps, totalSteps, completionPercentage, _id }) => {
          return (  
            <div key={_id} style = {{ padding: '10px', border:'1px solid black'}}>
              <Link to={`/task/${_id}`}> <h3>{taskName} ({taskStartDate} to {taskEndDate})</h3> </Link>
              steps: {completedSteps}/{totalSteps}<br/>
              Completion Percentage: {completionPercentage}
              <button>Complete Task</button>
            </div>
          );
        })}
    </div>
  );
}
