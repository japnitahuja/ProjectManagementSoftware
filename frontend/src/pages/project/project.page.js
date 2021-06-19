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
import ToggleButton from '../../components/toggle-button/toggle-button.component'
import CreateButton from '../../components/create-button/create-button.component'
import NoResult from '../../components/no-result/no-result.component';

class Project extends Component {
    constructor() {
        super();
        this.state = {
          adminSwitch: false,
          tasksList: [], 
          showSearch: false
        };
      }

    componentDidMount(){
        const projectId = this.props.match.params.projectId;
        console.log("mount")
        this.props.fetchProjects(projectId);
        this.setState({tasksList:this.props.tasks})
    }

    adminToggle = () => {
        this.setState((prevState) => ({
            adminSwitch: !prevState.adminSwitch
        }));
    }

    search = (searchedText) => {
        let temp = this.props.tasks

        if(searchedText){
          temp = temp.filter(({taskName})=>{
            return taskName.toLowerCase().includes(searchedText.toLowerCase())
          })
        }
        
     
        this.setState({tasksList: temp})
        
     }

     toggleSearchBar = () => {
        this.setState((prevState) => ({
          showSearch: !prevState.showSearch
        }));
      
       }
    
    render() {
        const {projectName} = this.props;
        const {tasksList} = this.state;
        console.log('project page')
        console.log(tasksList)
        
        return (
             <div style={{marginBottom:"5em"}}>
                <TaskNav title = {projectName} toggleSearch={this.toggleSearchBar}/>
                {this.state.showSearch? <SearchBar placeholder='Search Tasks...' search={this.search} toggleFilter={this.toggleFilter}/> : null}
                <div style={{
                    padding: '1em',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    borderBottom: '1px solid #BCC5D3'}}>
                    <ToggleButton 
                        onToggleFunction = {this.adminToggle} 
                        checked = {this.state.adminSwitch} 
                        color="#6C5FCF"/>
                    <p style={{
                            fontSize: '1em',
                            color:'#666666', 
                            margin:'0', 
                            paddingLeft:'0.5em'}}>
                    Admin
                    </p>
                </div>
                
                {this.state.adminSwitch? <AdminPanelTaskPage/> : null}
                {tasksList.length === 0?<NoResult/>:<TaskListContainer tasks = {tasksList}/>}
                <CreateTaskForm projectId = {this.props.match.params.projectId}/>
                <LowerNavBar/>
                
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