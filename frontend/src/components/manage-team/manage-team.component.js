import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Access from '../access/access.component'
import { BigText } from '../project-item/project-item.styles'
import Team from '../team/team.component'
import { Text, FormHeading,ManageTeamNavDiv, ManageTeamNavItem } from './manage-team.styles'

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

        let stylingFirst = []; //border-bottom, color, fontweight
        let stylingSecond = [];
        

        if(this.state.button === 'Team'){
            stylingFirst = ["#333333 solid 2px","#333333","bold"];
            stylingSecond = ["#BCC5D3 solid 1px","",""];

        }
        else{
            stylingFirst = ["#BCC5D3 solid 1px","",""];
            stylingSecond = ["#333333 solid 2px","#333333","bold"];
        }
        
        return (
            <div>
                <FormHeading>
                    Manage Team
                    <button  onClick={this.props.toggleManageTeam} style={{textDecoration:'none', 
                                    background: 'none', 
                                    border: 'none', 
                                    fontSize:'1.4em', 
                                    color:'rgba(102,102,102,0.6)'}}> &times;</button>
                </FormHeading>
                <Text style={{
                    fontSize: "0.9em", 
                    color: "#666666",
                    margin: "0.5em 0em 1em 0em"}}>
                        Configure team assignments and project access for this property.
                </Text>

                <ManageTeamNavDiv>
                    <ManageTeamNavItem onClick={this.clickTeam} style={{borderBottom:stylingFirst[0], color:stylingFirst[1], fontWeight:stylingFirst[2]}}>
                        Team
                    </ManageTeamNavItem>
                    <ManageTeamNavItem onClick={this.clickAccess} style={{borderBottom:stylingSecond[0], color:stylingSecond[1], fontWeight:stylingSecond[2]}}>
                        Access
                    </ManageTeamNavItem>
                </ManageTeamNavDiv>
                {
                    this.state.button == 'Team' ? 
                    <Team exit={this.props.toggleManageTeam}/> : <Access exit={this.props.toggleManageTeam} />
                }
            </div>
        )
    }
}

export default ManageTeam;
