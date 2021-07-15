import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { createPurchaseOrderStart } from "../../redux/current-purchase-order/current-purchase-order.actions";
import {
  selectCurrentProjectId,
  selectCurrentProjectTasks,
} from "../../redux/current-project/current-project.selectors";
import {
  Container,
  InfoInput,
  InfoInputDiv,
  InfoTitle,
  InfoDiv,
  LongInput,
  LowerNavDiv,
  OneHalfDiv,
  NavBar,
  OneThirdDiv,
  POFormDiv,
  Overlay,
  AddLineItemDiv,
  AmountDiv,
  LongDiv,
} from "./individual-purchase-order-info.styles";
import { Link, withRouter } from "react-router-dom";
import FormFullScreenSelection from "../form-fullscreen-selection/form-fullscreen-selection.component";
import FormCostbookSelection from "../form-costbook-selection/form-costbook-selection.component";
import add from "../../assets/add.png";
import remove from "../../assets/minuscircle.png";
import PurchaseOrder from "./../../pages/task-purchase-orders/task-purchase-orders.page";

class IndividualPurchaseOrderInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let purchaseOrder = this.props.purchaseOrder[0];
    console.log(purchaseOrder);
    return (
      <Container>
        <InfoDiv>
          <InfoTitle>Title</InfoTitle>
          <InfoInputDiv id="Title">{purchaseOrder.PoTitle}</InfoInputDiv>
        </InfoDiv>

        <InfoDiv>
          <InfoTitle>Group</InfoTitle>
          <InfoInputDiv id="Group">{purchaseOrder.group}</InfoInputDiv>
        </InfoDiv>

        <InfoDiv>
          <InfoTitle>Date</InfoTitle>
          <InfoInputDiv id="Date">{purchaseOrder.PoDate}</InfoInputDiv>
        </InfoDiv>

        <InfoDiv>
          <InfoTitle>Terms</InfoTitle>
          <InfoInputDiv id="Terms">{purchaseOrder.terms}</InfoInputDiv>
        </InfoDiv>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  projectId: selectCurrentProjectId,
  tasks: selectCurrentProjectTasks,
});

const mapDispatchToProps = (dispatch) => ({
  createPurchaseOrder: (purchaseOrderDetails) =>
    dispatch(createPurchaseOrderStart(purchaseOrderDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(IndividualPurchaseOrderInfo));
