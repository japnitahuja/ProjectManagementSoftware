import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { createProjectStart, fetchProjectsStart } from "../redux/project/project.actions";
import { selectUserProjects } from "../redux/project/project.selector";
import { signOut } from "../redux/user/user.actions";
import { selectCurrentUserFirstName } from "../redux/user/user.selectors";

class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      projectDetails: {
        projectName: "",
        projectStatus: "",
      },
    };
  }

  signOut = () => {
    const { history, signOut } = this.props;
    signOut();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    history.push("/login");
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    let project = this.state.projectDetails;
    project[name] = value;

    this.setState({ projectDetails: project });
  };

  createProject = (e) => {
    e.preventDefault();
    let projectDetails = this.state.projectDetails;
    this.props.createProject(projectDetails);
  };

  

  render() {
    const { name, projects } = this.props;
    
    return (
      <div>
        <h1>hi {name}!</h1>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onChange={(e) => this.handleOnChange(e)}
          onSubmit={this.createProject}
        >
          <div>
            <label htmlFor="projectName"> Project Name: </label>
            <input
              type="text"
              value={this.state.projectDetails.projectName}
              name="projectName"
              id="projectName"
              onChange={(e) => this.handleOnChange(e)}
              required/>
          </div>
          <div>
            <label htmlFor="projectStatus"> Project Status: </label>
            <select
              value={this.state.projectDetails.projectStatus}
              name="projectStatus"
              id="projectStatus"
              onChange={(e) => this.handleOnChange(e)}
              required
            >
              <option value="">Please choose an option</option>
              <option value="ACTIVE">Active</option>
              <option value="PLANNED">Planned</option>
              <option value="COMPELTED">Completed</option>
            </select>
          </div>

          <div>
            <input type="submit" value="Create Project" />
            {
      projects ? console.log(projects) : null
    }
          </div>
        </form>

        <button onClick={this.signOut}>Sign out</button>
        <button onClick={this.getProjects}>Projects</button>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
