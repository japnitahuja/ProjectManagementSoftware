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
import NoResult from '../../components/no-result/no-result.component';

class ProjectChangeOrders extends Component {
    constructor(){
        super()
        this.state={
            VPOsList: ''
        }
    }
    componentDidMount(){
        const projectId = this.props.match.params.projectId;
        this.props.fetchProject(projectId);
        this.setState({VPOsList: this.props.changeOrders})
    }

    search = (searchedText) => {
        let temp = this.props.changeOrders

        if(searchedText){
          temp = temp.filter(({purchasedItem})=>{
            return purchasedItem.toLowerCase().includes(searchedText.toLowerCase())
          })
        }
        
     
        this.setState({VPOsList: temp})
        
     }

    render() {
        const {changeOrders, projectName} = this.props;
        const {VPOsList} = this.state
        console.log(changeOrders)
        
        return (
             <div>
                <TaskNav title = {projectName}/>
                <SearchBar placeholder="Search variance POs..." search={this.search}/>
                {VPOsList.length === 0?<NoResult/>: <ChangeOrderList changeOrders = {VPOsList} />}
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