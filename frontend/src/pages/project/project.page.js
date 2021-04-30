import React, { Component } from 'react'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CreateTaskForm from '../../components/create-task-form/create-task-form.component';
import { fetchCurrentProjectStart } from '../../redux/current-project/current-project.actions';
import { selectCurrentProjectName, selectCurrentProjectStatus, selectCurrentProjectTasks } from '../../redux/current-project/current-project.selectors';
import {TaskNav} from "../../components/task-nav/task-nav.component"
import LowerNavBar from '../../components/lower-nav-bar/lower-nav-bar.component';
import TaskListContainer from '../../components/tasks-list/tasks-list.container';
import SearchBar from '../../components/search-bar/search-bar.component';
import AdminPanelTaskPage from '../../components/admin-panel-task-page/admin-panel-task-page.component';
import ManageTeam from '../../components/manage-team/manage-team.component';

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
                <AdminPanelTaskPage />
                <SearchBar placeholder='Search Tasks...' />
                <TaskListContainer tasks = {tasks}/>
                <CreateTaskForm projectId = {this.props.match.params.projectId}/>
                <LowerNavBar  />
                
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