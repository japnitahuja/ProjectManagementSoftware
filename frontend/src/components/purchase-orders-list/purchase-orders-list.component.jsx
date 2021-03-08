import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { completeStepQuestionStart } from "../../redux/all-steps/all-steps.actions";
import { selectStepQuestionAnsweredConfirmationMessage } from "../../redux/all-steps/all-steps.selector";
import ConformationMesage from "../conformation-message/comformation-message.component";

class PurchaseOrderList extends React.Component {
    
  render() {
    let purchaseOrders = this.props.purchaseOrders;

    if (!purchaseOrders) {
        purchaseOrders = [];
    }
    return (
      <div>
        {purchaseOrders.map(
          ({ orderFrom, totalOrderAmount, totalPaidAmount, _id }) => {
              console.log(_id)
            return (
              <div
                key={_id}
                style={{ padding: "10px", border: "1px solid black" }}
              >
                <Link to={`/purchaseOrder/${_id}`}>
                  <h3>Order from: {orderFrom}</h3>
                </Link><br/>
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
  stepQuestionConfirmation: selectStepQuestionAnsweredConfirmationMessage,
});

const mapDispatchToProps = (dispatch) => ({
  completeStepQuestion: (stepId) => dispatch(completeStepQuestionStart(stepId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseOrderList);
