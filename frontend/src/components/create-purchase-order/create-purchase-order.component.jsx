import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { createPurchaseOrderStart } from "../../redux/current-purchase-order/current-purchase-order.actions";
import {selectCurrentProjectId} from '../../redux/current-project/current-project.selectors'
class CreatePurchaseOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchaseOrderDetails: {
        orderFrom: "",
        totalOrderAmount: "",
        totalPaidAmount: '',
        taskId: this.props.taskId,
        purchasedItem: ''
      },
    };
  }

 

  handleOnChange = (e) => {
    const { name, value } = e.target;
    let PurchaseOrder = this.state.purchaseOrderDetails;
    PurchaseOrder[name] = value;

    this.setState({ purchaseOrderDetails: PurchaseOrder }, () => console.log(this.state));
  };

  createPurchaseOrder = (e) => {
    e.preventDefault();
    let purchaseOrderDetails = this.state.purchaseOrderDetails;
    this.props.createPurchaseOrder(purchaseOrderDetails);
  };

  

  render() {
    
    return (
      <div>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onChange={(e) => this.handleOnChange(e)}
          onSubmit={this.createPurchaseOrder}
        >
          <div>
            <label htmlFor="purchasedItem"> Purchased Item: </label>
            <input
              type="text"
              value={this.state.purchaseOrderDetails.purchasedItem}
              name="purchasedItem"
              id="purchasedItem"
              onChange={(e) => this.handleOnChange(e)}
              required/>
          </div>
          <div>
            <label htmlFor="orderFrom"> Order From: </label>
            <input
              type="text"
              value={this.state.purchaseOrderDetails.orderFrom}
              name="orderFrom"
              id="orderFrom"
              onChange={(e) => this.handleOnChange(e)}
              required/>
          </div>
          <div>
            <label htmlFor="totalPaidAmount"> Total Paid Amount: </label>
            <input
              type="text"
              value={this.state.purchaseOrderDetails.totalPaidAmount}
              name="totalPaidAmount"
              id="totalPaidAmount"
              onChange={(e) => this.handleOnChange(e)}
              required/>
          </div>
          <div>
            <label htmlFor="totalOrderAmount"> Total Order Amount: </label>
            <input
              value={this.state.purchaseOrderDetails.totalOrderAmount}
              name="totalOrderAmount"
              id="totalOrderAmount"
              onChange={(e) => this.handleOnChange(e)}
              required />
              
          </div>

          <div>
            <input type="submit" value="Create Purchase Order" />
          </div>
        </form>

        

      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  projectId: selectCurrentProjectId
});

const mapDispatchToProps = (dispatch) => ({
  createPurchaseOrder: (purchaseOrderDetails) => dispatch(createPurchaseOrderStart(purchaseOrderDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePurchaseOrderForm);
