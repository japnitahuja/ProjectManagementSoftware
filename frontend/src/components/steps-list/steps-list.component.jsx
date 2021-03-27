import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { completeStepQuestionStart, deleteCurrentStepStart } from "../../redux/current-step/current-step.actions";
import { selectStepQuestionAnsweredConfirmationMessage } from "../../redux/all-steps/all-steps.selector";
import ConformationMesage from "../conformation-message/comformation-message.component";
import { BigText, Circle, SmallText } from "../task-item/task-item.styles";

class StepList extends React.Component {
  completeStepQuestion = (e) => {
    const { completeStepQuestion } = this.props;
    const stepId = e.target.id;
    console.log(stepId);
    completeStepQuestion(stepId);
    window.location.reload();
  };
  deleteStep(e){
    let stepId = e.target.id
    console.log(stepId)
    const {deleteStep} = this.props
    deleteStep(stepId)
}
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
          }, index) => {
            console.log(_id);
            return (
              <div
                key={_id}
                style={{ padding: "10px", border: "1px solid black" }}
              >
                <Link to={`/step/${_id}`} style={{textDecoration:'none'}}>
                  <SmallText>STEP - {index+1}</SmallText>
                  <BigText><Circle />{stepName}</BigText>
                </Link>
                <button id={_id} onClick={(e)=>this.deleteStep(e)}>Delete</button>
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
  deleteStep: (stepId) => dispatch(deleteCurrentStepStart(stepId))
});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
