import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { UpdateUserInProjectStart } from "../../redux/current-project/current-project.actions";
import { selectCurrentProjectUsers } from "../../redux/current-project/current-project.selectors";
import {AccessForm, FormSelect} from "./access.styles";
import {TeamDivItem, BigCircle, LowerDiv, Overlay, Text, FormButton, FormInverseButton} from "../team/team.styles";
import DropDown from "../access-dropdown/access-dropdown.component";

class Access extends Component {
    constructor(){
        super()
   
        this.state = {
            userDetails: [],
            permissions:[
              ["BILLINGADMIN", "Billing Admin", "Can lorem ipsum dolor"],
              ["ADMIN", "Admin", "Can lorem ipsum dolor"],
              ["AUTHOR", "Author", "Can lorem ipsum dolor"],
              ["CONTRIBUTER", "Contributer", "Can lorem ipsum dolor"]
            ]
        }
    }

    componentDidMount(){
      console.log("mounter", this.state.userDetails)
    }

    handleOnChange = (Userid, newPermission) => {
        let done = false;
        this.state.userDetails.map((user) => {
          console.log(user)
          if (user.id === Userid){
            user.updatedPermission = newPermission;
            done = true;
          }
        })

        if(!done){
          const user = {
              id: Userid,
              updatedPermission: newPermission
          }
          this.state.userDetails.push(user)

        }
        
    }
 
    submit = (e) => {
      e.preventDefault()
      const userDetails = this.state.userDetails
      const {updateUser} = this.props
      console.log("saved", userDetails)
      updateUser(userDetails)
    }
  render() {
    const { users } = this.props;
    return (
    <>
      <AccessForm>
        {users.map((user, index) => {
          let unnamed = user.user.email.slice(0,user.user.email.indexOf('@'));
          return (
            <TeamDivItem key={index}>
              <label htmlFor={user.user._id}>
                <div style={{display:"flex", flexDirection:"row", alignItems: "center"}}>
                  <BigCircle>{user.user.firstName?user.user.firstName.charAt(0):unnamed.charAt(0)}</BigCircle>
                  <Text style={{marginLeft:"1em"}}>{user.user.firstName?user.user.firstName:unnamed}</Text>
                </div>
              </label>
              
              <DropDown key={index} 
                        userID = {user.user._id} 
                        options={this.state.permissions} 
                        selected={user.permission}
                        onChangePermission = {this.handleOnChange}/> 
             

            </TeamDivItem>
          );
        })}
      </AccessForm>
      
      <LowerDiv style={{marginBottom:"7em"}}>
          <FormButton onClick={this.submit}>Save</FormButton>
          <FormInverseButton onClick={this.props.exit}>Exit</FormInverseButton>
      </LowerDiv>
      
    </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  users: selectCurrentProjectUsers,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (userDetails) => dispatch(UpdateUserInProjectStart(userDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(Access);
