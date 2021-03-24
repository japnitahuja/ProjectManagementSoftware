import React from 'react'
import { StepNavDiv, StepNavIconDiv, StepNavIconImg } from './step-navbar.styles'

export default function StepNavBar() {
    return (
        <StepNavDiv>
            <StepNavIconDiv>
                Steps
                <StepNavIconImg />
            </StepNavIconDiv>
            <StepNavIconDiv>
                Messages
                <StepNavIconImg />
            </StepNavIconDiv>
            <StepNavIconDiv>
                Task Log
                <StepNavIconImg />
            </StepNavIconDiv>
            <StepNavIconDiv>
                Task Info
                <StepNavIconImg />
            </StepNavIconDiv>
        </StepNavDiv>
    )
}
