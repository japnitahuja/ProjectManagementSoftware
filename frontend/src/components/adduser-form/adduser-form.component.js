import React, { Component } from "react";
import { LongButton } from "../long-button/long-button.styles";
import { AddUserFormHeading } from "./adduser-form.styles";
import { BigText, SmallText } from "../project-item/project-item.styles";
import { connect } from "react-redux";
import { inviteUserStart } from "../../redux/user/user.actions";
import { createStructuredSelector } from "reselect";

class AddUserForm extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: {
        // email: null,
        // permission: null,
        // Role: null,
        // Team: null
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
    e.preventDefault()
    let userDetails = this.state.userDetails;
    userDetails['type'] = 'AddUser'
    this.setState({userDetails: userDetails}, () => console.log(userDetails))
    this.props.inviteUser(userDetails)
  }
  inviteUser = (e) => {
    e.preventDefault()
    let userDetails = this.state.userDetails;
    userDetails['type'] = 'saveandinvite'
    this.setState({userDetails: userDetails}, () => console.log(userDetails))
    this.props.inviteUser(userDetails)
  }
  render() {
    return (
      <div style={{ height: "70vh" }}>
        <form
          style={{ display: "flex", flexDirection: "column", margin: "4vh" }}
          onChange={(e) => this.handleOnChange(e)}
        >
          <div>
            <label htmlFor="email"> Email: </label>
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
            <label htmlFor="Permission Level"> Permission Level: </label>
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

          <div style={{ alignSelf: "center", margin: "5vh 0" }}>
            <button
              style={{
                textDecoration: "none",
                background: "none",
                border: "none",
              }}
              onClick={this.addUser}
            >
              <SmallText>Add User, send invite later</SmallText>
            </button>
            <LongButton onClick={this.inviteUser}>Invite</LongButton>
          </div>
        </form>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  // name: selectCurrentUserFirstName,
  // projects: selectUserProjects
});

const mapDispatchToProps = (dispatch) => ({
  // signOut: () => dispatch(signOut())
  inviteUser: (userDetails) => dispatch(inviteUserStart(userDetails))
});


export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);
