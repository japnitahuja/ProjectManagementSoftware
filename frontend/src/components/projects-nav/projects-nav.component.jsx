import React, { Component } from "react";
import { Hamburger } from "../hamburger/hamburger.component";
import {
  NavBar,
  Heading,
  SearchDiv,
  OneThirdDiv,
  Overlay,
  FormHeading,
} from "./projects-nav.styles";
import { BigText } from "../project-item/project-item.styles";
import CreateProjectForm from "../create-project-form/create-project-form.component";
import search from "../../assets/navsearch.png";
import { Link } from "react-router-dom";

export default class ProjectNav extends Component {
  constructor() {
    super();
    this.state = {
      addProject: false,
    };
  }
  addProject = () => {
    if (this.state.addProject === false) {
      this.setState({ addProject: true }, () => console.log(this.state));
    } else {
      this.setState({ addProject: false }, () => console.log(this.state));
    }
  };
  render() {
    const { toggleSearchBar, title } = this.props;
    return (
      <>
        <NavBar>
          <OneThirdDiv justify="start">
            <Link to="/nav">
              <Hamburger />
            </Link>
          </OneThirdDiv>
          <OneThirdDiv justify="center">
            <Heading> {title} </Heading>
          </OneThirdDiv>
          <OneThirdDiv justify="end" onClick={toggleSearchBar}>
            {/* <SearchDiv onClick={toggleSearchBar} src={search} /> */}
            ADD PROJECT
          </OneThirdDiv>
        </NavBar>
        {/* {
          this.state.addProject ? 
          <Overlay style={{bottom:"0",height:"100%", padding:"2em"}}>
            <CreateProjectForm addProject = {this.addProject}/>
          </Overlay> : <Overlay/>
      } */}
      </>
    );
  }
}
