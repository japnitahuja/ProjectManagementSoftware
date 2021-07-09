import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ProjectList from "../../components/projects-list/projects-list.component";
import {
  createProjectStart,
  fetchProjectsStart,
} from "../../redux/all-projects/all-projects.actions";
import {
  selectAreProjectsFetching,
  selectProjectsFetched,
  selectUserProjects,
} from "../../redux/all-projects/all-projects.selectors";
import { signOut } from "../../redux/user/user.actions";
import { selectCurrentUserFirstName } from "../../redux/user/user.selectors";
import CreateProjectForm from "../../components/create-project-form/create-project-form.component";
import ProjectsNav from "../../components/projects-nav/projects-nav.component";
import ProjectListContainer from "../../components/projects-list/projects-list.container";
import { GenericButton } from "../../components/generic-button/generic-button.styles";
import AddUserForm from "../../components/adduser-form/adduser-form.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import NoResult from "../../components/no-result/no-result.component";
import { Overlay } from "../../components/admin-panel-task-page/admin-panel-task-page.styles";
import ProjectsFilter from "../../components/projects-filter/projects-filter.component";
import Spinner from "../../components/spinner/spinner.component";
import { fetchOrganisationStart } from "../../redux/organisation/organisation.actions";

class AllProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsList: [], //will change based on search
      showSearch: false,
      showFilter: false,
      filters: {},
      setProjects: 0,
    };
  }

  async componentDidMount() {
    const { fetchProjects, fetchOrg } = this.props;
    const orgId = this.props.match.params.orgId;
    fetchProjects(orgId);
    //fetchOrg(orgId)
    console.log('component mounted.')
  }

  componentDidUpdate(){
    console.log('component updated.')
  }

  search = (searchedText) => {
    let temp = this.props.projects;

    if (searchedText) {
      temp = temp.filter(({ projectName }) => {
        return projectName.toLowerCase().includes(searchedText.toLowerCase());
      });
    }

    this.setState({ projectsList: temp });
  };

  filter = (filters) => {
    console.log("filters", filters);

    let temp = this.props.projects;

    for (let filter in filters) {
      if (filters[filter] != "") {
        temp = temp.filter((project) => {
          console.log(project[filter], filter, filters, filters[filter]);
          return project[filter] == filters[filter];
        });
      }
    }

    this.setState({ projectsList: temp, filters: filters });
  };

  toggleSearchBar = () => {
    this.setState((prevState) => ({
      showSearch: !prevState.showSearch,
    }));
  };

  toggleFilter = () => {
    this.setState((prevState) => ({
      showFilter: !prevState.showFilter,
    }));
  };

  setProjectState = () => {
    console.log("set projects state", this.props.projects);
    this.setState({
      projectsList: this.props.projects,
      setProjects: 1,
    });
  };

  render() {
    let { projectsList } = this.state;
    let { projectsFetched } = this.props;

    if (!projectsFetched) {
      return <Spinner />;
    } else if (projectsFetched && this.state.setProjects == 0) {
      this.setProjectState();
    }

    if (!projectsList) {
      projectsList = [];
    }
    console.log(projectsList, this.state);
    console.log('rendered.')

    return (
      <div>
        <ProjectsNav title="Projects" toggleSearchBar={this.toggleSearchBar} />
        {this.state.showSearch ? (
          <SearchBar
            placeholder="Search Projects..."
            search={this.search}
            toggleFilter={this.toggleFilter}
          />
        ) : null}
        {console.log(projectsList)}
        {projectsList.length === 0 ? (
          <NoResult />
        ) : (
          <ProjectListContainer projects={projectsList} />
        )}

        {this.state.showFilter ? (
          <Overlay
            backgroundcolor="rgba(0,0,0,0.3)"
            style={{
              bottom: "0",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProjectsFilter exit={this.toggleFilter} onSubmit={this.filter} />
          </Overlay>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  name: selectCurrentUserFirstName,
  projects: selectUserProjects,
  projectsFetched: selectProjectsFetched,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  createProject: (projectDetails) =>
    dispatch(createProjectStart(projectDetails)),
  fetchProjects: (orgId) => dispatch(fetchProjectsStart(orgId)),
  fetchOrg: (orgId) => dispatch(fetchOrganisationStart(orgId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProjects);
