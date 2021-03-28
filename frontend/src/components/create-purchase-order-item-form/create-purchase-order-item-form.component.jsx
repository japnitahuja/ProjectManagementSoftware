import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { createPOitemStart } from "../../redux/current-purchase-order/current-purchase-order.actions";
import { selectCurrentPOId } from "../../redux/current-purchase-order/current-purchase-order.selector";

class POitemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      POitem: {
        itemName: "",
        itemNumber: "",
        itemsShipped: "",
        itemValue: ''
      },
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    let item = this.state.POitem;
    item[name] = value;

    this.setState({ POitem: item }, () => console.log(this.state.POitem));
    console.log(this.props.poId)
  };

  createPurchaseOrder = (e) => {
    let POitem = this.state.POitem;
    POitem['poId'] = this.props.poId
    this.props.createPOitem(POitem);
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
            <label htmlFor="itemName"> Item Name: </label>
            <input
              type="text"
              value={this.state.POitem.itemName}
              name="itemName"
              id="itemName"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>

          <div>
            <label htmlFor="itemNumber"> Item Number: </label>
            <input
              type="number"
              value={this.state.POitem.itemNumber}
              name="itemNumber"
              id="itemNumber"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>

          <div>
            <label htmlFor="itemsShipped"> Items Shipped: </label>
            <input
              type="number"
              value={this.state.POitem.itemsShipped}
              name="itemsShipped"
              id="itemsShipped"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>
          <div>
            <label htmlFor="itemValue"> Item Value: </label>
            <input
              type="text"
              value={this.state.POitem.itemValue}
              name="itemValue"
              id="itemValue"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>

          <div>
            <input type="submit" value="Create Purchase Order Item" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    poId: selectCurrentPOId
});

const mapDispatchToProps = (dispatch) => ({
//   signOut: () => dispatch(signOut()),
//   createTask: (POitem) => dispatch(createTaskStart(POitem)),
    createPOitem: (data) => dispatch(createPOitemStart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(POitemForm);
