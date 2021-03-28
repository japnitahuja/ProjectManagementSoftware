import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { selectCurrentTaskName } from '../../redux/current-task/current-task.selectors';
import { StepTaskNav, StepTaskNavCross, StepTaskNavText, OneThirdDiv } from './step-page-task-nav.styles'

class StepPageTaskNav extends Component {

    render() {
        const {taskName,projectId} = this.props
        console.log(taskName) 
        return (
            <StepTaskNav>
                <OneThirdDiv>
                    <Link to={`/project/${projectId}`} style={{textDecoration:'none'}}>
                    <StepTaskNavCross> x </StepTaskNavCross>
                    </Link>
                </OneThirdDiv>
                <OneThirdDiv>
                    <StepTaskNavText>{taskName}</StepTaskNavText>
                </OneThirdDiv>
                <OneThirdDiv></OneThirdDiv>
            </StepTaskNav>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    taskName: selectCurrentTaskName

});

export default connect(mapStateToProps, null)(StepPageTaskNav);
