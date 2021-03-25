import React, { Component } from 'react'
import { LowerNav, LowerNavEntity, LowerNavImage, LowerNavImageDiv, LowerNavText } from './lower-nav-bar.styles'
import {Link} from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { selectCurrentProjectId } from '../../redux/current-project/current-project.selectors';
import { connect } from 'react-redux';


class LowerNavBar extends Component {
    render() {
        const {projectId} = this.props
        return (
            <LowerNav>
            <LowerNavEntity>
                <LowerNavImageDiv>
                    <LowerNavImage />
                </LowerNavImageDiv>
                <Link to={`/project/${projectId}`}>
                 <LowerNavText>TASKS</LowerNavText>
                 </Link>
            </LowerNavEntity>
            <LowerNavEntity>
                <LowerNavImageDiv>
                    <LowerNavImage />
                </LowerNavImageDiv>
                <Link to={`/projectpurchaseorders/${projectId}`}>
                <LowerNavText>POs</LowerNavText>
                </Link>
            </LowerNavEntity>
            <LowerNavEntity>
                <LowerNavImageDiv>
                    <LowerNavImage />
                </LowerNavImageDiv>
                <LowerNavText>OPTIONS</LowerNavText>
            </LowerNavEntity>
            <LowerNavEntity>
                <LowerNavImageDiv>
                    <LowerNavImage />
                </LowerNavImageDiv>
                <LowerNavText>COs</LowerNavText>
            </LowerNavEntity>
            <LowerNavEntity>
                <LowerNavImageDiv>
                    <LowerNavImage />
                </LowerNavImageDiv>
                <LowerNavText>SCHEDULE</LowerNavText>
            </LowerNavEntity>
        </LowerNav>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    projectId: selectCurrentProjectId,
})

export default connect(mapStateToProps, null)(LowerNavBar)