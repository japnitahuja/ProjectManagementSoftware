import React, { Component } from 'react'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {fetchStepsStart} from '../../redux/all-steps/all-steps.actions'
import CreateStepForm from '../../components/create-step-form/create-step-form.component';
import { selectUserSteps } from '../../redux/all-steps/all-steps.selector';
import StepList from '../../components/steps-list/steps-list.component'
import CreatePurchaseOrderForm from '../../components/create-purchase-order/create-purchase-order.component'

class Task extends Component {
    componentDidMount(){
        const taskId = this.props.match.params.taskId
       this.props.fetchSteps(taskId)
       console.log(taskId)
    }
    
    render() {
        const {steps} = this.props;
        console.log('task page')
        console.log(steps)
        
        return (
             <div style={{margin:"10px"}}>
                <h1> All STEPS </h1>
                {/* <TaskList tasks = {tasks}/> */}
                <StepList steps = {steps} />
                <CreateStepForm taskId = {this.props.match.params.taskId} />
                <CreatePurchaseOrderForm taskId = {this.props.match.params.taskId} />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    steps: selectUserSteps
  });
  
  const mapDispatchToProps = (dispatch) => ({
    fetchSteps : (taskId) => dispatch(fetchStepsStart(taskId))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Task);