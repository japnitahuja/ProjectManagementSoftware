import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { selectCurrentProjectOwner, selectCurrentProjectPurchaseOrders, selectCurrentProjectType, selectCurrentPropertyType } from '../../redux/current-project/current-project.selectors';
import ToggleButton from '../toggle-button/toggle-button.component';
import { Text, AdminPanelButtons, AdminPanelDiv, AdminPanelProjectDetailsDiv, AdminPanelProjectDetailsHeading, AdminPanelProjectsDetailsValue, AdminPanelTeamDiv } from './admin-panel-task-page.styles'
import { createStructuredSelector } from "reselect";

class AdminPanelTaskPage extends Component {
    constructor() {
        super();
        this.state = {
            publishedSwitch: false
        }
      }

    publishedToggle = () => {
        this.setState((prevState) => ({
            publishedSwitch: !prevState.publishedSwitch
        }));
    }

    render() {
        let {owner, projectType, propertyType} = this.props;
        console.log(this.props)
        return (
            <>
            <AdminPanelDiv>
                <Text style={{fontSize: '1em', color:'#666666'}}>
                    Owned by <u>{owner.firstName} {owner.lastName}</u>
                </Text>
                <Text style={{fontSize: '1em', color:'#8997B1'}}>
                    {propertyType? projectType:null} {projectType}
                </Text>
                <div style={{display:'flex', flexDirection:'column', width:'50%'}}>
                    <AdminPanelProjectDetailsDiv>
                        <AdminPanelProjectDetailsHeading>Estimated</AdminPanelProjectDetailsHeading>
                        <AdminPanelProjectsDetailsValue>$180,000</AdminPanelProjectsDetailsValue>
                    </AdminPanelProjectDetailsDiv>
                    <AdminPanelProjectDetailsDiv>
                        <AdminPanelProjectDetailsHeading>Actual</AdminPanelProjectDetailsHeading>
                        <AdminPanelProjectsDetailsValue>$180,000</AdminPanelProjectsDetailsValue>
                    </AdminPanelProjectDetailsDiv>
                    <AdminPanelProjectDetailsDiv>
                        <AdminPanelProjectDetailsHeading>Over</AdminPanelProjectDetailsHeading>
                        <AdminPanelProjectsDetailsValue style={{color:"#EB5757"}}>$180,000</AdminPanelProjectsDetailsValue>
                    </AdminPanelProjectDetailsDiv>
                </div>
               
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center'}}>

                    <ToggleButton 
                        onToggleFunction = {this.publishedToggle} 
                        checked = {this.state.publishedSwitch} 
                        color="#429629"/>

                    <p style={{
                            fontSize: '1em',
                            color:'#666666', 
                            margin:'0', 
                            paddingLeft:'0.5em'}}>
                    Published
                    </p>
                </div>
            </AdminPanelDiv>

            

            <AdminPanelTeamDiv>
                    <AdminPanelProjectDetailsHeading></AdminPanelProjectDetailsHeading>
                    <AdminPanelButtons>View Report</AdminPanelButtons>
            </AdminPanelTeamDiv>
            <AdminPanelTeamDiv>
                    <AdminPanelProjectDetailsHeading>Assigned Members</AdminPanelProjectDetailsHeading>
                    <Link to='/ManageTeam'><AdminPanelButtons>Manage Team</AdminPanelButtons></Link>
            </AdminPanelTeamDiv>
            <AdminPanelTeamDiv>
                    <AdminPanelProjectDetailsHeading>Roles Assigned</AdminPanelProjectDetailsHeading>
                    <AdminPanelButtons>Manage Roles</AdminPanelButtons>
            </AdminPanelTeamDiv>
            </>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    owner: selectCurrentProjectOwner, 
    projectType: selectCurrentProjectType,
    propertyType: selectCurrentPropertyType,
    purchaseOrders: selectCurrentProjectPurchaseOrders
});
  
const mapDispatchToProps = (dispatch) => ({
    
});
  
export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelTaskPage);
