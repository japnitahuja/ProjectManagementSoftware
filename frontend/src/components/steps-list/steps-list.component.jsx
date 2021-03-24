import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { completeStepQuestionStart } from "../../redux/current-step/current-step.actions";
import { selectStepQuestionAnsweredConfirmationMessage } from "../../redux/all-steps/all-steps.selector";
import ConformationMesage from "../conformation-message/comformation-message.component";

class StepList extends React.Component {
  completeStepQuestion = (e) => {
    const { completeStepQuestion } = this.props;
    const stepId = e.target.id;
    console.log(stepId);
    completeStepQuestion(stepId);
    window.location.reload();
  };
  render() {
    let steps = this.props.steps;
    console.log(steps);
    if (!steps) {
      steps = [];
    }
    return (
      <div>
        {steps.map(
          ({
            stepName,
            questionStatement,
            _id,
            isStepDone,
            isQuestionAnswered,
            index,
          }) => {
            console.log(_id);
            return (
              <div
                key={_id}
                style={{ padding: "10px", border: "1px solid black" }}
              >
                <Link to={`/step/${_id}`}>
                  <div>STEP: {index}</div>
                  <h2>{stepName}</h2>
                </Link>

                {questionStatement ? (
                  <>
                    {isQuestionAnswered ? (
                      <div>Question has been answered</div>
                    ) : null}
                  </>
                ) : null}
                {isStepDone ? <div>Step Completed!</div> : null}
              </div>
            );
          }
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({
  completeStepQuestion: (stepId) => dispatch(completeStepQuestionStart(stepId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
