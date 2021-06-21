import React, { Component } from 'react'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CreateStepForm from '../../components/create-step-form/create-step-form.component';
import { completeCurrentTaskStart, fetchCurrentTaskStart } from '../../redux/current-task/current-task.actions';
import { selectCurrentTaskCompletionMessage, selectCurrentTaskCompletionPercentage, selectCurrentTaskEndDate, selectCurrentTaskIsDone, selectCurrentTaskName, selectCurrentTaskOwner, selectCurrentTaskStartDate, selectCurrentTaskSteps } from '../../redux/current-task/current-task.selectors';
import { Link, withRouter } from 'react-router-dom';
import {selectCurrentProjectId} from "../../redux/current-project/current-project.selectors";
import { completeStepQuestionStart, completeStepStart } from '../../redux/current-step/current-step.actions'
import { fetchCurrentStepStart } from '../../redux/current-step/current-step.actions'
import { selectCurrentStepCompletionMessage, selectCurrentStepId, selectCurrentStepIsDone, selectCurrentStepName, selectCurrentStepQuestion, selectCurrentStepQuestionAnswerConfirmation, selectCurrentStepQuestionAnswered } from '../../redux/current-step/current-step.selectors'
import { selectCurrentTaskId } from '../../redux/current-task/current-task.selectors';
import { LongButton } from '../../components/long-button/long-button.styles';
import StepNav from '../../components/step-nav/step-nav.component'
import StepLowerNav from '../../components/step-lower-nav/step-lower-nav.component';

class Task extends Component {
    componentDidMount(){
        const taskId = this.props.match.params.taskId
       this.props.fetchSteps(taskId)
       console.log(taskId)
    }
    
    completeTask = () => {
        const taskId = this.props.match.params.taskId
        this.props.completeTask(taskId)
        if(this.props.completionPercentage == 100){
            console.log("back")
            this.props.history.goBack()
        }
        
    }

    

    render() {
        const {steps,projectId, taskName, isTaskDone, taskCompletionMessage, taskOwner, taskEndDate, taskStartDate} = this.props;
        console.log('task page')
        console.log(steps)
        const taskId = this.props.match.params.taskId
        console.log(taskId)
        return (
            <div>
                <StepNav projectId = {projectId}/>
                <StepLowerNav 
                            steps={steps} 
                            taskOwner={taskOwner} 
                            taskStartDate={taskStartDate}
                            taskEndDate={taskEndDate}
                            completeTask = {this.completeTask}/>

                <CreateStepForm taskId = {this.props.match.params.taskId} />
                <Link to={`/purchaseOrders/${taskId}`}><button>PURCHASE ORDERS</button></Link>
                <Link to={`/changeOrders/${taskId}`}><button>CHANGE ORDERS</button></Link>
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
    taskId: selectCurrentTaskId,
    completionPercentage: selectCurrentTaskCompletionPercentage,
    
    taskOwner: selectCurrentTaskOwner,
    taskStartDate: selectCurrentTaskStartDate,
    taskEndDate: selectCurrentTaskEndDate

  });
  
  const mapDispatchToProps = (dispatch) => ({
    fetchSteps : (taskId) => dispatch(fetchCurrentTaskStart(taskId)),
    completeTask: (taskId) => dispatch(completeCurrentTaskStart(taskId)),
    fetchCurrentStep : (stepId) => dispatch(fetchCurrentStepStart(stepId)),
    completeStepQuestion: (stepId) => dispatch(completeStepQuestionStart(stepId)),
    completeStep: (data) => dispatch(completeStepStart(data))
  });
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Task));