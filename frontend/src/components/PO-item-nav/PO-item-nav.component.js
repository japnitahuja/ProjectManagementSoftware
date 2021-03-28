import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { POItemNavBackButton, POItemNavDiv, POName } from './PO-item-nav.styles'
import {selectCurrentPOItem} from '../../redux/current-purchase-order/current-purchase-order.selector'
import { Link } from 'react-router-dom'
import { selectCurrentProjectId } from '../../redux/current-project/current-project.selectors'

class POItemNav extends Component {
    render() {
        const {POitem, projectId} = this.props
        return (
            <POItemNavDiv>
                <Link to={`/projectpurchaseorders/${projectId}`} style={{textDecoration: 'none'}}>
                <POItemNavBackButton>x</POItemNavBackButton>
                </Link>
                <POName>{POitem}</POName>
                <POName></POName>
            </POItemNavDiv>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    POitem: selectCurrentPOItem,
    projectId: selectCurrentProjectId
})



export default connect(mapStateToProps, null)(POItemNav)