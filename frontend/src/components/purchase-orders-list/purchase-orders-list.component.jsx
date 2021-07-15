import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { BigText, SmallText } from "../project-item/project-item.styles";
import SearchBar from "../search-bar/search-bar.component";
import {
  POSummaryDiv,
  PODetailsDiv,
  PODiv,
  POName,
  PONameDiv,
  PONumber,
  TinyText,
  POGreyHeading,
} from "./purchase-orders-list.styles";

class PurchaseOrderList extends React.Component {
  render() {
    let purchaseOrders = this.props.purchaseOrders;
    console.log(purchaseOrders);
    let purchasedItemsAmounts = [];
    let purchasedItemPaid = [];
    let openAmount = 0;

    purchaseOrders.map(({ purchasedItems, paid }) => {
      let Amount = 0;
      purchasedItems.map(({ itemNumber, itemValue }) => {
        Amount += itemNumber * itemValue;
      });
      purchasedItemsAmounts.push(Amount);
      if (paid) {
        purchasedItemPaid.push(Amount);
      } else {
        purchasedItemPaid.push(0);
      }
    });

    console.log(purchasedItemsAmounts, purchasedItemPaid);
    const sum = (accumulator, currentValue) => accumulator + currentValue;
    openAmount = purchasedItemsAmounts.reduce(sum);

    if (!purchaseOrders) {
      purchaseOrders = [];
    }
    return (
      <div style={{ marginBottom: "5em" }}>
        <POGreyHeading>
          <div>OPEN: ${openAmount}</div>
          <div>STATUS</div>
        </POGreyHeading>
        {purchaseOrders.map(
          (
            {
              orderFrom,
              totalOrderAmount,
              totalPaidAmount,
              _id,
              PoTitle,
              CoTitle,
            },
            index
          ) => {
            return (
              <Link
                to={
                  this.props.VPO
                    ? `/changeOrder/${_id}`
                    : `/purchaseOrder/${_id}`
                }
                style={{ textDecoration: "none" }}
              >
                <PODiv key={_id}>
                  <PONameDiv>
                    <TinyText>
                      {this.props.VPO ? `VPO` : `PO`} #{index + 1000}
                    </TinyText>
                    <BigText>{this.props.VPO ? CoTitle : PoTitle}</BigText>
                  </PONameDiv>
                  <PODetailsDiv>
                    <BigText>
                      {purchasedItemsAmounts[index] === purchasedItemPaid[index]
                        ? "Paid"
                        : "Open"}
                    </BigText>
                  </PODetailsDiv>
                </PODiv>
              </Link>
            );
          }
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseOrderList);
