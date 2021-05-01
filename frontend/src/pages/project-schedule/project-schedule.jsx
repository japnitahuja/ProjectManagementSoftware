import React, { Component } from 'react'
import { selectCurrentProjectName, selectCurrentProjectTasks } from '../../redux/current-project/current-project.selectors';
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { TaskNav } from '../../components/task-nav/task-nav.component';
import LowerNavBar from '../../components/lower-nav-bar/lower-nav-bar.component';
import GanttChartContainer from '../../components/gantt-chart/gantt-chart.container';

class ProjectSchedule extends Component {


    render() {
        const {projectName} = this.props;

        return (
             <div>
                <TaskNav title = {projectName}/>
                <GanttChartContainer/>
                <LowerNavBar/>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    projectName: selectCurrentProjectName
  });
  
  const mapDispatchToProps = (dispatch) => ({
      
    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProjectSchedule);