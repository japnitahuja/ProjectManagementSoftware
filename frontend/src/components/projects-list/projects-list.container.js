import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from '../with-spinner/with-spinner.component'
import { selectAreProjectsFetching } from "../../redux/all-projects/all-projects.selectors";
import ProjectList from "./projects-list.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectAreProjectsFetching
});

const ProjectListContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ProjectList)

export default ProjectListContainer