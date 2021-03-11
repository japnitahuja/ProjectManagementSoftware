import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentPOItem, selectCurrentPOorderFrom, selectCurrentPOPaidAmount, selectCurrentPOPurchasedItems, selectCurrentPOTotalAmount } from '../../redux/current-purchase-order/current-purchase-order.selector'

class IndividualPurchaseOrderComponent extends Component {
    render() {
        const {orderFrom, POItem, POItems, totalAmount, paidAmount} = this.props
        return (
            <div style={{margin: '15px'}}>
                <h3>Purchase order/{orderFrom}</h3>
                <div>TOTAL: {totalAmount}</div>
                <div>PAID: {paidAmount}</div>
                <div>PURCHASED ITEM: {POItem}</div>
                
                {
                    POItems ? POItems.map((item, index) => {
                        
                        return(
                        <div style = {{ padding: '10px', border:'1px solid black', margin: '15px'}} key={index}>
                        <div>ITEM: {item.itemName}</div>
                        <div>ORDER: {item.itemNumber}</div>
                        <div>SHIP: {item.itemsShipped}</div>
                        <div>UNIT: {item.itemValue}</div>
                        <div>TOTAL: {item.itemsShipped*item.itemValue}</div>
                        </div>
                        )
                    }) : null
                }
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    orderFrom: selectCurrentPOorderFrom,
    POItem: selectCurrentPOItem,
    totalAmount: selectCurrentPOTotalAmount,
    paidAmount: selectCurrentPOPaidAmount,
    POItems: selectCurrentPOPurchasedItems
})

export default connect(mapStateToProps, null)(IndividualPurchaseOrderComponent)
