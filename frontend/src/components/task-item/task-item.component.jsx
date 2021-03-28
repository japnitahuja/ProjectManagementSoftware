import React, {Component} from "react";
import {Link} from "react-router-dom";
import { ProjectDiv, LeftDiv, RightDiv, BigText, SmallText, Circle, ProgressBar, Progress, ProgressDiv} from "./task-item.styles";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { deleteCurrentTaskStart } from "../../redux/current-task/current-task.actions";

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
        const {_id, index, taskName, completionPercentage, completedSteps, totalSteps} = this.state.taskDetails;
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
                </LeftDiv>
                
                <RightDiv>
                    <Circle/>
                    <button onClick={(e)=>this.deleteTask(e)}>Delete</button>
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
