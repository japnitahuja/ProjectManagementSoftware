import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsStepBeingCreated } from "../../redux/all-steps/all-steps.selector";
import { selectIsCurrentTaskFetching } from "../../redux/current-task/current-task.selectors";
import WithSpinner from '../with-spinner/with-spinner.component'
import StepList from "./steps-list.component";
const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCurrentTaskFetching
})
const StepListContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(StepList)

export default StepListContainer