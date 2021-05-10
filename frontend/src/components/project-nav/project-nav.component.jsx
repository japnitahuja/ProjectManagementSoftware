import React, { Component } from "react";
import { Hamburger } from "../hamburger/hamburger.component";
import { NavBar, Heading, AddProjectDiv,OneThirdDiv, Overlay, FormHeading } from "./project-nav.styles";
import { BigText } from '../project-item/project-item.styles';
import CreateProjectForm from "../create-project-form/create-project-form.component";

export default class ProjectNav extends Component {
    constructor(){
        super();
        this.state={
            addProject: false
        }
    }
    addProject = () => {
        if(this.state.addProject === false){
        this.setState({addProject: true}, () => console.log(this.state))
    }else{
        this.setState({addProject: false}, () => console.log(this.state))
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
          <AddProjectDiv onClick={this.addProject}>
          + Add Project
          </AddProjectDiv>
        </OneThirdDiv>
      </NavBar>
      {
          this.state.addProject ? 
          <Overlay style={{bottom:"0",height:"100%", padding:"2em"}}>
            <CreateProjectForm addProject = {this.addProject}/>
          </Overlay> : <Overlay/>
      }
        </>
    );
  }
}


