import React, { Component } from 'react'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CreateTaskForm from '../../components/create-task-form/create-task-form.component';
import { fetchCurrentProjectStart } from '../../redux/current-project/current-project.actions';
import { selectCurrentProjectName, selectCurrentProjectStatus, selectCurrentProjectTasks } from '../../redux/current-project/current-project.selectors';
import {TaskNav} from "../../components/task-nav/task-nav.component"
import LowerNavBar from '../../components/lower-nav-bar/lower-nav-bar.component';
import TaskListContainer from '../../components/tasks-list/tasks-list.container';

class Project extends Component {
    componentDidMount(){
        const projectId = this.props.match.params.projectId;
        this.props.fetchProjects(projectId);
    }


    
    render() {
        const {tasks, projectName} = this.props;
        console.log('project page')
        console.log(tasks)
        
        return (
             <div>
                <TaskNav title = {projectName}/>
                <TaskListContainer tasks = {tasks}/>
                <LowerNavBar  />
                <CreateTaskForm projectId = {this.props.match.params.projectId}/>
                
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    projectName: selectCurrentProjectName,
    projectStatus: selectCurrentProjectStatus,
    tasks: selectCurrentProjectTasks
});
  
const mapDispatchToProps = (dispatch) => ({
    fetchProjects : (projectId) => dispatch(fetchCurrentProjectStart(projectId))
});
  
  export default connect(mapStateToProps, mapDispatchToProps)(Project);