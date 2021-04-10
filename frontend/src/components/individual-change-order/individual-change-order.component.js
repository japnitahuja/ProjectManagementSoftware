import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentCOItem, selectCurrentCOorderFrom, selectCurrentCOPaidAmount, selectCurrentCOPurchasedItems, selectCurrentCOTotalAmount } from '../../redux/current-change-order/current-change-order.selectors'
import { BigText, SmallText } from '../project-item/project-item.styles'
import { ItemsTableDiv, ItemsTableHeading, ItemsTableRow, ItemsTableRowData, COItemAttribute, COItemValue, ChangeOrderDetailsDiv, ChangeOrderFrom, ChangeOrderPaidAmount, ChangeOrderTotalAmount } from './individual-change-order.styes'

class IndividualChangeOrderComponent extends Component {
    render() {
        const {orderFrom, COItem, COItems, totalAmount, paidAmount, itemsShipped} = this.props
        console.log(COItems)
        return (
            <div>
                <ChangeOrderDetailsDiv>
                    <ChangeOrderFrom>
                        <BigText>Change Order #1001/ {orderFrom}</BigText>
                    </ChangeOrderFrom>
                    <ChangeOrderTotalAmount>
                        <COItemAttribute>TOTAL</COItemAttribute>
                        <COItemValue>${totalAmount}</COItemValue>
                    </ChangeOrderTotalAmount>
                    <ChangeOrderPaidAmount>
                    <COItemAttribute>PAID</COItemAttribute>
                    <COItemValue>${paidAmount}</COItemValue> 
                    </ChangeOrderPaidAmount>
                </ChangeOrderDetailsDiv>
                
                
                    
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
                                COItems? COItems.map((item, index) => {
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
    orderFrom: selectCurrentCOorderFrom,
    COItem: selectCurrentCOItem,
    totalAmount: selectCurrentCOTotalAmount,
    paidAmount: selectCurrentCOPaidAmount,
    COItems: selectCurrentCOPurchasedItems,

})

export default connect(mapStateToProps, null)(IndividualChangeOrderComponent)
