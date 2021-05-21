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
import NoResult from '../../components/no-result/no-result.component';

class ProjectPurchaseOrders extends Component {
    constructor(){
        super()
        this.state={
            POsList:''
        }
    }
    componentDidMount(){
        const projectId = this.props.match.params.projectId;
        this.props.fetchProject(projectId);
        this.setState({POsList:this.props.purchaseOrders})
    }

    search = (searchedText) => {
        let temp = this.props.purchaseOrders

        if(searchedText){
          temp = temp.filter(({purchasedItem})=>{
            return purchasedItem.toLowerCase().includes(searchedText.toLowerCase())
          })
        }
        
     
        this.setState({POsList: temp})
        
     }

    render() {
        const {projectName, purchaseOrders} = this.props;
        const {POsList} = this.state;
        
        return (
             <div>
                <TaskNav title = {projectName}/>
                <PurchaseOrdersSummary purchaseOrders = {purchaseOrders}/>
                <SearchBar placeholder="Search POs..." search={this.search}/>
                {POsList.length === 0?<NoResult/>:<PurchaseOrderListContainer purchaseOrders = {POsList} />}
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