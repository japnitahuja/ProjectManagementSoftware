import React, { Component } from "react";
import { LongButton } from "../long-button/long-button.styles";
import { AddUserDiv } from "./adduser-form.styles";
import { SmallText } from "../project-item/project-item.styles";
import { connect } from "react-redux";
import { inviteUserStart } from "../../redux/current-project/current-project.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentProjectRoles } from "../../redux/current-project/current-project.selectors";
import {
  FormHeading,
  FormLabel,
  FormInput,
  FormDiv,
} from "../create-project-form/create-project-form.styles";
import DropDown from "../form-dropdown/form-dropdown.component";

class AddUserForm extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: {
        email: "",
        permission: "",
        role: "",
      },
      permissions: [
        ["BILLINGADMIN", "Billing Admin", "Can lorem ipsum dolor"],
        ["ADMIN", "Admin", "Can lorem ipsum dolor"],
        ["AUTHOR", "Author", "Can lorem ipsum dolor"],
        ["CONTRIBUTER", "Contributer", "Can lorem ipsum dolor"],
      ],
    };
  }

  handleOnChange = (e) => {
    let userDetails = this.state.userDetails;
    const { name, value } = e.target;
    userDetails[name] = value;
    this.setState({ userDetails: userDetails }, () => console.log(userDetails));
  };

  addUser = (e) => {
    e.preventDefault();
    let userDetails = this.state.userDetails;
    userDetails["type"] = "AddUser";
    this.setState({ userDetails: userDetails }, () => console.log(userDetails));
    this.props.inviteUser(userDetails);
  };
  inviteUser = (e) => {
    e.preventDefault();
    let userDetails = this.state.userDetails;
    userDetails["type"] = "saveandinvite";
    this.setState({ userDetails: userDetails }, () => console.log(userDetails));
    this.props.inviteUser(userDetails);
  };

  render() {
    const { projectRoles } = this.props;

    console.log("project roles", projectRoles);
    return (
      <AddUserDiv>
        <FormHeading style={{ marginBottom: "1em" }}>
          Add a User
          <button
            onClick={this.props.exit}
            style={{
              textDecoration: "none",
              background: "none",
              border: "none",
              fontSize: "1.4em",
              color: "rgba(102,102,102,0.6)",
            }}
          >
            {" "}
            &times;
          </button>
        </FormHeading>

        <FormDiv onChange={(e) => this.handleOnChange(e)}>
          <div style={{ width: "100%", textAlign: "left" }}>
            <FormLabel htmlFor="email" style={{ fontSize: "1em" }}>
              Email
            </FormLabel>
          </div>
          <input
            type="text"
            value="88"
            onChange={(e) => this.handleOnChange(e)}
          />
          <FormInput
            type="text"
            name="email"
            id="email"
            value={this.state.userDetails.email}
            onChange={(e) => this.handleOnChange(e)}
            required
          />

          {/* <div>
            <FormLabel htmlFor="permission" style={{ textAlign: "left" }}>
              {" "}
              Permission Level:{" "}
            </FormLabel>
            <br />
            <div style={{ width: "100%" }}>
              <DropDown options = {this.state.permissions}/>
            </div>

            <select
              value={this.state.userDetails.permission}
              name="permission"
              id="permission"
              onChange={(e) => this.handleOnChange(e)}
              required
            >
              <option value="">Please choose an option</option>
              <option value="BILLINGADMIN">Billing Admin</option>
              <option value="ADMIN">Admin</option>
              <option value="MANAGER">Manager</option>
              <option value="AUTHOR">Author</option>
              <option value="CONTRIBUTOR">Contributor</option>
            </select>
          </div>

          <div>
            <FormLabel htmlFor="role"> Role(optional): </FormLabel>
            <br />
            <select
              value={this.state.userDetails.role}
              name="role"
              id="role"
              onChange={(e) => this.handleOnChange(e)}
              required
            >
              <option value="">Please choose an option</option>
              {projectRoles.map((role, index) => {
                return (
                  <option key={index} value={role.toUpperCase()}>
                    {role}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <LongButton onClick={this.inviteUser}>Invite</LongButton>
          </div> */}
        </FormDiv>
      </AddUserDiv>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // name: selectCurrentUserFirstName,
  // projects: selectUserProjects
  projectRoles: selectCurrentProjectRoles,
});

const mapDispatchToProps = (dispatch) => ({
  // signOut: () => dispatch(signOut())
  inviteUser: (userDetails) => dispatch(inviteUserStart(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);
