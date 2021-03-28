import React from 'react'
import { SmallText } from '../project-item/project-item.styles'
import { POItemMenuDiv, POItemMenuItem } from './PO-item-menu.styles'

export default function POItemMenu() {
    return (
        <POItemMenuDiv>
            <POItemMenuItem>
                <SmallText>PO</SmallText>
            </POItemMenuItem>
            <POItemMenuItem>
                <SmallText>UPDATES</SmallText>
            </POItemMenuItem>
            <POItemMenuItem>
                <SmallText>PO INFO</SmallText>
            </POItemMenuItem>
        </POItemMenuDiv>
    )
}
