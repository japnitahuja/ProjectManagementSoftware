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
  }
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
            <SearchDiv src={search} />
          </OneThirdDiv>
        </NavBar>
      </>
    );
  }
}
