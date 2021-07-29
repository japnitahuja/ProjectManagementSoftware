import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CreateChangeOrderForm from "../../components/create-change-order-form/create-change-order-form";
import CreatePurchaseOrderForm from '../../components/create-purchase-order-form/create-purchase-order-form.component'

 class CreateCO extends Component {

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
                <CreateChangeOrderForm projectId = {projectId}/>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({

  });
  
  const mapDispatchToProps = (dispatch) => ({
 
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreateCO);

