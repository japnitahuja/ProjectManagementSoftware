import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { BigText, SmallText } from "../project-item/project-item.styles";
import { PODetailsDiv, PODiv, POName, PONameDiv, PONumber } from "../purchase-orders-list/purchase-orders-list.styles";

class ChangeOrderList extends React.Component {
    
  render() {
    let changeOrders = this.props.changeOrders;

    if (!changeOrders) {
        changeOrders = [];
    }
    return (
      <div>
        {changeOrders.map(
          ({ orderFrom, totalOrderAmount, totalPaidAmount, purchasedItem, _id }, index) => {
            return (
              <PODiv
                key={_id}
              >
                <PONameDiv>
                <Link to={`/changeOrder/${_id}`} style={{textDecoration: 'none'}}>
                  <SmallText>CO #{index+1001}</SmallText>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangeOrderList);