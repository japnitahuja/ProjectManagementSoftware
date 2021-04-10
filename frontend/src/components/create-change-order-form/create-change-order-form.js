import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectCurrentProjectId} from '../../redux/current-project/current-project.selectors'
import { createChangeOrderStart } from "../../redux/current-change-order/current-change-order.actions";
class CreateChangeOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeOrderDetails: {
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
    let ChangeOrder = this.state.changeOrderDetails;
    ChangeOrder[name] = value;

    this.setState({ changeOrderDetails: ChangeOrder }, () => console.log(this.state));
  };

  createChangeOrder = (e) => {
    e.preventDefault();
    let changeOrderDetails = this.state.changeOrderDetails;
    this.props.createChangeOrder(changeOrderDetails);
    // window.location.reload()
  };

  

  render() {
    
    return (
      <div style={{padding:"10px"}}>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onChange={(e) => this.handleOnChange(e)}
          onSubmit={this.createChangeOrder}
        >
          <div>
            <label htmlFor="purchasedItem"> Purchased Item: </label>
            <input
              type="text"
              value={this.state.changeOrderDetails.purchasedItem}
              name="purchasedItem"
              id="purchasedItem"
              onChange={(e) => this.handleOnChange(e)}
              required/>
          </div>
          <div>
            <label htmlFor="orderFrom"> Order From: </label>
            <input
              type="text"
              value={this.state.changeOrderDetails.orderFrom}
              name="orderFrom"
              id="orderFrom"
              onChange={(e) => this.handleOnChange(e)}
              required/>
          </div>
          <div>
            <label htmlFor="totalPaidAmount"> Total Paid Amount: </label>
            <input
              type="text"
              value={this.state.changeOrderDetails.totalPaidAmount}
              name="totalPaidAmount"
              id="totalPaidAmount"
              onChange={(e) => this.handleOnChange(e)}
              required/>
          </div>
          <div>
            <label htmlFor="totalOrderAmount"> Total Order Amount: </label>
            <input
              value={this.state.changeOrderDetails.totalOrderAmount}
              name="totalOrderAmount"
              id="totalOrderAmount"
              onChange={(e) => this.handleOnChange(e)}
              required />
              
          </div>

          <div>
            <input type="submit" value="Create Change Order" />
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
  createChangeOrder: (changeOrderDetails) => dispatch(createChangeOrderStart(changeOrderDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateChangeOrderForm);
