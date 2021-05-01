import React, { Component } from "react";
import { LongButton } from "../long-button/long-button.styles";
import { AddUserDiv, AddUserFormHeading } from "./adduser-form.styles";
import { BigText, SmallText } from "../project-item/project-item.styles";
import { connect } from "react-redux";
import { inviteUserStart } from "../../redux/current-project/current-project.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentProjectRoles } from "../../redux/current-project/current-project.selectors";

class AddUserForm extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: {
        email: '',
        permission: '',
        role: '',
      },
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

  advanceSettings = (e) => {
    e.preventDefault();
    if (this.state.advance === false) {
      this.setState({ advance: true }, () => console.log(this.state));
    } else {
      this.setState({ advance: false }, () => console.log(this.state));
    }
  };
  render() {
    const {projectRoles} = this.props
    console.log('project roles', projectRoles)
    return (
      <AddUserDiv style={{ height: "70vh" }}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "4vh 8vw",
          }}
          onChange={(e) => this.handleOnChange(e)}
        >
          <div>
            <label htmlFor="email"> Email: </label><br/>
          </div>
          <div>
            <input
              type="text"
              value={this.state.userDetails.email}
              name="email"
              id="email"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>
          <div>
            <label htmlFor="permission"> Permission Level: </label><br/>
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
            <label htmlFor="role"> Role(optional): </label><br/>
            <select
              value={this.state.userDetails.role}
              name="role"
              id="role"
              onChange={(e) => this.handleOnChange(e)}
              required
            >
              <option value="">Please choose an option</option>
              {projectRoles.map((role, index) => {
                return(
                  <option key={index} value={role.toUpperCase()}>{role}</option>
                )
              })}
            </select>
          </div>
          <div style={{ alignSelf: "center", margin: "5vh 0" }}>
            <button
              style={{
                textDecoration: "none",
                background: "none",
                border: "none",
                left: "0",
              }}
              onClick={this.addUser}
            >
              <SmallText>Add User, send invite later</SmallText>
            </button>
            <LongButton onClick={this.inviteUser}>Invite</LongButton>
          </div>
        </form>
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
