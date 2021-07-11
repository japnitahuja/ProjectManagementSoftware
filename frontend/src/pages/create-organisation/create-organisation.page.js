import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  clearAllOrganisationData,
  createOrganisationStart,
  fetchAllOrganisationsClear,
  fetchAllOrganisationsStart,
} from "../../redux/organisation/organisation.actions";
import {
  selectAllOrganisations,
  selectCreateOrganisationStart,
  selectFetchAllOrganisationsSuccess,
} from "../../redux/organisation/organisation.selectors";
import { NavBar, OneThirdDiv, LongInput } from "./create-organisation.styles";
import Organisation from "./../organisation/organisation.page";
import { selectCreateOrganisationSuccessful } from "./../../redux/organisation/organisation.selectors";
import Spinner from "../../components/spinner/spinner.component";

class CreateOrganisation extends Component {
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

  exit = () => {
    console.log("exit");
    this.props.history.push("/organisations");
  };

  componentWillUnmount() {
    this.props.clearAllOrganisationData();
  }

  render() {
    if (this.props.createOrganisationStart && !this.props.createdOrganisation) {
      return <Spinner />;
    } else if (this.props.createdOrganisation) {
      this.exit();
    }
    return (
      <>
        <div
          style={{ width: "100%", height: "100vh", backgroundColor: "#F5F5F5" }}
        >
          <NavBar>
            <OneThirdDiv align="flex-start" color="#205284">
              <Link
                to={`/organisations`}
                style={{ textDecoration: "none", color: "#205284" }}
              >
                Cancel
              </Link>
            </OneThirdDiv>
            <OneThirdDiv align="center" style={{ fontWeight: "600" }}>
              New Org
            </OneThirdDiv>
            <OneThirdDiv
              align="flex-end"
              color="#205284"
              onClick={this.createOrg}
            >
              Save
            </OneThirdDiv>
          </NavBar>
          <form onChange={this.organisationOnChange} onSubmit={this.createOrg}>
            <LongInput
              id="organisationName"
              name="organisationName"
              type="text"
              placeholder="Enter Organisation Name"
            />

            <LongInput
              id="organisationAddress"
              name="organisationAddress"
              type="text"
              placeholder="Enter Organisation Address"
            />

            <LongInput
              id="organisationNumber"
              name="organisationNumber"
              type="text"
              placeholder="Enter Organisation Number"
            />

            <LongInput
              id="organisationEmail"
              name="organisationEmail"
              type="text"
              placeholder="Enter Organisation Email"
            />
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  organisationsFetched: selectFetchAllOrganisationsSuccess,
  organisations: selectAllOrganisations,
  createdOrganisation: selectCreateOrganisationSuccessful,
  createOrganisationStart: selectCreateOrganisationStart,
});

const mapDispatchToProps = (dispatch) => ({
  createOrganisation: (orgDetails) =>
    dispatch(createOrganisationStart(orgDetails)),
  fetchOrganisations: (userId) => dispatch(fetchAllOrganisationsStart(userId)),
  clearAllOrganisationData: () => dispatch(clearAllOrganisationData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrganisation);
