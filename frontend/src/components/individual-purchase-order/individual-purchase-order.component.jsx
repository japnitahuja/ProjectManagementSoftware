import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentPOItem, selectCurrentPOorderFrom, selectCurrentPOPaidAmount, selectCurrentPOPurchasedItems, selectCurrentPOTotalAmount } from '../../redux/current-purchase-order/current-purchase-order.selector'
import { BigText, SmallText } from '../project-item/project-item.styles'
import { ItemsTableDiv, ItemsTableHeading, ItemsTableRow, ItemsTableRowData, POItemAttribute, POItemValue, PurchaseOrderDetailsDiv, PurchaseOrderFrom, PurchaseOrderPaidAmount, PurchaseOrderTotalAmount } from './individual-purchase-order.component.styles'

class IndividualPurchaseOrderComponent extends Component {
    render() {
        const {orderFrom, POItem, POItems, totalAmount, paidAmount, itemsShipped} = this.props
        console.log(POItems)
        return (
            <div>
                <PurchaseOrderDetailsDiv>
                    <PurchaseOrderFrom>
                        <BigText>Purchase Order #1001/ {orderFrom}</BigText>
                    </PurchaseOrderFrom>
                    <PurchaseOrderTotalAmount>
                        <POItemAttribute>TOTAL</POItemAttribute>
                        <POItemValue>${totalAmount}</POItemValue>
                    </PurchaseOrderTotalAmount>
                    <PurchaseOrderPaidAmount>
                    <POItemAttribute>PAID</POItemAttribute>
                    <POItemValue>${paidAmount}</POItemValue> 
                    </PurchaseOrderPaidAmount>
                </PurchaseOrderDetailsDiv>
                
                
                    
                        {/* //<div key={index}>
                        //<div>ITEM: {item.itemName}</div>
                        //<div>ORDER: {item.itemNumber}</div>
                        //<div>SHIP: {item.itemsShipped}</div>
                        //<div>UNIT: {item.itemValue}</div>
                        //<div>TOTAL: {item.itemsShipped*item.itemValue}</div> */}

                        <ItemsTableDiv>
                            <ItemsTableRow>
                                <ItemsTableHeading>ITEM</ItemsTableHeading>
                                <ItemsTableHeading>ORDER</ItemsTableHeading>
                                <ItemsTableHeading>SHIP</ItemsTableHeading>
                                <ItemsTableHeading>UNIT</ItemsTableHeading>
                                <ItemsTableHeading>TOTAL</ItemsTableHeading>
                            </ItemsTableRow>
                            {
                                POItems? POItems.map((item, index) => {
                                    return(
                                        <ItemsTableRow key={index}>
                                            <ItemsTableRowData>{item.itemName}</ItemsTableRowData>
                                            <ItemsTableRowData>{item.itemNumber}</ItemsTableRowData>
                                            <ItemsTableRowData>{item.itemsShipped}</ItemsTableRowData>
                                            <ItemsTableRowData>${item.itemValue}</ItemsTableRowData>
                                            <ItemsTableRowData>${item.itemNumber*item.itemValue}</ItemsTableRowData>
                                        </ItemsTableRow>
                                    )
                                }): null
                            }
                        </ItemsTableDiv>
                        
                     
                
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    orderFrom: selectCurrentPOorderFrom,
    POItem: selectCurrentPOItem,
    totalAmount: selectCurrentPOTotalAmount,
    paidAmount: selectCurrentPOPaidAmount,
    POItems: selectCurrentPOPurchasedItems,

})

export default connect(mapStateToProps, null)(IndividualPurchaseOrderComponent)
