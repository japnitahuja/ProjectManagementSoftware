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
import DropDown from "./form-dropdown.component";
import { Link } from "react-router-dom";

class AddUserForm extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: {
        email: "",
        permission: " ",
        role: " ",
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
    console.log(e);
    const { name, value } = e.target;
    userDetails[name] = value;
    this.setState({ userDetails: userDetails }, () => console.log(userDetails));
  };

  handleOnOptionChange = (type, option) => {
    let temp = this.state.userDetails;
    temp[type] = option;
    this.setState({ userDetails: temp }, () =>
      console.log(this.state.userDetails)
    );
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
    let roles = [];

    projectRoles.map((role) => {
      let temp = [];
      temp.push(role);
      temp.push(role);
      temp.push("");
      roles.push(temp);
    });

    console.log("project roles", projectRoles);
    return (
      <AddUserDiv>
        <FormHeading style={{ marginBottom: "1em" }}>
          Add a User
          <Link
            to={`/project/${this.props.projectId}`}
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
          </Link>
        </FormHeading>

        <FormDiv onChange={(e) => this.handleOnChange(e)}>
          <div style={{ width: "100%", textAlign: "left" }}>
            <FormLabel htmlFor="email" style={{ fontSize: "1em" }}>
              Email
            </FormLabel>
          </div>

          <FormInput
            type="text"
            name="email"
            id="email"
            placeholder="Enter email"
            value={this.state.userDetails.email}
            onChange={(e) => this.handleOnChange(e)}
            required
          />

          <div>
            <FormLabel
              htmlFor="permission"
              style={{ textAlign: "left", fontSize: "1em" }}
            >
              Permission Level:
            </FormLabel>
            <br />
            <div style={{ width: "100%" }}>
              <DropDown
                options={this.state.permissions}
                selected={this.state.userDetails.permission}
                onChangePermission={this.handleOnOptionChange}
                type="permission"
              />
            </div>
          </div>

          <div>
            <FormLabel
              htmlFor="role"
              style={{ textAlign: "left", fontSize: "1em" }}
            >
              Role(optional):
            </FormLabel>
          </div>

          <div style={{ width: "100%" }}>
            <DropDown
              options={roles}
              onChangePermission={this.handleOnOptionChange}
              selected={this.state.userDetails.role}
              type="role"
            />
          </div>

          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <LongButton onClick={this.inviteUser}>Invite</LongButton>
          </div>
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
