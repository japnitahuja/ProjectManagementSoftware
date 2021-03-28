import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCurrentTaskFetching } from "../../redux/current-task/current-task.selectors";
import WithSpinner from '../with-spinner/with-spinner.component'
import PurchaseOrderList from "./purchase-orders-list.component";
const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCurrentTaskFetching
});
console.log(selectIsCurrentTaskFetching)
const PurchaseOrderListContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(PurchaseOrderList)

export default PurchaseOrderListContainer