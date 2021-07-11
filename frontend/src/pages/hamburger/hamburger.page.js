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

class Hamburger extends Component {
  constructor() {
    super();
  }

  signOut = () => {
    
  }

  render() {
    return (
      <div style={{ padding: "2em 0" }}>
        <Link
          key="org"
          to={`/organisations`}
          style={{ textDecoration: "none", color: "rgba(0,0,0,0.8)" }}
        >
          {" "}
          <CostbookCostCode key="org" title="Organisations" />
        </Link>
        <Link
          key="org"
          to={`/costbook`}
          style={{ textDecoration: "none", color: "rgba(0,0,0,0.8)" }}
        >
          {" "}
          <CostbookCostCode key="org" title="Costbook" />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  organisationsFetched: selectFetchAllOrganisationsSuccess,
  organisations: selectAllOrganisations,
});

const mapDispatchToProps = (dispatch) => ({
  createOrganisation: (orgDetails) =>
    dispatch(createOrganisationStart(orgDetails)),
  fetchOrganisations: (userId) => dispatch(fetchAllOrganisationsStart(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
