import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentTaskName } from '../../redux/current-task/current-task.selectors';
import { StepTaskNav, StepTaskNavCross, StepTaskNavText } from './step-page-task-nav.styles'

class StepPageTaskNav extends Component {
    render() {
        const {taskName} = this.props
        console.log(taskName) 
        return (
            <StepTaskNav>
                <StepTaskNavCross />
                <StepTaskNavText>{taskName}</StepTaskNavText>
            </StepTaskNav>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    taskName: selectCurrentTaskName

});

export default connect(mapStateToProps, null)(StepPageTaskNav);
