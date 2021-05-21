import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Image, DropDownContent, DropDownOption , SmallCircle, TaskDiv, LeftDiv, RightDiv, BigText, SmallText, Circle, ProgressBar, Progress, ProgressDiv} from "./task-item.styles";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { deleteCurrentTaskStart } from "../../redux/current-task/current-task.actions";
import { CheckBox } from "../checkbox/checkbox.component";
import { DeleteButton } from "../delete-button/delete-button.styles";
import removeImage from "../../assets/remove.png"


class TaskItem extends Component{
    constructor(props){
        super(props);
        this.dropdownContainer = React.createRef();
        this.state = {
            taskDetails: this.props.taskDetails, 
            removeDropdownSwitch: false
        };
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (
          this.dropdownContainer.current &&
          !this.dropdownContainer.current.contains(event.target)
        ) {
          this.setState({
            removeDropdownSwitch: false,
          });
        }
      };

    toggleRemoveDropdown = () => {
        this.setState((prevState)=>({
            removeDropdownSwitch: !prevState.removeDropdownSwitch
        }))
    }

    deleteTask = (e) => {
        e.preventDefault()
        
        this.props.deleteTask(e.target.dataset.id);

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
                    
                    <div style={{marginLeft:"1.5em"}} onClick={this.toggleRemoveDropdown}>
                        <SmallCircle></SmallCircle>
                        <SmallCircle></SmallCircle>
                        <SmallCircle></SmallCircle>
                        <DropDownContent 
                            ref={this.dropdownContainer} 
                            display={this.state.removeDropdownSwitch?"block":"none"}
                            onClick={this.deleteTask}>
                            <DropDownOption data-id={_id}>
                                <Image src={removeImage}/>
                                Remove
                            </DropDownOption>
                        </DropDownContent>
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
