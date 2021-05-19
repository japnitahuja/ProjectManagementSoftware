import React, { Component } from 'react'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import PurchaseOrderList from '../../components/purchase-orders-list/purchase-orders-list.component';
import { selectCurrentProjectChangeOrders, selectCurrentProjectName, selectCurrentProjectPurchaseOrders } from '../../redux/current-project/current-project.selectors';
import { fetchCurrentProjectStart } from '../../redux/current-project/current-project.actions';
import LowerNavBar from '../../components/lower-nav-bar/lower-nav-bar.component';
import PurchaseOrderListContainer from '../../components/purchase-orders-list/purchase-order-lists.container';
import { TaskNav } from '../../components/task-nav/task-nav.component';
import ChangeOrderList from '../../components/change-orders-list/change-orders-list.component';
import SearchBar from '../../components/search-bar/search-bar.component'

class ProjectChangeOrders extends Component {
    componentDidMount(){
        // const projectId = this.props.match.params.projectId;
        // this.props.fetchProject(projectId);
    }

    render() {
        const {changeOrders, projectName} = this.props;
        console.log(changeOrders)
        
        return (
             <div>
                <TaskNav title = {projectName}/>
                <SearchBar placeholder="Search variance POs..."/>
                <ChangeOrderList changeOrders = {changeOrders} />
                <LowerNavBar />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    changeOrders: selectCurrentProjectChangeOrders,
    projectName: selectCurrentProjectName
  });
  
  const mapDispatchToProps = (dispatch) => ({
      fetchProject: (projectId) => dispatch(fetchCurrentProjectStart(projectId))
    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProjectChangeOrders);