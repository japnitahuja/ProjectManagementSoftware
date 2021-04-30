import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentProjectUsers } from "../../redux/current-project/current-project.selectors";
import { ExitButton, LowerDiv, SaveButton } from "../access/access.styles";
import AddUserForm from "../adduser-form/adduser-form.component";
import { AddUserFormHeading } from "../adduser-form/adduser-form.styles";
import { BigText, SmallText } from "../project-item/project-item.styles";
import { TeamDiv, TeamDivItem } from "./team.styles";

class Team extends Component {
    constructor(){
        super()
        this.state = {
            userDetails: [],
            invite: false
        }
    }
    invite = () => {
        if(this.state.invite == false){
            this.setState({invite: true})
        }else{
            this.setState({invite: false})
        }
        console.log(this.state.invite)
    }
  render() {
    console.log(this.props.users);
    const { users } = this.props;
    return (
      <>
        <TeamDiv>
          {users.map((user, index) => {
            return (
              <TeamDivItem key={index}>
                {user.user.firstName}
                {user.user.email}
              </TeamDivItem>
            );
          })}
        </TeamDiv>
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
          <SmallText onClick={this.invite}>
            <u>Invite now</u>
          </SmallText>
          <SaveButton>Save</SaveButton>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);
