import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Access from '../access/access.component'
import { BigText } from '../project-item/project-item.styles'
import Team from '../team/team.component'
import { ManageTeamHeader, ManageTeamHeaderIcon, ManageTeamHeading, ManageTeamNavDiv, ManageTeamNavItem } from './manage-team.styles'

class ManageTeam extends Component {
    constructor(){
        super()
        this.state = {
            button: 'Team'
        }
    }
    clickTeam = () => {
        this.setState({button: 'Team'})
    }
    clickAccess = () => {
        this.setState({button: 'Access'})
    }
    render() {
        console.log(this.state)
        const {history} = this.props
        console.log(history)
        
        return (
            <div>
                <ManageTeamHeader>
                    <ManageTeamHeading>Manage Team</ManageTeamHeading>
                    <ManageTeamHeaderIcon onClick={history.goBack}>X</ManageTeamHeaderIcon>
                </ManageTeamHeader>
                <BigText style={{padding: '2vh 2vw'}}>Configure team assignments and project access for this property.</BigText>
                <ManageTeamNavDiv>
                    <ManageTeamNavItem onClick={this.clickTeam}>Team</ManageTeamNavItem>
                    <ManageTeamNavItem onClick={this.clickAccess}>Access</ManageTeamNavItem>
                </ManageTeamNavDiv>
                {
                    this.state.button == 'Team' ? 
                    <Team /> : <Access />
                }
            </div>
        )
    }
}

export default withRouter(ManageTeam)
