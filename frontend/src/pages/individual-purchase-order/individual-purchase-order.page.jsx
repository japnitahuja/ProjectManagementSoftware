import React, { Component } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { fetchCurrentPurchaseOrderStart } from "../../redux/current-purchase-order/current-purchase-order.actions";
import POItemNav from "../../components/PO-item-nav/PO-item-nav.component";
import POItemMenu from "../../components/PO-item-menu/PO-item-menu.component";
import IndividualPurchaseOrderContainer from "../../components/individual-purchase-order/individual-purchase-order.container";
import PurchaseOrdersSummary from "../../components/purchase-orders-summary/purchase-orders-summary.component";
import { selectCurrentProjectPurchaseOrders } from "../../redux/current-project/current-project.selectors";
import IndividualPurchaseOrderInfo from "../../components/individual-purchase-order-info/individual-purchase-order-info.component";

class IndividualPurchaseOrder extends Component {
  constructor() {
    super();
    this.state = {
      active: "PO",
    };
  }
  componentDidMount() {}

  setActive = (type) => {
    this.setState({ active: type });
  };
  render() {
    console.log(this.props.purchaseOrders);
    let purchaseOrder = this.props.purchaseOrders.filter((po) => {
      return po._id === this.props.match.params.POid;
    });

    return (
      <div>
        <POItemNav POItem={purchaseOrder} />
        <POItemMenu active={this.state.active} changeActive={this.setActive} />

        {this.state.active === "PO" ? (
          <div>
            <PurchaseOrdersSummary purchaseOrder={purchaseOrder} />
            <IndividualPurchaseOrderContainer purchaseOrder={purchaseOrder} />
          </div>
        ) : this.state.active === "INFO" ? (
          <IndividualPurchaseOrderInfo purchaseOrder={purchaseOrder} />
        ) : (
          <div>Log</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  purchaseOrders: selectCurrentProjectPurchaseOrders,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentPO: (POid) => dispatch(fetchCurrentPurchaseOrderStart(POid)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualPurchaseOrder);
