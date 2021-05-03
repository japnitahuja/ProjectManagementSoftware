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
          <Overlay style={{height:"100%", padding:"2em"}}>
            <FormHeading>
            Create a Project
            <button  onClick={this.addProject} style={{textDecoration:'none', 
                            background: 'none', 
                            border: 'none', 
                            fontSize:'1.4em', 
                            color:'rgba(102,102,102,0.6)'}}> &times;</button>
            </FormHeading>
            
            <CreateProjectForm addProject = {this.addProject}/>
          </Overlay> : <Overlay/>
      }
        </>
    );
  }
}


