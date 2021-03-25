import React, { Component } from 'react'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {fetchStepsStart} from '../../redux/all-steps/all-steps.actions'
import CreateStepForm from '../../components/create-step-form/create-step-form.component';
import { selectUserSteps } from '../../redux/all-steps/all-steps.selector';
import StepList from '../../components/steps-list/steps-list.component'
import CreatePurchaseOrderForm from '../../components/create-purchase-order/create-purchase-order.component'
import PurchaseOrderList from '../../components/purchase-orders-list/purchase-orders-list.component'
import { selectCurrentTaskPurchaseOrders } from '../../redux/current-task/current-task.selectors';
import { fetchCurrentPurchaseOrderStart } from '../../redux/current-purchase-order/current-purchase-order.actions';
import { fetchCurrentTaskStart } from '../../redux/current-task/current-task.actions';
class PurchaseOrder extends Component {
    componentDidMount(){
        const taskId = this.props.match.params.taskId
       this.props.fetchTask(taskId)
       console.log(taskId)
    }
    
    render() {
        const {purchaseOrders} = this.props;
        console.log('task page')
        console.log(purchaseOrders)
        
        return (
             <div style={{margin:"10px"}}>
                <h1>All PURCHASE ORDERS</h1>
                {/* <TaskList tasks = {tasks}/> */}
                <PurchaseOrderList purchaseOrders = {purchaseOrders} />
                <CreatePurchaseOrderForm taskId = {this.props.match.params.taskId} />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    purchaseOrders: selectCurrentTaskPurchaseOrders
  });
  
  const mapDispatchToProps = (dispatch) => ({
    fetchSteps : (taskId) => dispatch(fetchStepsStart(taskId)),
    fetchTask: (taskId) => dispatch(fetchCurrentTaskStart(taskId))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(PurchaseOrder);