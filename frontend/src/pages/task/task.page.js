import React, { Component } from 'react'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {fetchStepsStart} from '../../redux/all-steps/all-steps.actions'
import CreateStepForm from '../../components/create-step-form/create-step-form.component';
import { selectUserSteps } from '../../redux/all-steps/all-steps.selector';
import StepList from '../../components/steps-list/steps-list.component'
import CreatePurchaseOrderForm from '../../components/create-purchase-order/create-purchase-order.component'
import { completeCurrentTaskStart, fetchCurrentTaskStart } from '../../redux/current-task/current-task.actions';
import { selectCurrentTaskCompletionMessage, selectCurrentTaskIsDone, selectCurrentTaskName, selectCurrentTaskSteps } from '../../redux/current-task/current-task.selectors';
import { Link } from 'react-router-dom';

class Task extends Component {
    componentDidMount(){
        const taskId = this.props.match.params.taskId
       this.props.fetchSteps(taskId)
       console.log(taskId)
    }
    
    completeTask = () => {
        const taskId = this.props.match.params.taskId
        this.props.completeTask(taskId)
    }

    render() {
        const {steps, taskName, isTaskDone, taskCompletionMessage} = this.props;
        console.log('task page')
        console.log(steps)
        const taskId = this.props.match.params.taskId
        console.log(taskId)
        return (
             <div style={{margin:"10px"}}>
                 <h1>{taskName}</h1>
                 <Link to={`/purchaseOrders/${taskId}`}><button>PURCHASE ORDERS</button></Link>
                 <h3>{taskCompletionMessage}</h3>
                 {
                     isTaskDone ? <div>TASK IS DONE!</div> : <button onClick={this.completeTask}>COMPLETE TASK</button> 
                 }

                <h2> All STEPS </h2>
                {/* <TaskList tasks = {tasks}/> */}
                <StepList steps = {steps} />
                <CreateStepForm taskId = {this.props.match.params.taskId} />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    steps: selectCurrentTaskSteps,
    taskName: selectCurrentTaskName,
    isTaskDone: selectCurrentTaskIsDone,
    taskCompletionMessage: selectCurrentTaskCompletionMessage,
    
  });
  
  const mapDispatchToProps = (dispatch) => ({
    fetchSteps : (taskId) => dispatch(fetchCurrentTaskStart(taskId)),
    completeTask: (taskId) => dispatch(completeCurrentTaskStart(taskId))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Task);