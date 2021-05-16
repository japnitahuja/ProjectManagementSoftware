import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { BigText, SmallText } from "../project-item/project-item.styles";
import SearchBar from "../search-bar/search-bar.component";
import { POSummaryDiv, Text} from "./purchase-orders-summary.styles";

class PurchaseOrdersSummary extends React.Component {
    
  render() {
    let purchaseOrders = this.props.purchaseOrders;
    console.log(purchaseOrders)

    if (!purchaseOrders) {
        purchaseOrders = [];
    }

    let sumAmount = 0;
    let unpaidAmount = 0;
    purchaseOrders.map(({totalOrderAmount, totalPaidAmount})=>{
      sumAmount += totalOrderAmount
      unpaidAmount += totalOrderAmount
      unpaidAmount -= totalPaidAmount
    })
    return (
      <POSummaryDiv>
        <Text color="#727272" fontSize="1em"><b>PURCHASE ORDER TOTAL</b></Text>
        <Text color="#434343" fontSize="2em"><b>${sumAmount}</b></Text>
        <Text color="#434343" fontSize="1em">Open Balance: ${unpaidAmount}</Text>
      </POSummaryDiv>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  
  
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseOrdersSummary);
