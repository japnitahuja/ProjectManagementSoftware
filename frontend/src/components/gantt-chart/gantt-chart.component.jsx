import React, { Component } from 'react';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import { selectCurrentProjectTasks } from '../../redux/current-project/current-project.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
 
class GanttChart extends Component {

    constructor(props) {
        super(props);
    }

    dataProcessor = null;

    componentDidMount() {
        
        //gantt.config.column.width = 10;
        gantt.config.drag_links = false;
        gantt.config.columns=[
            {name:"text",width:10, resize:true, label:"Task name", align: "center"  }
        ];



        gantt.init(this.ganttContainer);
        this.initGanttDataProcessor();

        const {tasks} = this.props;
        console.log(tasks);
        let data = {data:[]};

        tasks.forEach(task => {
            let temp = {};
            temp.id = task._id;
            temp.text = task.taskName;

            var startDate = new Date(task.taskStartDate);
            var endDate = new Date(task.taskEndDate);

            temp.start_date = startDate.getDate() + "-" + (startDate.getMonth()+1) + "-" + startDate.getFullYear();

            var Difference_In_Time = endDate.getTime() - startDate.getTime();
            temp.duration = Difference_In_Time / (1000 * 3600 * 24);

            temp.progress = task.completionPercentage;
            
            data.data.push(temp);
        });

        console.log("data",data);
        gantt.parse(data);
    }

    initGanttDataProcessor(props) {
        /**
         * type: "task"|"link"
         * action: "create"|"update"|"delete"
         * item: data object object
         */
        const onDataUpdated = this.props.onDataUpdated;
        
        this.dataProcessor = gantt.createDataProcessor((type, action, item, id) => {
          console.log(type, action, item, id);
          
        });
      }

    componentWillUnmount() {
        if (this.dataProcessor) {
            this.dataProcessor.destructor();
            this.dataProcessor = null;
        }
    }

    render() {

      
       return (
           <div
                ref={ (input) => { this.ganttContainer = input } }
                style={ { width: '100%', height: '100vh' } }
            ></div>
       );
    }
}

const mapStateToProps = createStructuredSelector({
    tasks: selectCurrentProjectTasks
  });
  
  const mapDispatchToProps = (dispatch) => ({
      
    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(GanttChart);