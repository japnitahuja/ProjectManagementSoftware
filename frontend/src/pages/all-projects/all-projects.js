import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ProjectList from "../../components/projects-list/projects-list.component";
import { createProjectStart, fetchProjectsStart } from "../../redux/all-projects/all-projects.actions";
import { selectUserProjects } from "../../redux/all-projects/all-projects.selectors";
import { signOut } from "../../redux/user/user.actions";
import { selectCurrentUserFirstName } from "../../redux/user/user.selectors";
import CreateProjectForm from "../../components/create-project-form/create-project-form.component"
import  ProjectNav  from "../../components/project-nav/project-nav.component";
import ProjectListContainer from "../../components/projects-list/projects-list.container";
import { GenericButton } from "../../components/generic-button/generic-button.styles";
import AddUserForm from "../../components/adduser-form/adduser-form.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import NoResult from "../../components/no-result/no-result.component";


 class AllProjects extends Component {

    constructor(){
      super()
      this.state={
        projectsList: '' //will change based on search
      }
    }

     componentDidMount(){
        const {fetchProjects} = this.props;
        fetchProjects()
        this.setState({projectsList: this.props.projects})
     }

     search = (searchedText) => {
        let temp = this.props.projects

        if(searchedText){
          temp = temp.filter(({projectName})=>{
            return projectName.toLowerCase().includes(searchedText.toLowerCase())
          })
        }
        
     
        this.setState({projectsList: temp})
        
     }


    render() {
        const {projectsList} = this.state
        console.log(projectsList)

        return (
            <div>
                <ProjectNav title = "Projects" />
                <SearchBar placeholder='Search Projects...' search={this.search}/>
                {projectsList.length === 0?<NoResult/>:<ProjectListContainer projects={projectsList}/>}
                
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    name: selectCurrentUserFirstName,
    projects: selectUserProjects
  });
  
  const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOut()),
    createProject: (projectDetails) => dispatch(createProjectStart(projectDetails)),
    fetchProjects : () => dispatch(fetchProjectsStart())
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(AllProjects);

