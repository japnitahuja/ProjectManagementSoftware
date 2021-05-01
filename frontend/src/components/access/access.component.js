import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { UpdateUserInProjectStart } from "../../redux/current-project/current-project.actions";
import { selectCurrentProjectUsers } from "../../redux/current-project/current-project.selectors";
import AddUserForm from "../adduser-form/adduser-form.component";
import { AddUserFormHeading } from "../adduser-form/adduser-form.styles";
import { BigText, SmallText } from "../project-item/project-item.styles";
import { AccessDivItem, AccessForm, ExitButton, LowerDiv, SaveButton } from "./access.styles";

class Access extends Component {
    constructor(){
        super()
        this.state = {
            userDetails: [],
            invite: false
        }
    }
    handleOnChange = (e) => {
        let userDetails = this.state.userDetails;
        const { id, value } = e.target;
        //userDetails[id] = value;
        //this.setState({ userDetails: userDetails }, () => console.log(userDetails));
        const user = {
            id: id,
            updatedPermission: value
        }
        userDetails.push(user)
        console.log(this.state)
    }
    invite = () => {
        if(this.state.invite == false){
            this.setState({invite: true})
        }else{
            this.setState({invite: false})
        }
        console.log(this.state.invite)
    }
    submit = () => {
      const userDetails = this.state.userDetails
      const {updateUser} = this.props
      console.log(userDetails)
      updateUser(userDetails)
    }
  render() {
    const { users } = this.props;
    return (
    <>
      <AccessForm>
        {users.map((user, index) => {
          return (
            <AccessDivItem key={index}>
              <label htmlFor={user.user._id}>
                {user.user.firstName} {user.user.lastName} {user.user.email}
              </label>
              <select
                value={user.user.permission}
                name={index}
                id={user.user._id}
                required
                onChange={(e) => this.handleOnChange(e)}
              >
                <option value="">Please choose an option</option>
                <option value="BILLINGADMIN">Billing Admin</option>
                <option value="ADMIN">Admin</option>
                <option value="MANAGER">Manager</option>
                <option value="AUTHOR">Author</option>
                <option value="CONTRIBUTOR">Contributor</option>
              </select>
              <br/>
            </AccessDivItem>
          );
        })}
      </AccessForm>
      <LowerDiv>
      {
          this.state.invite ? 
          <div style={{marginTop: '2vh', top: '10vh'}}>
              <AddUserFormHeading>
                <BigText>Invite A User</BigText>
                <button style={{textDecoration:'none', background: 'none', border: 'none'}} onClick={this.invite}><BigText>X</BigText></button>
            </AddUserFormHeading>
            <AddUserForm />
          </div> : null
      }
      <SmallText>Need to add additional users not in Dig?</SmallText>
      <SmallText onClick={this.invite}><u>Invite now</u></SmallText>
      <SaveButton onClick={this.submit}>Save</SaveButton>
      <ExitButton>Exit</ExitButton>
      </LowerDiv>
      
    </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // projectName: selectCurrentProjectName,
  // projectStatus: selectCurrentProjectStatus,
  // tasks: selectCurrentProjectTasks
  users: selectCurrentProjectUsers,
});

const mapDispatchToProps = (dispatch) => ({
  // fetchProjects : (projectId) => dispatch(fetchCurrentProjectStart(projectId))
  updateUser: (userDetails) => dispatch(UpdateUserInProjectStart(userDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(Access);
