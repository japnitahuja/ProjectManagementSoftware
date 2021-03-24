import React from 'react'
import { LowerNav, LowerNavEntity, LowerNavImage, LowerNavImageDiv, LowerNavText } from './lower-nav-bar.styles'

export default function LowerNavBar() {
    return (
        <LowerNav>
            <LowerNavEntity>
                <LowerNavImageDiv>
                    <LowerNavImage />
                </LowerNavImageDiv>
                <LowerNavText>TASKS</LowerNavText>
            </LowerNavEntity>
            <LowerNavEntity>
                <LowerNavImageDiv>
                    <LowerNavImage />
                </LowerNavImageDiv>
                <LowerNavText>POs</LowerNavText>
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
