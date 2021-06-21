import { string } from "prop-types";
import React, {Component} from "react";
import { Container, InfoDiv, InfoTitle, InfoBox} from "./step-info.styles";


class StepInfo extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let {taskOwner,taskEndDate, taskStartDate} = this.props
        let startDate = new Date(taskStartDate)
        let endDate = new Date(taskEndDate)
        return(
            <Container>
                <InfoDiv>
                    <InfoTitle>
                        Task Owner
                    </InfoTitle>
                    <InfoBox>
                        Myles
                    </InfoBox>
                </InfoDiv>

                <InfoDiv>
                    <InfoTitle>
                        Start Date
                    </InfoTitle>
                    <InfoBox>
                       {startDate.getDate() + "/" + startDate.getMonth() + "/" + startDate.getFullYear()}
                    </InfoBox>
                </InfoDiv>

                <InfoDiv>
                    <InfoTitle>
                        End Date
                    </InfoTitle>
                    <InfoBox>
                        {endDate.getDate() + "/" + endDate.getMonth() + "/" + endDate.getFullYear()}
                    </InfoBox>
                </InfoDiv>
            </Container>
        )
    }
}

export default StepInfo;