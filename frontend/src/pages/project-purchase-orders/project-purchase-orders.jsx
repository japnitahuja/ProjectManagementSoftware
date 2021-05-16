import React, { Component } from 'react'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import PurchaseOrderList from '../../components/purchase-orders-list/purchase-orders-list.component';
import { selectCurrentProjectName, selectCurrentProjectPurchaseOrders } from '../../redux/current-project/current-project.selectors';
import { fetchCurrentProjectStart } from '../../redux/current-project/current-project.actions';
import LowerNavBar from '../../components/lower-nav-bar/lower-nav-bar.component';
import PurchaseOrderListContainer from '../../components/purchase-orders-list/purchase-order-lists.container';
import { TaskNav } from '../../components/task-nav/task-nav.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import PurchaseOrdersSummary from "../../components/purchase-orders-summary/purchase-orders-summary.component"

class ProjectPurchaseOrders extends Component {
    componentDidMount(){
        const projectId = this.props.match.params.projectId;
        this.props.fetchProject(projectId);
    }

    render() {
        const {purchaseOrders, projectName} = this.props;
        console.log('project purchase order page')
        console.log(purchaseOrders)
        
        return (
             <div>
                <TaskNav title = {projectName}/>
                <PurchaseOrdersSummary purchaseOrders = {purchaseOrders}/>
                <SearchBar placeholder="Search POs..."/>
                <PurchaseOrderListContainer purchaseOrders = {purchaseOrders} />
                <LowerNavBar />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    purchaseOrders: selectCurrentProjectPurchaseOrders,
    projectName: selectCurrentProjectName
  });
  
  const mapDispatchToProps = (dispatch) => ({
      fetchProject: (projectId) => dispatch(fetchCurrentProjectStart(projectId))
    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProjectPurchaseOrders);