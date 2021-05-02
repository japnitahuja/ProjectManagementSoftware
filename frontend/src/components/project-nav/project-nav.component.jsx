import React, { Component } from "react";
import { Hamburger } from "../hamburger/hamburger.component";
import { NavBar, Heading, AddProjectDiv } from "./project-nav.styles";
import img from "../../assets/addUser.svg";
import AddUserForm from '../adduser-form/adduser-form.component'
import {AddUserFormHeading} from '../adduser-form/adduser-form.styles'
import { BigText, SmallText } from '../project-item/project-item.styles';
import addUder from '../../assets/addUser.png'
import notification from '../../assets/Notification.png'
import {NoStyleButton} from "../styles/no-style-button.style";
import CreateProjectForm from "../create-project-form/create-project-form.component";
import { OneThirdDiv } from "../step-page-task-nav/step-page-task-nav.styles";

export default class ProjectNav extends Component {
    constructor(){
        super();
        this.state={
            addUser: false
        }
    }
    addUser = () => {
        if(this.state.addUser === false){
        this.setState({addUser: true}, () => console.log(this.state))
    }else{
        this.setState({addUser: false}, () => console.log(this.state))
    }
    }
  render() {
    const title = this.props.title;
    return (
        <>
      <NavBar>
        <OneThirdDiv>
          <Hamburger />
        </OneThirdDiv>
        <OneThirdDiv>
          <Heading> {title} </Heading>
        </OneThirdDiv>
        <OneThirdDiv>
          <AddProjectDiv onClick={this.addUser}>
          + Add Project
          </AddProjectDiv>
        </OneThirdDiv>
      </NavBar>
      {
          this.state.addUser ? 
          <div style={{marginTop: '2vh'}}>
              <AddUserFormHeading>
                <BigText>Create a Project</BigText>
                <button style={{textDecoration:'none', background: 'none', border: 'none'}} onClick={this.addUser}><BigText>X</BigText></button>
            </AddUserFormHeading>
            <CreateProjectForm />
          </div> : null
      }
        </>
    );
  }
}

// export const ProjectNav = ({title}) => {
//     return (
//         <NavBar>
//             <Hamburger/>
//             <Heading> {title} </Heading>
//             <NotifDiv>Add</NotifDiv>

//         </NavBar>
//     )
// }
