import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { createProjectStart, createProjectTemplateStart, fetchProjectsStart} from "../../redux/all-projects/all-projects.actions";
import { signOut } from "../../redux/user/user.actions";
import { selectCurrentUserFirstName } from "../../redux/user/user.selectors";


class CreateProjectForm extends Component {
  constructor() {
    super();
    this.state = {
      projectDetails: {
        projectName: "",
        projectStatus: "",
      },
    };
  }
  
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

  createProjectTemplate = (e) => {
    e.preventDefault()
    let projectDetails = this.state.projectDetails;
    console.log(projectDetails)
    this.props.createProjectTemplate(projectDetails)
  }

  

  render() {
    const { name, projects } = this.props;
    
    return (
      <div style={{padding:"10px"}}>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onChange={(e) => this.handleOnChange(e)}
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
              <option value="COMPLETED">Completed</option>
            </select>
          </div>
          <div>
            <label htmlFor="projectType"> Project Type: </label>
            <select
              value={this.state.projectDetails.projectType}
              name="projectType"
              id="projectType"
              onChange={(e) => this.handleOnChange(e)}
              required
            >
              <option value="">Please choose an option</option>
              <option value="REMODEL">Remodel</option>
              <option value="NEWBUILD">New Build</option>
              <option value="ADDITION">Addition</option>
            </select>
          </div>
          <div>
            <label htmlFor="propertyType"> Property Type </label>
            <select
              value={this.state.projectDetails.propertyType}
              name="propertyType"
              id="propertyType"
              onChange={(e) => this.handleOnChange(e)}
              required
            >
              <option value="">Please choose an option</option>
              <option value="OFFICE">Office</option>
              <option value="RETAIL">Retail</option>
              <option value="INDUSTRIAL">Industrial</option>
              <option value="HOSPITALITY">Hospitality</option>
              <option value="RESIDENTIAL">Residential</option>
              <option value="LAND">Land</option>
              <option value="AGRICULTURAL">Agricultural</option>
              <option value="ENTERTAINMENT">Entertainment</option>
            </select>
          </div>
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
            <label htmlFor="projectLocation"> Location: </label>
            <input
              type="text"
              value={this.state.projectDetails.projectLocation}
              name="projectLocation"
              id="projectLocation"
              onChange={(e) => this.handleOnChange(e)}
              required/>
          </div>
          <div>
            <label htmlFor="projectBudget"> Project Budget: </label>
            <input
              type="number"
              value={this.state.projectDetails.projectBudget}
              name="projectBudget"
              id="projectBudget"
              onChange={(e) => this.handleOnChange(e)}
              required/>
          </div>
          <div>
            <label htmlFor="projectFinishDate"> Finish Date:  </label>
            <input
              type="date"
              value={this.state.projectDetails.projectFinishDate}
              name="projectFinishDate"
              id="projectFinishDate"
              onChange={(e) => this.handleOnChange(e)}
              required/>
          </div>

          <div>
            <button onClick={this.createProject}>Create Project</button>
            <button onClick={this.createProjectTemplate}>Create Project Templates</button>
          </div>
        </form>

        

      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  name: selectCurrentUserFirstName
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  createProject: (projectDetails) => dispatch(createProjectStart(projectDetails)),
  createProjectTemplate: (projectDetails) => dispatch(createProjectTemplateStart(projectDetails)),
  fetchProjects: () => dispatch(fetchProjectsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm);
