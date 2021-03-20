import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ProjectList from "../../components/projects-list/projects-list.component";
import { createProjectStart, fetchProjectsStart } from "../../redux/all-projects/all-projects.actions";
import { selectUserProjects } from "../../redux/all-projects/all-projects.selectors";
import { signOut } from "../../redux/user/user.actions";
import { selectCurrentUserFirstName } from "../../redux/user/user.selectors";
import CreateProjectForm from "../../components/create-project-form/create-project-form.component"
import { ProjectNav } from "../../components/project-nav/project-nav.component";


 class AllProjects extends Component {
     componentDidMount(){
         const {fetchProjects} = this.props;
        fetchProjects()
     }

     signOut = () => {
        const { history, signOut } = this.props;
        signOut();
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem('persist:root')
        history.push("/login");
      };
    render() {
        const {projects} = this.props
        
        return (
            <div>
                <ProjectNav title = "Projects" />
                <ProjectList projects={projects}/>
                <CreateProjectForm/>
                <button onClick={this.signOut}>Sign out</button>
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

