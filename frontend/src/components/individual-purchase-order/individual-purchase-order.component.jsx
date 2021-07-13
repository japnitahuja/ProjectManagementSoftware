import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentPOItem,
  selectCurrentPOorderFrom,
  selectCurrentPOPaidAmount,
  selectCurrentPOPurchasedItems,
  selectCurrentPOTotalAmount,
} from "../../redux/current-purchase-order/current-purchase-order.selector";
import {
  Container,
  Row,
  ItemValue,
  ItemDescription,
  ItemName,
  ItemTotalValue,
} from "./individual-purchase-order.component.styles";

class IndividualPurchaseOrderComponent extends Component {
  render() {
    let { purchasedItems, paid } = this.props.purchaseOrder[0];
    let totalItems = purchasedItems.length;
    let totalAmount = 0;

    return (
      <div style={{ marginBottom: "3em" }}>
        <ItemValue style={{ padding: "0.5em 1em" }}>
          {totalItems} ITEMS
        </ItemValue>
        <Container>
          {purchasedItems
            ? purchasedItems.map(
                ({ comment, itemName, itemNumber, itemValue, _id }) => {
                  totalAmount += itemNumber * itemValue;
                  return (
                    <Row key={_id}>
                      <ItemDescription>
                        <ItemName>
                          {itemNumber} - {itemName}
                        </ItemName>
                        <ItemValue>
                          {itemNumber} x {itemValue} EACH
                        </ItemValue>
                      </ItemDescription>
                      <ItemTotalValue>${itemNumber * itemValue}</ItemTotalValue>
                    </Row>
                  );
                }
              )
            : null}
        </Container>
        <Row
          style={{ border: "none", fontWeight: "600", padding: "0.2em 1em" }}
        >
          <div style={{ flex: "0.25" }}></div>
          <ItemTotalValue style={{ flex: "0.35" }}>TOTAL</ItemTotalValue>
          <ItemTotalValue
            style={{
              flex: "0.25",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            ${totalAmount}
          </ItemTotalValue>
        </Row>
        <Row style={{ border: "none", padding: "0.2em 1em" }}>
          <div style={{ flex: "0.25" }}></div>
          <ItemTotalValue style={{ flex: "0.35" }}>PAYMENT</ItemTotalValue>
          <ItemTotalValue
            style={{
              flex: "0.25",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            ${paid ? totalAmount : 0}
          </ItemTotalValue>
        </Row>
        <Row style={{ border: "none", padding: "0.2em 1em" }}>
          <div style={{ flex: "0.25" }}></div>
          <ItemTotalValue style={{ flex: "0.35" }}>BALANCE DUE </ItemTotalValue>
          <ItemTotalValue
            style={{
              flex: "0.25",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            ${paid ? 0 : totalAmount}
          </ItemTotalValue>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  orderFrom: selectCurrentPOorderFrom,
  POItem: selectCurrentPOItem,
  totalAmount: selectCurrentPOTotalAmount,
  paidAmount: selectCurrentPOPaidAmount,
  POItems: selectCurrentPOPurchasedItems,
});

export default connect(mapStateToProps, null)(IndividualPurchaseOrderComponent);
