import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  createOrganisationStart,
  fetchAllOrganisationsStart,
} from "../../redux/organisation/organisation.actions";
import {
  selectAllOrganisations,
  selectFetchAllOrganisationsSuccess,
} from "../../redux/organisation/organisation.selectors";
import ProjectsNav from "../../components/projects-nav/projects-nav.component";
import { CostbookCostCode } from "../../components/costbook-costcode/costbook-costcode.component";
import Spinner from "../../components/spinner/spinner.component";
import OrganisationCreateButton from "../../components/organisation-createbutton/organisation-createbutton.component";

class Organisation extends Component {
  constructor() {
    super();
    this.state = {
      organisationDetails: {
        organisationName: null,
        organisationEmail: null,
        organisationNumber: null,
        organisationAddress: null,
      },
    };
  }

  componentDidMount() {
    this.props.fetchOrganisations();
  }

  render() {
    console.log(this.props.organisations);
    let { organisationsFetched } = this.props;

    if (!organisationsFetched) {
      return <Spinner />;
    }

    return (
      <>
        <ProjectsNav
          title="Organisations"
          toggleSearchBar={this.toggleSearchBar}
        />
        {this.props.organisations.map((org) => {
          console.log(org.organisation._id);
          return (
            <Link
              key={org.organisation._id}
              to={`/all-projects/${org.organisation._id}`}
              style={{ textDecoration: "none", color: "rgba(0,0,0,0.8)" }}
            >
              {" "}
              <CostbookCostCode
                key={org.organisation._id}
                title={org.organisation.organisationName}
              />
            </Link>
          );
        })}

        <OrganisationCreateButton />
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  organisationsFetched: selectFetchAllOrganisationsSuccess,
  organisations: selectAllOrganisations,
});

const mapDispatchToProps = (dispatch) => ({
  // signOut: () => dispatch(signOut()),
  // createProject: (projectDetails) =>
  //   dispatch(createProjectStart(projectDetails)),
  // fetchProjects: () => dispatch(fetchProjectsStart()),
  createOrganisation: (orgDetails) =>
    dispatch(createOrganisationStart(orgDetails)),
  fetchOrganisations: (userId) => dispatch(fetchAllOrganisationsStart(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Organisation);
