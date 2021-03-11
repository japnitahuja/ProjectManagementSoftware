import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

class PurchaseOrderList extends React.Component {
    
  render() {
    let purchaseOrders = this.props.purchaseOrders;

    if (!purchaseOrders) {
        purchaseOrders = [];
    }
    return (
      <div>
        {purchaseOrders.map(
          ({ orderFrom, totalOrderAmount, totalPaidAmount, purchasedItem, _id }) => {
            return (
              <div
                key={_id}
                style={{ padding: "10px", border: "1px solid black" }}
              >
                <Link to={`/purchaseOrder/${_id}`}>
                  <h3>Purchased Item: {purchasedItem}</h3>
                </Link>
                Order from: {orderFrom}<br/>
                Total Order Amount: {totalOrderAmount}<br/>
                Total Paid Amount: {totalPaidAmount}
              </div>
            );
          }
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseOrderList);
