import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CreatePurchaseOrderForm from '../../components/create-purchase-order-form/create-purchase-order-form.component'

 class CreatePO extends Component {

    constructor(){
      super()
      this.state={
       projectId: ''
      }
    }

    componentDidMount(){
      const projectId = this.props.match.params.projectId;
      this.setState({projectId:projectId})
  }

    render() {
        const {projectId} = this.state
       

        return (
            <div>
                <CreatePurchaseOrderForm projectId = {projectId}/>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({

  });
  
  const mapDispatchToProps = (dispatch) => ({
 
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreatePO);

