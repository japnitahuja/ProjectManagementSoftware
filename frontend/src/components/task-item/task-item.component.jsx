import React from "react";
import {Link} from "react-router-dom";
import { ProjectDiv, LeftDiv, RightDiv, BigText, SmallText, Circle, ProgressBar, Progress, ProgressDiv} from "./task-item.styles";

export const TaskItem = (taskDetails) => {
    const {_id, index, taskName, completionPercentage, completedSteps, totalSteps,} = taskDetails.taskDetails;
    return (
        <Link to={`/task/${_id}`} style={{textDecoration:'none'}}> 
            <ProjectDiv key={_id}>
                <LeftDiv>
                    <SmallText>Task-{index + 1}</SmallText>
                    <BigText>{taskName}</BigText>
                    <ProgressDiv>
                        <ProgressBar>
                            <Progress style={{width:`${completionPercentage}%`}}/>
                        </ProgressBar>
                        <SmallText> {completedSteps}/{totalSteps} </SmallText>
                    </ProgressDiv>
                </LeftDiv>
                <RightDiv>
                    <Circle/>
                </RightDiv>
            </ProjectDiv>
        </Link>
    )
}