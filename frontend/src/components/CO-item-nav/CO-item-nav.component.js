import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { COItemNavBackButton, COItemNavDiv, COName } from './CO-item-nav.styles'
import {selectCurrentCOItem} from '../../redux/current-change-order/current-change-order.selectors'
import { Link } from 'react-router-dom'
import { selectCurrentProjectId } from '../../redux/current-project/current-project.selectors'

class COItemNav extends Component {
    render() {
        const {COitem, projectId} = this.props
        return (
            <COItemNavDiv>
                <Link to={`/projectpurchaseorders/${projectId}`} style={{textDecoration: 'none'}}>
                <COItemNavBackButton>x</COItemNavBackButton>
                </Link>
                <COName>{COitem}</COName>
                <COName></COName>
            </COItemNavDiv>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    COitem: selectCurrentCOItem,
    projectId: selectCurrentProjectId
})



export default connect(mapStateToProps, null)(COItemNav)