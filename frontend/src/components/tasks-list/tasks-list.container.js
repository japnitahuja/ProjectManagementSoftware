import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsProjectFetching } from "../../redux/current-project/current-project.selectors";
import WithSpinner from '../with-spinner/with-spinner.component'
import TaskList from "./tasks-list.component";
const mapStateToProps = createStructuredSelector({
    isLoading: selectIsProjectFetching,
    
});
console.log(selectIsProjectFetching)
const TaskListContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(TaskList)

export default TaskListContainer