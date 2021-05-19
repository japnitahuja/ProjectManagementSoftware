import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentProjectUsers } from "../../redux/current-project/current-project.selectors";
import AddUserForm from "../adduser-form/adduser-form.component";
import { AddUserFormHeading } from "../adduser-form/adduser-form.styles";
import { BigText, SmallText } from "../project-item/project-item.styles";
import { LowerDiv, Overlay, FormButton, FormInverseButton, Text, SmallCircle, BigCircle, Image, TeamDiv, TeamDivItem } from "./team.styles";

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

            let unnamed = user.user.email.slice(0,user.user.email.indexOf('@'));

            return (
              <TeamDivItem key={index}>
                <div style={{display:"flex", flexDirection:"row", alignItems: "center"}}>
                  <BigCircle>{user.user.firstName?user.user.firstName.charAt(0):unnamed.charAt(0)}</BigCircle>
                  <Text style={{marginLeft:"1em"}}>{user.user.firstName?user.user.firstName:unnamed}</Text>
                </div>
                <div>
                  <SmallCircle></SmallCircle>
                  <SmallCircle></SmallCircle>
                  <SmallCircle></SmallCircle>
                </div>
              </TeamDivItem>
            );
          })}
        </TeamDiv>
        <LowerDiv style={{marginBottom:"5em"}}>
        {
          this.state.invite ? 
          <Overlay style={{bottom:"0",height:"100%"}}>
            
            <AddUserForm exit={this.invite}/>
          </Overlay> : null
      }
          <Text style={{fontSize:"0.9em",color:"#666666", margin:"1.5em 0em"}}>Need to add additional users not in Dig?</Text>
          <Text style={{fontSize:"0.9em",color:"#6C7B8A"}} onClick={this.invite}>
            <u>Invite now</u>
          </Text>

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
