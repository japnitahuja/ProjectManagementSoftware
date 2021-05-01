import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsProjectFetching } from "../../redux/current-project/current-project.selectors";
import WithSpinner from '../with-spinner/with-spinner.component'
import GanttChart from "./gantt-chart.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsProjectFetching,
    
});
console.log(selectIsProjectFetching)
const GanttChartContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(GanttChart)

export default GanttChartContainer