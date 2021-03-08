import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { createProjectStart} from "../../redux/all-projects/all-projects.actions";
import { signOut } from "../../redux/user/user.actions";
import { selectCurrentUserFirstName } from "../../redux/user/user.selectors";

class CreatePurchaseOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchaseOrderDetails: {
        orderFrom: "",
        totalOrderAmount: "",
        totalPaidAmount: '',
        taskId: this.props.taskId
      },
    };
  }

 

  handleOnChange = (e) => {
    const { name, value } = e.target;
    let PurchaseOrder = this.state.purchaseOrderDetails;
    PurchaseOrder[name] = value;

    this.setState({ purchaseOrderDetails: PurchaseOrder });
  };

  createPurchaseOrder = (e) => {
    e.preventDefault();
    let purchaseOrderDetails = this.state.purchaseOrderDetails;
    this.props.createProject(purchaseOrderDetails);
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
            <input type="submit" value="Create Project" />
          </div>
        </form>

        

      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  createProject: (purchaseOrderDetails) => dispatch(createProjectStart(purchaseOrderDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePurchaseOrderForm);
