import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { createProjectStart, fetchProjectsStart } from "../redux/project/project.actions";
import { fetchProjects } from "../redux/project/project.sagas";
import { selectUserProjects } from "../redux/project/project.selector";
import { signOut } from "../redux/user/user.actions";
import { selectCurrentUserFirstName } from "../redux/user/user.selectors";

 class Projects extends Component {
     componentDidMount(){
         const {fetchProjects} = this.props;
        fetchProjects()
     }
    render() {
        const {projects} = this.props
        return (
            <div>
                {
                    projects ? console.log(projects) : null
                }
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Projects);

