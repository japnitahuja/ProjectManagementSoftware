import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { BigText, SmallText } from "../project-item/project-item.styles";
import { PODetailsDiv, PODiv, POName, PONameDiv, PONumber } from "./purchase-orders-list.styles";

class PurchaseOrderList extends React.Component {
    
  render() {
    let purchaseOrders = this.props.purchaseOrders;

    if (!purchaseOrders) {
        purchaseOrders = [];
    }
    return (
      <div>
        {purchaseOrders.map(
          ({ orderFrom, totalOrderAmount, totalPaidAmount, purchasedItem, _id }, index) => {
            return (
              <PODiv
                key={_id}
              >
                <PONameDiv>
                <Link to={`/purchaseOrder/${_id}`} style={{textDecoration: 'none'}}>
                  <SmallText>PO #{index+1001}</SmallText>
                  <BigText>{purchasedItem}</BigText>
                </Link>
                </PONameDiv>
                <PODetailsDiv>
                  <BigText>Open</BigText>
                </PODetailsDiv>
              </PODiv>
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
