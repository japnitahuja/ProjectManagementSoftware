import React, { Component } from "react";
import { LongButton } from "../long-button/long-button.styles";
import { AddRoleDiv, UsersDiv, UsersDivContent, CheckBox, FormButton } from "./addrole-form.styles";
import { SmallText } from "../project-item/project-item.styles";
import { connect } from "react-redux";
import { inviteUserStart } from "../../redux/current-project/current-project.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentProjectRoles, selectCurrentProjectUsers } from "../../redux/current-project/current-project.selectors";
import {FormHeading, FormLabel, FormInput, FormDiv} from "../create-project-form/create-project-form.styles"

class AddRoleForm extends Component {
  constructor() {
    super();
    this.state = {
      newRole:'',
      usersAssigned: []

    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    if(name==="role"){
      this.setState({newRole: value})
    }
    else if(name==="user"){
      const {userid} = e.target.dataset;
      const { checked } = e.target;

      if(checked){
        
        let exists = false;
        this.state.usersAssigned.map((userId) => {
          if(userId === userid){
            exists = true;
        }})
        if(!exists){
          
          let temp = this.state.usersAssigned
          temp.push(userid)
          this.setState({usersAssigned:temp})
        }
    }

    else if(!checked){
      
      let temp = this.state.usersAssigned
      temp = temp.filter((userId) => {return !(userId === userid)})
      this.setState({usersAssigned:temp})
    } 
    }
    
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    let allRoles =[]
    let updatedUserPermission = []

    this.props.projectRoles.map((projectRole)=> {
      allRoles.push(projectRole)
    })

    allRoles.push(this.state.newRole);
    console.log(allRoles)

    this.state.usersAssigned.map((userId)=>{
      let temp = {
        id:'',
        updatedPermission:''
      };
      temp.id = userId;
      temp.updatedPermission = this.state.newRole;
      updatedUserPermission.push(temp);
    })

    console.log(updatedUserPermission)
  }
  
  render() {
    let {projectUsers, projectRoles} = this.props;
    
    return (
      <AddRoleDiv>
        <FormHeading>
            Create a New Role
            <button  onClick={this.props.exit} style={{textDecoration:'none', 
                            background: 'none', 
                            border: 'none', 
                            fontSize:'1.4em', 
                            color:'rgba(102,102,102,0.6)'}}> &times;</button>
        </FormHeading>
        <br/>

        <FormDiv onChange={(e) => this.handleOnChange(e)} >
          <div>
            <FormLabel htmlFor="role" style={{textAlign:"left"}}> 
              A role helps assign a specific set of Subjects to a user. 
              Which type of position would you like to create?
            </FormLabel>
            <br/>
            <br/>
            <FormInput
              type="text"
              value={this.state.newRole}
              name="role"
              id="role"
              onChange={(e) => this.handleOnChange(e)}
              placeholder = "ex) Site Manager, Intern "
              required />
          </div>

          <UsersDiv>
          {
            projectUsers.map((user, index)=> {
              let unnamed = user.user.email.slice(0,user.user.email.indexOf('@'));
              
              return(
                <UsersDivContent key={index}>
                  <CheckBox
                  name="user"
                  id={index}
                  data-userid = {user._id}
                  onChange={(e) => this.handleOnChange(e)}
                  ></CheckBox>
                  <label>{user.user.firstName?user.user.firstName:unnamed}</label>
                </UsersDivContent>

              )
            })
          }
          </UsersDiv>
          
          <div style={{
               display:"flex",
               flexDirection:"row",
               justifyContent: "space-between", 
               alignItems: "center"
          }}>
          <FormButton 
            border="1px solid #000000"
            color="#3F8CFF"
            bgcolor = "#FFFFFF"
            width="40%"
            onClick={this.props.exit}
          > 
          Cancel
          </FormButton>
          <FormButton 
            border="1px solid #3F8CFF"
            color="#FFFFFF"
            bgcolor = "#3F8CFF"
            width="40%"
            onClick={this.handleOnSubmit}
          > 
          Create
          </FormButton>

          </div>
         
        </FormDiv>
      </AddRoleDiv>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  projectRoles: selectCurrentProjectRoles,
  projectUsers: selectCurrentProjectUsers

});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRoleForm);
