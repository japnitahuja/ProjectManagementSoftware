import React, { Component } from 'react'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CreateStepForm from '../../components/create-step-form/create-step-form.component';
import { completeCurrentTaskStart, fetchCurrentTaskStart } from '../../redux/current-task/current-task.actions';
import { selectCurrentTaskCompletionMessage, selectCurrentTaskIsDone, selectCurrentTaskName, selectCurrentTaskSteps } from '../../redux/current-task/current-task.selectors';
import { Link } from 'react-router-dom';
import StepPageTaskNav from '../../components/step-page-task-nav/step-page-task-nav.component';
import StepNavBar from '../../components/step-navbar/step-navbar.component';
import StepListContainer from '../../components/steps-list/steps-list.container';
import {selectCurrentProjectId} from "../../redux/current-project/current-project.selectors";
import { completeStepQuestionStart, completeStepStart } from '../../redux/current-step/current-step.actions'
import { fetchCurrentStepStart } from '../../redux/current-step/current-step.actions'
import { selectCurrentStepCompletionMessage, selectCurrentStepId, selectCurrentStepIsDone, selectCurrentStepName, selectCurrentStepQuestion, selectCurrentStepQuestionAnswerConfirmation, selectCurrentStepQuestionAnswered } from '../../redux/current-step/current-step.selectors'
import { selectCurrentTaskId } from '../../redux/current-task/current-task.selectors';
import { LongButton } from '../../components/long-button/long-button.styles';

class Task extends Component {
    componentDidMount(){
        const taskId = this.props.match.params.taskId
       this.props.fetchSteps(taskId)
       console.log(taskId)
    }
    
    completeTask = () => {
        const taskId = this.props.match.params.taskId
        this.props.completeTask(taskId)
        this.props.fetchSteps(taskId)
    }

    

    render() {
        const {steps,projectId, taskName, isTaskDone, taskCompletionMessage} = this.props;
        console.log('task page')
        console.log(steps)
        const taskId = this.props.match.params.taskId
        console.log(taskId)
        return (
            <div>
                <StepPageTaskNav projectId = {projectId}/>
                <StepNavBar />
                {/* <TaskList tasks = {tasks}/> */}
                <StepListContainer steps = {steps} />
                <br></br>
                <center>
                {
                     isTaskDone ? 
                     null : 
                     <LongButton style={{backgroundColor: "#41BD64"}} onClick={this.completeTask}>COMPLETE TASK</LongButton> 
                 }

                </center>
                
                 <h3>{taskCompletionMessage}</h3>
                <CreateStepForm taskId = {this.props.match.params.taskId} />
                <Link to={`/purchaseOrders/${taskId}`}><button>PURCHASE ORDERS</button></Link>
                
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    steps: selectCurrentTaskSteps,
    taskName: selectCurrentTaskName,
    isTaskDone: selectCurrentTaskIsDone,
    taskCompletionMessage: selectCurrentTaskCompletionMessage,
    projectId: selectCurrentProjectId,
    stepName: selectCurrentStepName,
    stepQuestion: selectCurrentStepQuestion,
    isStepQuestionAnswered: selectCurrentStepQuestionAnswered,
    stepId: selectCurrentStepId,
    questionCompletion: selectCurrentStepQuestionAnswerConfirmation,
    stepCompletionMessage: selectCurrentStepCompletionMessage,
    isStepDone: selectCurrentStepIsDone,
    taskId: selectCurrentTaskId
    
  });
  
  const mapDispatchToProps = (dispatch) => ({
    fetchSteps : (taskId) => dispatch(fetchCurrentTaskStart(taskId)),
    completeTask: (taskId) => dispatch(completeCurrentTaskStart(taskId)),
    fetchCurrentStep : (stepId) => dispatch(fetchCurrentStepStart(stepId)),
    completeStepQuestion: (stepId) => dispatch(completeStepQuestionStart(stepId)),
    completeStep: (data) => dispatch(completeStepStart(data))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Task);