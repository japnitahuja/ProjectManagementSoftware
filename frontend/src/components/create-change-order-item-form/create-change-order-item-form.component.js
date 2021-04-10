import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { createCOitemStart } from "../../redux/current-change-order/current-change-order.actions";
import { selectCurrentCOId } from "../../redux/current-change-order/current-change-order.selectors";

class COitemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      COitem: {
        itemName: "",
        itemNumber: "",
        itemsShipped: "",
        itemValue: ''
      },
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    let item = this.state.COitem;
    item[name] = value;

    this.setState({ COitem: item }, () => console.log(this.state.COitem));
    console.log(this.props.poId)
  };

  createPurchaseOrder = (e) => {
      e.preventDefault()
    let COitem = this.state.COitem;
    COitem['coId'] = this.props.coId
    console.log(COitem)
    this.props.createCOitem(COitem);
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
              value={this.state.COitem.itemName}
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
              value={this.state.COitem.itemNumber}
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
              value={this.state.COitem.itemsShipped}
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
              value={this.state.COitem.itemValue}
              name="itemValue"
              id="itemValue"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>

          <div>
            <input type="submit" value="Create Change Order Item" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    coId: selectCurrentCOId
});

const mapDispatchToProps = (dispatch) => ({
//   signOut: () => dispatch(signOut()),
//   createTask: (COitem) => dispatch(createTaskStart(COitem)),
    createCOitem: (data) => dispatch(createCOitemStart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(COitemForm);
