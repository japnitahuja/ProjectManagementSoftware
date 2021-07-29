import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearTaskData,
  createTaskStart,
} from "../../redux/all-tasks/all-tasks.actions";
import { fetchCurrentProjectStart } from "../../redux/current-project/current-project.actions";
import { signOut } from "../../redux/user/user.actions";
import {
  Container,
  InfoInput,
  InfoTitle,
  InfoDiv,
  LongInput,
  LowerNavDiv,
  OneHalfDiv,
  NavBar,
  OneThirdDiv,
  Overlay,
  GreenButton,
  StepDiv,
  SmallCircle,
} from "./create-task-form.styles";
import { withRouter } from "react-router-dom";
import { selectCreateTaskStart } from "../../redux/all-tasks/all-tasks.selectors";
import { selectCreateTaskSuccessful } from "./../../redux/all-tasks/all-tasks.selectors";
import { createStructuredSelector } from "reselect";
import Spinner from "../spinner/spinner.component";
import dustbin from "../../assets/dustbin.png";

class CreateTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskDetails: {
        taskName: "",
        taskStartDate: "",
        taskEndDate: "",
        projectId: this.props.match.params.projectId.toString(),
      },
      stepDetails: {
        stepName: "",
        questionStatement: "",
      },
      active: "Steps",
      steps: [],
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    let task = this.state.taskDetails;
    task[name] = value;

    this.setState({ taskDetails: task });
    console.log(this.state);
  };

  handleOnStepChange = (e) => {
    const { name, value } = e.target;
    let step = this.state.stepDetails;
    step[name] = value;
    console.log(this.state);
    this.setState({ stepDetails: step }, () => {
      console.log(this.state);
    });
  };

  handleOnStepSubmit = (e) => {
    console.log("step submit");
    e.preventDefault();
    let steps = this.state.steps;
    let step = this.state.stepDetails;
    steps.push(step);
    this.setState(
      { steps: steps, stepDetails: { stepName: "", questionStatement: "" } },
      () => {
        console.log(this.state);
      }
    );
  };

  createTask = async (e) => {
    e.preventDefault();
    let taskDetails = this.state.taskDetails;
    taskDetails["steps"] = this.state.steps;
    console.log(taskDetails);
    console.log(taskDetails);
    this.props.createTask(taskDetails);
  };

  handleOnClick = (e) => {
    let { key } = e.target.dataset;

    this.setState({
      active: key,
    });
  };

  removeStep = (index) => {
    console.log("remove", index, this.state.steps[index]);
    let steps = this.state.steps;
    steps.splice(index, 1);

    this.setState({ steps: steps }, () => {
      console.log(this.state);
    });
  };

  componentWillUnmount() {
    this.props.clearTaskData();
  }

  render() {
    let { active } = this.state;
    let { projectId } = this.state.taskDetails;

    console.log(this.props.createTaskStart, this.props.createTaskSuccessful);

    if (this.props.createTaskStart && !this.props.createTaskSuccessful) {
      return <Spinner />;
    } else if (this.props.createTaskSuccessful) {
      this.props.history.push(`/project/${projectId}`);
    }

    return (
      <Overlay>
        <NavBar>
          <OneThirdDiv align="flex-start" color="#205284" onClick={this.exit}>
            <Link
              to={`/project/${projectId}`}
              style={{ textDecoration: "none", color: "#205284" }}
            >
              Cancel
            </Link>
          </OneThirdDiv>
          <OneThirdDiv align="center" style={{ fontWeight: "600" }}>
            New Task
          </OneThirdDiv>
          <OneThirdDiv
            align="flex-end"
            color="#205284"
            onClick={this.createTask}
          >
            Save
          </OneThirdDiv>
        </NavBar>
        <LowerNavDiv>
          <OneHalfDiv
            data-key="Info"
            onClick={this.handleOnClick}
            active={active === "Info"}
          >
            INFO
          </OneHalfDiv>
          <OneHalfDiv
            data-key="Steps"
            onClick={this.handleOnClick}
            active={active === "Steps"}
          >
            STEPS
          </OneHalfDiv>
        </LowerNavDiv>

        {this.state.active === "Info" ? (
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onChange={(e) => this.handleOnChange(e)}
          >
            <div>
              <LongInput
                type="text"
                value={this.state.taskDetails.taskName}
                name="taskName"
                id="taskName"
                placeholder="Task Title"
                onChange={(e) => this.handleOnChange(e)}
                required
              />
            </div>

            <Container>
              <InfoDiv>
                <InfoTitle>Start Date</InfoTitle>
                <InfoInput
                  type="date"
                  value={this.state.taskDetails.taskStartDate}
                  name="taskStartDate"
                  id="taskStartDate"
                  onChange={(e) => this.handleOnChange(e)}
                  required
                />
              </InfoDiv>

              <InfoDiv>
                <InfoTitle>End Date</InfoTitle>
                <InfoInput
                  type="date"
                  value={this.state.taskDetails.taskEndDate}
                  name="taskEndDate"
                  id="taskEndDate"
                  onChange={(e) => this.handleOnChange(e)}
                  required
                />
              </InfoDiv>
            </Container>
          </form>
        ) : (
          <div>
            <div>
              <LongInput
                type="text"
                value={this.state.taskDetails.taskName}
                name="taskName"
                id="taskName"
                placeholder="Task Title"
                onChange={(e) => this.handleOnChange(e)}
                required
              />
            </div>

            <div style={{ width: "100%", padding: "1em 0em 0em 1em" }}>
              <InfoTitle style={{ fontSize: "1em" }}>Add Step</InfoTitle>
            </div>

            <div>
              <LongInput
                type="text"
                value={this.state.stepDetails.stepName}
                name="stepName"
                id="stepName"
                placeholder="Step Title"
                onChange={(e) => this.handleOnStepChange(e)}
                required
              />
              <LongInput
                type="text"
                value={this.state.stepDetails.questionStatement}
                name="questionStatement"
                id="questionStatement"
                placeholder="Step Description"
                onChange={(e) => this.handleOnStepChange(e)}
                required
              />
            </div>

            <div
              style={{
                width: "100%",

                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <GreenButton onClick={this.handleOnStepSubmit}>
                Add Step
              </GreenButton>
            </div>

            <div style={{ width: "100%", padding: "1em 0em 0em 1em" }}>
              <InfoTitle style={{ fontSize: "1em" }}>Steps</InfoTitle>
            </div>

            <div style={{ marginTop: "1em" }}>
              {this.state.steps.map((step, index) => {
                console.log(step, "hi");
                return (
                  <>
                    <StepDiv>
                      <div>
                        <InfoTitle style={{ fontSize: "1em" }}>
                          {step.stepName}
                        </InfoTitle>
                        <InfoTitle
                          style={{ fontSize: "1em", fontWeight: "300" }}
                        >
                          {step.questionStatement}
                        </InfoTitle>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                        onClick={() => {
                          this.removeStep(index);
                        }}
                      >
                        <img src={dustbin} />
                      </div>
                    </StepDiv>
                  </>
                );
              })}
            </div>
          </div>
        )}
      </Overlay>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  createTaskStart: selectCreateTaskStart,
  createTaskSuccessful: selectCreateTaskSuccessful,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  createTask: (taskDetails) => dispatch(createTaskStart(taskDetails)),
  fetchProject: (projectId) => dispatch(fetchCurrentProjectStart(projectId)),
  clearTaskData: () => dispatch(clearTaskData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateTaskForm));
