import React, {Component} from "react";
import { StepDiv, LeftDiv, RightDiv, BigText, SmallText, Circle, RowContainer, ArrowDiv, PartitionDiv} from "./step-item.styles";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { completeStepQuestionStart, completeStepStart, deleteCurrentStepStart, fetchCurrentStepStart } from '../../redux/current-step/current-step.actions'
import { selectCurrentProjectId } from '../../redux/current-project/current-project.selectors';
import { selectCurrentStepCompletionMessage, selectCurrentStepId, selectCurrentStepIsDone, selectCurrentStepName, selectCurrentStepQuestion, selectCurrentStepQuestionAnswerConfirmation, selectCurrentStepQuestionAnswered } from '../../redux/current-step/current-step.selectors'
import { selectCurrentTaskId } from '../../redux/current-task/current-task.selectors';
import { CheckBox } from "../checkbox/Checkbox.styles";

class StepItem extends Component{
    constructor(props){
        super(props);
      
        this.state = {
            stepDetails: this.props.stepDetails,
            isOpen:false
        };
    }

    submitQuestion = () => {
        const {_id} = this.state.stepDetails
        console.log("Step Item")
        console.log(this.state.stepDetails)
        this.props.completeStepQuestion(_id)
        this.props.fetchCurrentStep(_id)
        window.location.reload()
    }

    completeStep = async() => {
        const { completeStep, taskId} = this.props
        const stepId = this.state.stepDetails._id
        const data = {stepId, taskId}
        console.log(data)
        await completeStep(data)
        this.props.fetchCurrentStep(stepId)
        window.location.reload()
        
    }

    deleteStep = (e) => {
        const stepId = this.state.stepDetails._id
        const {deleteStep} = this.props
        deleteStep(stepId)
    }

    stepDetailsDiv = ({isStepDone,questionStatement,isQuestionAnswered, stepCompletionMessage}) => {
        return(
            <div style={{padding: "0px 25px"}}>
                 {
                questionStatement?
                <div>
                    <SmallText>Question: {questionStatement}</SmallText>
                    {
                        isQuestionAnswered? <SmallText>Question has been answered</SmallText> : <button onClick={this.submitQuestion}>COMPLETE STEP QUESTION</button>
                    }
                    
                </div> 
                : null
                }
                {
                    isStepDone ? <SmallText>STEP COMPLETED</SmallText> : <button onClick={this.completeStep}>COMPLETE STEP</button>
                }
                <h3>{stepCompletionMessage}</h3>
            </div>
        )
        

    };
    
    render (){
        const {stepName,questionStatement,_id,isStepDone,isQuestionAnswered, index} = this.state.stepDetails;
        return (
            <StepDiv>
                <PartitionDiv key={_id}>
                    <LeftDiv>
                            <RowContainer>
                                {
                                    isStepDone? <CheckBox>&#10003;</CheckBox> : <Circle/>
                                }
                            <SmallText>Step - {index+1}</SmallText>
                            </RowContainer>
                            
                            <BigText>{stepName}</BigText>
                    </LeftDiv>
                    <RightDiv>
                        <button id={_id} onClick={this.deleteStep}>Delete</button>
                       
                    </RightDiv>
                </PartitionDiv>
                {

                    this.state.isOpen?<div>{this.stepDetailsDiv(this.state.stepDetails)}</div>:null
                }
                <ArrowDiv onClick={()=>
                {
                    this.setState((prevState) => ({isOpen: !prevState.isOpen }));
                    
                }}>
                    {!this.state.isOpen? <p>&or;</p> : <p>&and;</p>}
                </ArrowDiv>

                
            
            </StepDiv>
            
                
            
        
    )}
}

const mapStateToProps = createStructuredSelector({
    stepName: selectCurrentStepName,
    stepQuestion: selectCurrentStepQuestion,
    isStepQuestionAnswered: selectCurrentStepQuestionAnswered,
    questionCompletion: selectCurrentStepQuestionAnswerConfirmation,
    stepCompletionMessage: selectCurrentStepCompletionMessage,
    isStepDone: selectCurrentStepIsDone,
    taskId: selectCurrentTaskId,
    projectId: selectCurrentProjectId
    
  });
  
  const mapDispatchToProps = (dispatch) => ({
    fetchCurrentStep : (stepId) => dispatch(fetchCurrentStepStart(stepId)),
    completeStepQuestion: (stepId) => dispatch(completeStepQuestionStart(stepId)),
    completeStep: (data) => dispatch(completeStepStart(data)),
    deleteStep: (stepId) => dispatch(deleteCurrentStepStart(stepId))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(StepItem);
