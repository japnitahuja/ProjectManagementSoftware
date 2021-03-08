import React, { Component } from 'react'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { fetchTasksStart } from '../../redux/all-tasks/all-tasks.actions';
import { selectUserTasks } from '../../redux/all-tasks/all-tasks.selectors';
import TaskList from '../../components/tasks-list/tasks-list.component';
import CreateTaskForm from '../../components/create-task-form/create-task-form.component';

class Project extends Component {
    componentDidMount(){
        const projectId = this.props.match.params.projectId;
        this.props.fetchTasks(projectId);
    }
    
    render() {
        const {tasks} = this.props;
        console.log('project page')
        console.log(tasks)
        
        return (
             <div style={{margin:"10px"}}>
                <h1> All Tasks </h1>
                <TaskList tasks = {tasks}/>
                <CreateTaskForm projectId = {this.props.match.params.projectId} />
                

            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    tasks: selectUserTasks
  });
  
  const mapDispatchToProps = (dispatch) => ({
    fetchTasks : (projectId) => dispatch(fetchTasksStart(projectId))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Project);