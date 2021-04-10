import React from 'react'
import { SmallText } from '../project-item/project-item.styles'
import { COItemMenuDiv, COItemMenuItem } from './CO-item-menu.styles'

export default function COItemMenu() {
    return (
        <COItemMenuDiv>
            <COItemMenuItem>
                <SmallText>CO</SmallText>
            </COItemMenuItem>
            <COItemMenuItem>
                <SmallText>UPDATES</SmallText>
            </COItemMenuItem>
            <COItemMenuItem>
                <SmallText>CO INFO</SmallText>
            </COItemMenuItem>
        </COItemMenuDiv>
    )
}
