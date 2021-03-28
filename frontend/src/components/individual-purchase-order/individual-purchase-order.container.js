import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from '../with-spinner/with-spinner.component'
import IndividualPurchaseOrderComponent from "./individual-purchase-order.component";
import { isCuurentPOBeingFetched } from "../../redux/current-purchase-order/current-purchase-order.selector";

const mapStateToProps = createStructuredSelector({
    isLoading: isCuurentPOBeingFetched
});
console.log(isCuurentPOBeingFetched)
const IndividualPurchaseOrderContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(IndividualPurchaseOrderComponent)

export default IndividualPurchaseOrderContainer