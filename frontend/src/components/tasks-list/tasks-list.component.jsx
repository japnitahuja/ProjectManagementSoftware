import React from "react";
import {Link} from "react-router-dom";
import TaskItem from "../task-item/task-item.component";


export default function TaskList({tasks}) {
    console.log(tasks);
    if(!tasks){
      tasks = []
    }
  return (
    <div>
        {tasks.map(({ taskName, taskStartDate, taskEndDate, completedSteps, totalSteps, completionPercentage, _id, isTaskDone },index) => {
          const taskDetails = {taskName, taskStartDate, taskEndDate, completedSteps, totalSteps, completionPercentage, _id, isTaskDone, index};
          return (  
            <div  key={_id}>
              <TaskItem taskDetails= {taskDetails}/>
            </div>
          );
        })}
    </div>
  );
}