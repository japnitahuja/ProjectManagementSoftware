import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from '../with-spinner/with-spinner.component'
import IndividualPurchaseOrderComponent from "./individual-purchase-order.component";
import { isCuurentCOBeingFetched } from "../../redux/current-change-order/current-change-order.selector";

const mapStateToProps = createStructuredSelector({
    isLoading: isCuurentCOBeingFetched
});
console.log(isCuurentCOBeingFetched)
const IndividualPurchaseOrderContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(IndividualPurchaseOrderComponent)

export default IndividualPurchaseOrderContainer