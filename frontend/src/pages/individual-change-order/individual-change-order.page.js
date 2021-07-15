import React, { Component } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCurrentProjectChangeOrders } from "../../redux/current-project/current-project.selectors";
import { fetchCurrentChangeOrderStart } from "../../redux/current-change-order/current-change-order.actions";
import POItemNav from "../../components/PO-item-nav/PO-item-nav.component";
import POItemMenu from "../../components/PO-item-menu/PO-item-menu.component";
import IndividualPurchaseOrderContainer from "../../components/individual-purchase-order/individual-purchase-order.container";
import PurchaseOrdersSummary from "../../components/purchase-orders-summary/purchase-orders-summary.component";
import IndividualPurchaseOrderInfo from "../../components/individual-purchase-order-info/individual-purchase-order-info.component";

class IndividualChangeOrder extends Component {
  constructor() {
    super();
    this.state = {
      active: "PO",
    };
  }

  setActive = (type) => {
    this.setState({ active: type });
  };

  componentDidMount() {
    const COid = this.props.match.params.COid;
    this.props.fetchCurrentCO(COid);
    console.log(COid, "co id");
  }
  render() {
    let changeOrder = this.props.changeOrders.filter((co) => {
      return co._id === this.props.match.params.COid;
    });
    console.log("change order: ", changeOrder);
    return (
      <div>
        <POItemNav POItem={changeOrder} VPO={true} />
        <POItemMenu active={this.state.active} changeActive={this.setActive} />

        {this.state.active === "PO" ? (
          <div>
            <PurchaseOrdersSummary purchaseOrder={changeOrder} VPO={true} />
            <IndividualPurchaseOrderContainer
              purchaseOrder={changeOrder}
              VPO={true}
            />
          </div>
        ) : this.state.active === "INFO" ? (
          <IndividualPurchaseOrderInfo purchaseOrder={changeOrder} VPO={true} />
        ) : (
          <div>Log</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  changeOrders: selectCurrentProjectChangeOrders,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentCO: (COid) => dispatch(fetchCurrentChangeOrderStart(COid)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualChangeOrder);
