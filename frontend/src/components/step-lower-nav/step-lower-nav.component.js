import React from 'react'
import { StepNavDiv, OneThirdDiv } from './step-lower-nav.styles'
import StepListContainer from '../steps-list/steps-list.container';
import StepInfo from '../step-info/step-info.component';

class StepLowerNav extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            active: 'Steps'
        }
    }

    handleOnClick = (e) => {
        let {key} = e.target.dataset

        this.setState({
            active: key
        })
    }

    showActiveDiv = () => {
        let {active} = this.state

        if (active === 'Steps'){
            return <StepListContainer steps={this.props.steps} completeTask={this.props.completeTask}/>
        }
        else if (active === 'Info'){
            return <StepInfo taskOwner={this.props.taskOwner} taskStartDate={this.props.taskStartDate}
            taskEndDate={this.props.taskEndDate}/>
        }
        else if(active === 'Log'){
            
        }
    }

    render(){
        let {active} = this.state

        return (
            <>
                <StepNavDiv>
                    <OneThirdDiv data-key='Steps' onClick={this.handleOnClick} active={active=== 'Steps'} >
                        STEPS
                    </OneThirdDiv>
                    <OneThirdDiv  data-key='Info' onClick={this.handleOnClick} active={active=== 'Info'}>
                        INFO
                    </OneThirdDiv>
                    <OneThirdDiv  data-key='Log' onClick={this.handleOnClick} active={active=== 'Log'}>
                        LOG
                    </OneThirdDiv>
                </StepNavDiv>
                {this.showActiveDiv()}
            </>
            )
    }
   
}

export default StepLowerNav;