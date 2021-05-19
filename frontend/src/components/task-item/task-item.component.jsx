import React, {Component} from "react";
import {Link} from "react-router-dom";
import { SmallCircle, TaskDiv, LeftDiv, RightDiv, BigText, SmallText, Circle, ProgressBar, Progress, ProgressDiv} from "./task-item.styles";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { deleteCurrentTaskStart } from "../../redux/current-task/current-task.actions";
import { CheckBox } from "../checkbox/checkbox.component";
import { DeleteButton } from "../delete-button/delete-button.styles";

class TaskItem extends Component{
    constructor(props){
        super(props);
      
        this.state = {
            taskDetails: this.props.taskDetails
        };
    }

    deleteTask(e){
        console.log("delete button", this.state.taskDetails._id);
        this.props.deleteTask(this.state.taskDetails._id);
        window.location.reload()
    }
    
    render (){
        const {_id, index, taskName, completionPercentage, completedSteps, totalSteps, isTaskDone} = this.state.taskDetails;
        console.log(this.state.taskDetails)
        return (
            <TaskDiv>
                <LeftDiv>
                <Link to={`/task/${_id}`} style={{textDecoration:'none'}}> 
                    <SmallText>TASK - {index + 1}</SmallText>
                    <BigText>{taskName}</BigText>
                    <ProgressDiv>
                        <ProgressBar>
                            <Progress style={{width:`${completionPercentage}%`}}/>
                        </ProgressBar>
                        <SmallText style={{color:"#666666"}}> 
                        {completedSteps}/{totalSteps}  &nbsp;
                        ({isNaN(completedSteps/totalSteps*100)?0:completedSteps/totalSteps*100}%)
                        </SmallText>
                    </ProgressDiv>
                    </Link>
                </LeftDiv>
                
                <RightDiv>
                    {
                        isTaskDone? <CheckBox/>: <Circle/>
                    }
                    {/* <DeleteButton onClick={(e)=>this.deleteTask(e)}>Delete</DeleteButton> */}
                    <div style={{marginLeft:"1.5em"}}>
                        <SmallCircle></SmallCircle>
                        <SmallCircle></SmallCircle>
                        <SmallCircle></SmallCircle>
                    </div>
                    
                </RightDiv>
            </TaskDiv>
        
    )}
}

const mapStateToProps = createStructuredSelector({
    
  });
  
  const mapDispatchToProps = (dispatch) => ({
    deleteTask : (taskId) => dispatch(deleteCurrentTaskStart(taskId))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TaskItem);
