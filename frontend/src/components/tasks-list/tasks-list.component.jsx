import React from "react";
import {Link} from "react-router-dom";


export default function TaskList({tasks}) {
    console.log(tasks);
  return (
    <div>
        {tasks.map(({ taskName, taskStartDate, taskEndDate, _id }) => {
          return (
            <div key={_id} style = {{ padding: '10px', border:'1px solid black'}}>
              <Link to={`/task/${_id}`}> <h3>{taskName} ({taskStartDate} to {taskEndDate})</h3> </Link>
            </div>
          );
        })}
    </div>
  );
}
