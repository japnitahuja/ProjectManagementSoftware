import React, { Component } from 'react'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import PurchaseOrderList from '../../components/purchase-orders-list/purchase-orders-list.component';
import { selectCurrentProjectPurchaseOrders } from '../../redux/current-project/current-project.selectors';
import { fetchCurrentProjectStart } from '../../redux/current-project/current-project.actions';
import LowerNavBar from '../../components/lower-nav-bar/lower-nav-bar.component';

class ProjectPurchaseOrders extends Component {
    componentDidMount(){
        const projectId = this.props.match.params.projectId;
        this.props.fetchProject(projectId);
    }

    render() {
        const {purchaseOrders} = this.props;
        console.log('project purchase order page')
        console.log(purchaseOrders)
        
        return (
             <div style={{margin:"10px"}}>
                <h1>All PROJECT PURCHASE ORDERS</h1>
                <PurchaseOrderList purchaseOrders = {purchaseOrders} />
                <LowerNavBar />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    purchaseOrders: selectCurrentProjectPurchaseOrders
  });
  
  const mapDispatchToProps = (dispatch) => ({
      fetchProject: (projectId) => dispatch(fetchCurrentProjectStart(projectId))
    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProjectPurchaseOrders);