import React, { Component } from "react";
import { connect } from "react-redux";
import { createStepStart } from "../../redux/all-steps/all-steps.actions";
import { createTaskStart} from "../../redux/all-tasks/all-tasks.actions";
import { signOut } from "../../redux/user/user.actions";


class CreateStepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepDetails: {
        stepName: '',
        questionStatement: '',
        questionType: '',
        taskId: this.props.taskId.toString()
      },
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    let step = this.state.stepDetails;
    step[name] = value;
    this.setState({ stepDetails: step });
  };

  createStep = (e) => {
    e.preventDefault();
    let stepDetails = this.state.stepDetails;
    const {createStep} = this.props;
    createStep(stepDetails)
    console.log(stepDetails)
    window.location.reload()
  };

  render() {
    
    return (
      <div>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onChange={(e) => this.handleOnChange(e)}
          onSubmit={this.createStep}
        >
          <div>
            <label htmlFor="stepName"> Step Name: </label>
            <input
              type="text"
              value={this.state.stepDetails.stepName}
              name="stepName"
              id="stepName"
              onChange={(e) => this.handleOnChange(e)}
              required/>
          </div>

          <div>
            <label htmlFor="questionStatement"> Question Statement: </label>
            <input
              type="text"
              value={this.state.stepDetails.questionStatement}
              name="questionStatement"
              id="questionStatement"
              onChange={(e) => this.handleOnChange(e)}
              />
          </div>

          <div>
            <label htmlFor="questionType"> Question Type </label>
            <input
              type="text"
              value={this.state.stepDetails.questionType}
              name="questionType"
              id="questionType"
              onChange={(e) => this.handleOnChange(e)}
              />
          </div>
          
          <div>
            <input type="submit" value="Create Step" />
   
          </div>
        </form>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  createStep: (stepDetails) => dispatch(createStepStart(stepDetails))
});

export default connect(null, mapDispatchToProps)(CreateStepForm);
