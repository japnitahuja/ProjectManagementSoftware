import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  createOrganisationStart,
  fetchAllOrganisationsStart,
} from "../../redux/orgnaisation/organisation.actions";
import { selectAllOrganisations } from "../../redux/orgnaisation/organisation.selectors";

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

  organisationOnChange = (e) => {
    const { name, value } = e.target;
    let org = this.state.organisationDetails;
    org[name] = value;
    this.setState({ organisationDetails: org }, () => console.log(this.state));
  };

  createOrg = (e) => {
    e.preventDefault();
    let orgDetails = this.state.organisationDetails;
    this.props.createOrganisation(orgDetails);
  };

  componentDidMount() {
    this.props.fetchOrganisations();
  }

  render() {
    console.log(this.props.organisations);
    return (
      <>
        {this.props.organisations.map((org) => {
            console.log(org.organisation._id)
          return (
            <Link to={`/all-projects/${org.organisation._id}`}>
              {" "}
              <div key={org.organisation._id}>
                {org.organisation.organisationName}
              </div>
            </Link>
          );
        })}

        <form onChange={this.organisationOnChange} onSubmit={this.createOrg}>
          <label
            htmlFor="organisationName"
            id="organisationName"
            name="organisationName"
          >
            Organisation Name
          </label>
          <input id="organisationName" name="organisationName" type="text" />
          <label
            htmlFor="organisationAddress"
            id="organisationAddress"
            name="organisationAddress"
          >
            Organisation Address
          </label>
          <input
            id="organisationAddress"
            name="organisationAddress"
            type="text"
          />
          <label
            htmlFor="organisationNumber"
            id="organisationNumber"
            name="organisationNumber"
          >
            Organisation Number
          </label>
          <input
            id="organisationNumber"
            name="organisationNumber"
            type="text"
          />
          <label
            htmlFor="organisationEmail"
            id="organisationEmail"
            name="organisationEmail"
          >
            Organisation Email
          </label>
          <input id="organisationEmail" name="organisationEmail" type="text" />
          <button type="submit">CREATE ORG</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // name: selectCurrentUserFirstName,
  // projects: selectUserProjects,
  // projectsFetched: selectProjectsFetched,
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
