import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  createProjectStart,
  createProjectTemplateStart,
  fetchProjectsStart,
} from "../../redux/all-projects/all-projects.actions";
import { signOut } from "../../redux/user/user.actions";
import { selectCurrentUserFirstName } from "../../redux/user/user.selectors";
import {
  Heading,
  Description,
  TemplateScrollDiv,
  TemplateDiv,
  TemplateDescription,
  TemplateHeading,
  TemplateButton,
  Img,
  TemplateDivContainer,
} from "./project-choose-template.styles";
import { selectCurrentOrganisationId } from "../../redux/organisation/organisation.selectors";
import { Link } from "react-router-dom";
import template from "../../assets/template.png";

class ProjectChooseTemplate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { orgId } = this.props;
    return (
      <div>
        <Heading style={{ padding: "1em" }}>
          Create a New Project
          <Link
            to={`/all-projects/${this.props.orgId}`}
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                textDecoration: "none",
                background: "none",
                border: "none",
                fontSize: "1.4em",
              }}
            >
              &times;
            </button>
          </Link>
        </Heading>

        <Description style={{ padding: "1em" }}>
          <div style={{ textAlign: "center" }}>
            Streamline work- flows and automate processes with ready made
            project templates
          </div>
          <div
            style={{
              margin: "1em 0em",
              color: "black",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            OR
          </div>
          <div style={{ textAlign: "center" }}>Create Your Own</div>
        </Description>

        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "100%",
            height: "0.02em",
          }}
        />

        <TemplateScrollDiv>
          <TemplateDivContainer>
            <TemplateDiv>
              <Img src={template} />
              <TemplateHeading>
                <div>From Scratch</div>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/createProject/FromScratch/${orgId}`}
                >
                  <TemplateButton> Build </TemplateButton>
                </Link>
              </TemplateHeading>
            </TemplateDiv>
            <TemplateDescription>
              <div style={{ fontWeight: "600", fontSize: "1.2em" }}>
                The Best Solution For:
              </div>
              <div style={{ color: "rgba(0,0,0,0.8)" }}>
                <div style={{ margin: "0.5em 0em" }}>
                  <div>
                    Tailor it to your needs and and what you need to make it
                    your own.
                  </div>
                </div>
                <div style={{ margin: "0.5em 0em" }}>
                  <div>Tailor it to your needs</div>
                </div>
              </div>
            </TemplateDescription>
          </TemplateDivContainer>
          <TemplateDivContainer>
            <TemplateDiv>
              <Img src={template} />
              <TemplateHeading>
                <div>From Scratch</div>
                <TemplateButton> Build </TemplateButton>
              </TemplateHeading>
            </TemplateDiv>
            <TemplateDescription>
              <div style={{ fontWeight: "600", fontSize: "1.2em" }}>
                The Best Solution For:
              </div>
              <div style={{ color: "rgba(0,0,0,0.8)" }}>
                <div style={{ margin: "0.5em 0em" }}>
                  <div>
                    Tailor it to your needs and and what you need to make it
                    your own.
                  </div>
                </div>
                <div style={{ margin: "0.5em 0em" }}>
                  <div>Tailor it to your needs</div>
                </div>
              </div>
            </TemplateDescription>
          </TemplateDivContainer>
          <TemplateDivContainer>
            <TemplateDiv>
              <Img src={template} />
              <TemplateHeading>
                <div>From Scratch</div>
                <TemplateButton> Build </TemplateButton>
              </TemplateHeading>
            </TemplateDiv>
            <TemplateDescription>
              <div style={{ fontWeight: "600", fontSize: "1.2em" }}>
                The Best Solution For:
              </div>
              <div style={{ color: "rgba(0,0,0,0.8)" }}>
                <div style={{ margin: "0.5em 0em" }}>
                  <div>
                    Tailor it to your needs and and what you need to make it
                    your own.
                  </div>
                </div>
                <div style={{ margin: "0.5em 0em" }}>
                  <div>Tailor it to your needs</div>
                </div>
              </div>
            </TemplateDescription>
          </TemplateDivContainer>
        </TemplateScrollDiv>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  name: selectCurrentUserFirstName,
  orgId: selectCurrentOrganisationId,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  createProject: (projectDetails) =>
    dispatch(createProjectStart(projectDetails)),
  createProjectTemplate: (projectDetails) =>
    dispatch(createProjectTemplateStart(projectDetails)),
  fetchProjects: () => dispatch(fetchProjectsStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectChooseTemplate);
