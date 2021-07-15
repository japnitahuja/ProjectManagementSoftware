import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentProjectId } from "../../redux/current-project/current-project.selectors";
import { selectCurrentTaskName } from "../../redux/current-task/current-task.selectors";
import { NavBar, Back, Heading, OneThirdDiv } from "./step-nav.styles";

class StepNav extends Component {
  render() {
    const { taskName, projectId } = this.props;
    return (
      <NavBar>
        <OneThirdDiv>
          <Back>
            <Link
              to={`/project/${projectId}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button
                style={{
                  textDecoration: "none",
                  background: "none",
                  border: "none",
                  fontSize: "2em",
                  color: "black",
                }}
              >
                {" "}
                &times;
              </button>
            </Link>
          </Back>
        </OneThirdDiv>

        <OneThirdDiv>
          <Heading> {taskName} </Heading>
        </OneThirdDiv>

        <OneThirdDiv></OneThirdDiv>
      </NavBar>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  taskName: selectCurrentTaskName,
  projectId: selectCurrentProjectId,
});

export default connect(mapStateToProps, null)(StepNav);
