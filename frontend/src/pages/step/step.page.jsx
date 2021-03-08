import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import { completeStepQuestionStart, completeStepStart } from '../../redux/current-step/current-step.actions'
import { fetchCurrentStepStart } from '../../redux/current-step/current-step.actions'
import { selectCurrentStepCompletionMessage, selectCurrentStepId, selectCurrentStepIsDone, selectCurrentStepName, selectCurrentStepQuestion, selectCurrentStepQuestionAnswerConfirmation, selectCurrentStepQuestionAnswered } from '../../redux/current-step/current-step.selectors'

 class Step extends Component {
    componentDidMount(){
        const stepId = this.props.match.params.stepId
       this.props.fetchCurrentStep(stepId)
       console.log(stepId)
    }

    submitQuestion = () => {
        const {stepId, completeStepQuestion} = this.props
        completeStepQuestion(stepId)
        this.props.fetchCurrentStep(stepId)
        window.location.reload()
    }

    completeStep = () => {
        const {stepId, completeStep} = this.props
        completeStep(stepId)
    }
    render() {
        const {stepName, stepQuestion, isStepQuestionAnswered, stepCompletionMessage, isStepDone} = this.props

        console.log(stepCompletionMessage)
        if(stepCompletionMessage){
            console.log(stepCompletionMessage)
        }
        return (
            <div style={{ padding: "10px", border: "1px solid black" }}>
                <h2>Step Name: {stepName}</h2>
                <h3>{stepCompletionMessage}</h3>
                
                {
                    stepQuestion?
                    <div>
                        Question: {stepQuestion}<br/>
                        {
                            isStepQuestionAnswered? <div>Question has been answered</div> : <button onClick={this.submitQuestion}>COMPLETE STEP QUESTION</button>
                        }
                        
                    </div> 
                    : null
                }
                {
                    isStepDone ? <div>STEP COMPLETED</div> : <button onClick={this.completeStep}>COMPLETE STEP</button>
                }
                
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    stepName: selectCurrentStepName,
    stepQuestion: selectCurrentStepQuestion,
    isStepQuestionAnswered: selectCurrentStepQuestionAnswered,
    stepId: selectCurrentStepId,
    questionCompletion: selectCurrentStepQuestionAnswerConfirmation,
    stepCompletionMessage: selectCurrentStepCompletionMessage,
    isStepDone: selectCurrentStepIsDone

});
  
  const mapDispatchToProps = (dispatch) => ({
    fetchCurrentStep : (stepId) => dispatch(fetchCurrentStepStart(stepId)),
    completeStepQuestion: (stepId) => dispatch(completeStepQuestionStart(stepId)),
    completeStep: (stepId) => dispatch(completeStepStart(stepId))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Step));
