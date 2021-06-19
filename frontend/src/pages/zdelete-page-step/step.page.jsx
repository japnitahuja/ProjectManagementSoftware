import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import { selectCurrentProjectId } from '../../redux/current-project/current-project.selectors';
import { completeStepQuestionStart, completeStepStart } from '../../redux/current-step/current-step.actions'
import { fetchCurrentStepStart } from '../../redux/current-step/current-step.actions'
import { selectCurrentStepCompletionMessage, selectCurrentStepId, selectCurrentStepIsDone, selectCurrentStepName, selectCurrentStepQuestion, selectCurrentStepQuestionAnswerConfirmation, selectCurrentStepQuestionAnswered } from '../../redux/current-step/current-step.selectors'
import { selectCurrentTaskId } from '../../redux/current-task/current-task.selectors';
import StepNav from '../../components/step-nav/step-nav.component'
import StepLowerNav from '../../components/step-lower-nav/step-lower-nav.component';

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

    completeStep = async() => {
        const {stepId, completeStep, taskId, history} = this.props
        const data = {stepId, taskId}
        console.log(data)
        await completeStep(data)
        history.push(`/task/${taskId}`)
        
    }
    render() {
        const {projectId, taskId, stepName, stepQuestion, isStepQuestionAnswered, stepCompletionMessage, isStepDone} = this.props

        console.log(stepCompletionMessage)
        if(stepCompletionMessage){
            console.log(stepCompletionMessage)
        }
        return (
            <div>
                <StepNav projectId={projectId}/>
                <StepLowerNav/>
                

                <h2>{stepName}</h2>
                
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
                <h3>{stepCompletionMessage}</h3>
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
    isStepDone: selectCurrentStepIsDone,
    taskId: selectCurrentTaskId,
    projectId: selectCurrentProjectId

});
  
  const mapDispatchToProps = (dispatch) => ({
    fetchCurrentStep : (stepId) => dispatch(fetchCurrentStepStart(stepId)),
    completeStepQuestion: (stepId) => dispatch(completeStepQuestionStart(stepId)),
    completeStep: (data) => dispatch(completeStepStart(data))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Step));
