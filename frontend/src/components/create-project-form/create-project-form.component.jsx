import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  createProjectStart,
  createProjectTemplateStart,
  fetchProjectsStart,
} from "../../redux/all-projects/all-projects.actions";
import { signOut } from "../../redux/user/user.actions";
import { selectCurrentUserFirstName } from "../../redux/user/user.selectors";
import {
  FormDiv,
  FormInput,
  FormLabel,
  FormSelect,
  FormButton,
  FormHeading,
  NavBar,
  OneThirdDiv,
} from "./create-project-form.styles";
import downArrow from "../../assets/down-arrow.png";
import { selectCurrentOrganisationId } from "../../redux/organisation/organisation.selectors";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
class CreateProjectForm extends Component {
  constructor() {
    super();
    this.state = {
      projectDetails: {
        projectName: "",
        projectStatus: "",
        projectBudget: 0,
        projectLocation: "",
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
    this.props.history.push(`/all-projects/${this.props.orgId}`);
  };

  createProjectTemplate = (e) => {
    e.preventDefault();
    let projectDetails = this.state.projectDetails;
    console.log(projectDetails);
    this.props.createProjectTemplate(projectDetails);
    this.props.addProject();
  };

  render() {
    const { orgId } = this.props;

    return (
      <div>
        <NavBar>
          <OneThirdDiv align="flex-start" color="#205284" onClick={this.exit}>
            <Link
              to={`/all-projects/${orgId}`}
              style={{ textDecoration: "none", color: "#205284" }}
            >
              Cancel
            </Link>
          </OneThirdDiv>
          <OneThirdDiv align="center" style={{ fontWeight: "600" }}>
            New Project
          </OneThirdDiv>
          <OneThirdDiv
            align="flex-end"
            color="#205284"
            onClick={this.createProject}
          >
            Save
          </OneThirdDiv>
        </NavBar>
        <FormDiv
          onChange={(e) => this.handleOnChange(e)}
          style={{ padding: "1em", boxSizing: "border-box" }}
        >
          <div>
            <FormLabel htmlFor="projectName">
              {" "}
              What is the name of the Project?{" "}
            </FormLabel>
            <br />
            <FormInput
              type="text"
              placeholder="Project Name"
              value={this.state.projectDetails.projectName}
              name="projectName"
              id="projectName"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>

          <div>
            <FormLabel htmlFor="projectStatus">
              {" "}
              What is the project status?{" "}
            </FormLabel>
            <br />
            <FormSelect
              style={{ backgroundImage: `url(${downArrow})` }}
              value={this.state.projectDetails.projectStatus}
              name="projectStatus"
              id="projectStatus"
              onChange={(e) => this.handleOnChange(e)}
              required
            >
              <option style={{ color: "#666666" }} value="">
                Select Status
              </option>
              <option value="ACTIVE">Active</option>
              <option value="PLANNED">Planned</option>
              <option value="COMPLETED">Completed</option>
            </FormSelect>
          </div>
          <div>
            <FormLabel htmlFor="projectType">
              {" "}
              What type of project is this?{" "}
            </FormLabel>
            <br />
            <FormSelect
              style={{ backgroundImage: `url(${downArrow})` }}
              value={this.state.projectDetails.projectType}
              name="projectType"
              id="projectType"
              onChange={(e) => this.handleOnChange(e)}
              required
            >
              <option value="">Select Project Type</option>
              <option value="REMODEL">Remodel</option>
              <option value="NEWBUILD">New Build</option>
              <option value="ADDITION">Addition</option>
            </FormSelect>
          </div>
          <div>
            <FormLabel htmlFor="propertyType">
              {" "}
              What is the type of property?{" "}
            </FormLabel>
            <br />
            <FormSelect
              style={{ backgroundImage: `url(${downArrow})` }}
              value={this.state.projectDetails.propertyType}
              name="propertyType"
              id="propertyType"
              onChange={(e) => this.handleOnChange(e)}
              required
            >
              <option value="">Select Property Type</option>
              <option value="OFFICE">Office</option>
              <option value="RETAIL">Retail</option>
              <option value="INDUSTRIAL">Industrial</option>
              <option value="HOSPITALITY">Hospitality</option>
              <option value="RESIDENTIAL">Residential</option>
              <option value="LAND">Land</option>
              <option value="AGRICULTURAL">Agricultural</option>
              <option value="ENTERTAINMENT">Entertainment</option>
            </FormSelect>
          </div>
          <div>
            <FormLabel htmlFor="projectName">
              {" "}
              What is the name of the project?{" "}
            </FormLabel>
            <br />
            <FormInput
              type="text"
              placeholder="Project Name"
              value={this.state.projectDetails.projectName}
              name="projectName"
              id="projectName"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>
          <div>
            <FormLabel htmlFor="projectLocation"> Location </FormLabel>
            <br />
            <FormInput
              type="text"
              placeholder="Street Address"
              value={this.state.projectDetails.projectLocation}
              name="projectLocation"
              id="projectLocation"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>
          <div>
            <FormLabel htmlFor="projectBudget"> Project Budget </FormLabel>
            <br />
            <FormInput
              type="number"
              value={this.state.projectDetails.projectBudget}
              name="projectBudget"
              id="projectBudget"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>
          <div>
            <FormLabel htmlFor="projectFinishDate">
              {" "}
              Estimated Finish Date{" "}
            </FormLabel>
            <br />
            <FormInput
              type="date"
              placeholder="Finish Date"
              value={this.state.projectDetails.projectFinishDate}
              name="projectFinishDate"
              id="projectFinishDate"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>
        </FormDiv>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  name: selectCurrentUserFirstName,
  orgId: selectCurrentOrganisationId,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  createProject: (projectDetails) =>
    dispatch(createProjectStart(projectDetails)),
  createProjectTemplate: (projectDetails) =>
    dispatch(createProjectTemplateStart(projectDetails)),
  fetchProjects: () => dispatch(fetchProjectsStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateProjectForm));
