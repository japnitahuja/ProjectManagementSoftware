import React, { Component } from 'react'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectUserTasks } from '../../redux/all-tasks/all-tasks.selectors';
import TaskList from '../../components/tasks-list/tasks-list.component';
import CreateTaskForm from '../../components/create-task-form/create-task-form.component';
import { fetchCurrentProjectStart } from '../../redux/current-project/current-project.actions';
import { selectCurrentProjectName, selectCurrentProjectStatus, selectCurrentProjectTasks } from '../../redux/current-project/current-project.selectors';
import {TaskNav} from "../../components/task-nav/task-nav.component"
import LowerNavBar from '../../components/lower-nav-bar/lower-nav-bar.component';
class Project extends Component {
    componentDidMount(){
        const projectId = this.props.match.params.projectId;
        this.props.fetchProjects(projectId);
    }

    // componentDidUpdate(){
    //     const projectId = this.props.match.params.projectId;
    //     this.props.fetchProjects(projectId);
    //     console.log('component did update has been called')
    // }
    
    
    render() {
        const {tasks, projectName, projectStatus} = this.props;
        console.log('project page')
        console.log(tasks)
        
        return (
             <div>
                <TaskNav title = {projectName}/>
                <TaskList tasks = {tasks}/>
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