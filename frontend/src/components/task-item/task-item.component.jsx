import React, {Component} from "react";
import {Link} from "react-router-dom";
import { ProjectDiv, LeftDiv, RightDiv, BigText, SmallText, Circle, ProgressBar, Progress, ProgressDiv} from "./task-item.styles";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { deleteCurrentTaskStart } from "../../redux/current-task/current-task.actions";
import { CheckBox } from "../checkbox/Checkbox.styles";

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
    }
    
    render (){
        const {_id, index, taskName, completionPercentage, completedSteps, totalSteps, isTaskDone} = this.state.taskDetails;
        console.log(this.state.taskDetails)
        return (
            <ProjectDiv>
                <LeftDiv>
                <Link to={`/task/${_id}`} style={{textDecoration:'none'}}> 
                    <SmallText>Task-{index + 1}</SmallText>
                    <BigText>{taskName}</BigText>
                    <ProgressDiv>
                        <ProgressBar>
                            <Progress style={{width:`${completionPercentage}%`}}/>
                        </ProgressBar>
                        <SmallText> {completedSteps}/{totalSteps} </SmallText>
                    </ProgressDiv>
                    </Link>
                    <button onClick={(e)=>this.deleteTask(e)}>Delete</button>
                </LeftDiv>
                
                <RightDiv>
                    {
                        isTaskDone? <CheckBox>&#10003;</CheckBox> : <Circle/>
                    }
                    {/* <div style={{background: '#5887F9', color: 'white', padding: '2px', border}}>&#10003;</div> */}
                    
                </RightDiv>
            </ProjectDiv>
        
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
