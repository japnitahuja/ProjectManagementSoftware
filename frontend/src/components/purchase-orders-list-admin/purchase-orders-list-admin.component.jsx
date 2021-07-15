import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import SearchBar from "../search-bar/search-bar.component";
import {
  PODetailsDiv,
  PODiv,
  PONameDiv,
  TinyText,
  POGreyHeading,
  BigText,
  Tick,
  Circle,
} from "./purchase-orders-list-admin.styles";
import tick from "../../assets/tick.jpg";

class PurchaseOrderListAdmin extends React.Component {
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
        {purchaseOrders.map(({ PoDate, _id, PoTitle, CoTitle }, index) => {
          let date = new Date(PoDate);
          return (
            <Link
              to={
                this.props.VPO ? `/changeOrder/${_id}` : `/purchaseOrder/${_id}`
              }
              style={{ textDecoration: "none" }}
            >
              <PODiv key={_id}>
                <PONameDiv>
                  <BigText weight="600">
                    {this.props.VPO ? CoTitle : PoTitle}
                  </BigText>
                  <BigText>{this.props.VPO ? CoTitle : PoTitle}</BigText>
                  <TinyText>
                    {purchasedItemsAmounts[index] ===
                    purchasedItemPaid[index] ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontWeight: "600",
                          color: "#43962A",
                        }}
                      >
                        <Tick src={tick} />
                        Paid
                      </div>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontWeight: "600",
                        }}
                      >
                        <Circle />
                        Open
                      </div>
                    )}
                  </TinyText>
                </PONameDiv>
                <PODetailsDiv>
                  <BigText weight="600">
                    ${purchasedItemsAmounts[index]}
                  </BigText>
                  <TinyText>#{1000 + index}</TinyText>
                  <TinyText>{date.toISOString().slice(0, 10)}</TinyText>
                </PODetailsDiv>
              </PODiv>
            </Link>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseOrderListAdmin);
