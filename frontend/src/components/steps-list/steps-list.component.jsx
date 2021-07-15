import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  completeStepQuestionStart,
  deleteCurrentStepStart,
} from "../../redux/current-step/current-step.actions";
import StepItem from "../step-item/step-item.component";
import { LongButton } from "./steps-list.component.styles";

class StepList extends React.Component {
  render() {
    let steps = this.props.steps;
    console.log(steps);
    if (!steps) {
      steps = [];
    }
    return (
      <>
        <div>
          {steps.map(
            (
              {
                stepName,
                questionStatement,
                _id,
                isStepDone,
                isQuestionAnswered,
              },
              index
            ) => {
              console.log(_id);
              const stepDetails = {
                stepName,
                questionStatement,
                _id,
                isStepDone,
                isQuestionAnswered,
                index,
              };
              return <StepItem key={_id} stepDetails={stepDetails} />;
            }
          )}
        </div>
        <center>
          <LongButton onClick={this.props.completeTask}>
            Complete Task
          </LongButton>
        </center>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({
  completeStepQuestion: (stepId) => dispatch(completeStepQuestionStart(stepId)),
  deleteStep: (stepId) => dispatch(deleteCurrentStepStart(stepId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
