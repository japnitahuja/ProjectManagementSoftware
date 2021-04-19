import React, { Component } from "react";
import { Hamburger } from "../hamburger/hamburger.component";
import { NavBar, Heading, NotifDiv } from "./project-nav.styles";
import img from "../../assets/addUser.svg";
import AddUserForm from '../adduser-form/adduser-form.component'
import {AddUserFormHeading} from '../adduser-form/adduser-form.styles'
import { BigText, SmallText } from '../project-item/project-item.styles';
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
        <Hamburger />
        <Heading> {title} </Heading>
        <button onClick={this.addUser}><NotifDiv>Add</NotifDiv></button>
      </NavBar>
      {
          this.state.addUser ? 
          <div style={{marginTop: '2vh'}}>
              <AddUserFormHeading>
                <BigText>INVITE</BigText>
                <button style={{textDecoration:'none', background: 'none', border: 'none'}} onClick={this.addUser}><BigText>X</BigText></button>
            </AddUserFormHeading>
            <AddUserForm />
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
