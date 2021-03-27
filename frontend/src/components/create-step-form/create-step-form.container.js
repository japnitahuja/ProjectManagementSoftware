import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsStepBeingCreated } from "../../redux/all-steps/all-steps.selector";
import WithSpinner from '../with-spinner/with-spinner.component'
import CreateStepForm from "./create-step-form.component";
const mapStateToProps = createStructuredSelector({
    isLoading: selectIsStepBeingCreated
});

const CreateStepFormContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CreateStepForm)

export default CreateStepFormContainer