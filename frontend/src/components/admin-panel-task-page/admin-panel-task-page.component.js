import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectCurrentProjectBudget, selectCurrentProjectOwner, selectCurrentProjectPublished, selectCurrentProjectPurchaseOrders, selectCurrentProjectType, selectCurrentPropertyType } from '../../redux/current-project/current-project.selectors';
import ToggleButton from '../toggle-button/toggle-button.component';
import { Overlay, Text, AdminPanelButtons, AdminPanelDiv, AdminPanelProjectDetailsDiv, AdminPanelProjectDetailsHeading, AdminPanelProjectsDetailsValue, AdminPanelTeamDiv } from './admin-panel-task-page.styles'
import { createStructuredSelector } from "reselect";
import { UpdatePublishedInProjectStart } from '../../redux/current-project/current-project.actions';
import ManageTeam from '../manage-team/manage-team.component'
import ManageRoles from '../manage-roles/manage-roles.component'

class AdminPanelTaskPage extends Component {
    constructor() {
        super();
        this.state = {
            publishedSwitch: null,
            manageTeamSwitch: false,
            manageRolesSwitch: false
        }
      }

      componentDidMount(){
        this.setState({publishedSwitch: this.props.published})
    }
    

    publishedToggle = () => {
        this.setState((prevState) => ({
            publishedSwitch: !prevState.publishedSwitch
        }));
        console.log('called')
        this.props.updatePublished();
    }

    manageTeamToggle = () => {
        this.setState((prevState) => ({
            manageTeamSwitch: !prevState.manageTeamSwitch
        }));
    }

    manageRolesToggle = () => {
        this.setState((prevState) => ({
            manageRolesSwitch: !prevState.manageRolesSwitch
        }));
    }

    render() {
        let {owner, projectType, propertyType, projectBudget, purchaseOrders} = this.props;
        console.log(this.props)

        let actualAmount = 0;
        purchaseOrders.map(({totalOrderAmount}) => {actualAmount = actualAmount + totalOrderAmount})
        
        let diffAmount = projectBudget - actualAmount;
        let diffColour = "";
        if (diffAmount<0){
            diffColour = "#EB5757"
        }
        else {
            diffColour= "#429629"
        }

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
                        <AdminPanelProjectsDetailsValue>${projectBudget}</AdminPanelProjectsDetailsValue>
                    </AdminPanelProjectDetailsDiv>
                    <AdminPanelProjectDetailsDiv>
                        <AdminPanelProjectDetailsHeading>Actual</AdminPanelProjectDetailsHeading>
                        <AdminPanelProjectsDetailsValue>${actualAmount}</AdminPanelProjectsDetailsValue>
                    </AdminPanelProjectDetailsDiv>
                    <AdminPanelProjectDetailsDiv>
                        <AdminPanelProjectDetailsHeading>Difference</AdminPanelProjectDetailsHeading>
                        <AdminPanelProjectsDetailsValue style={{color:diffColour}}>${diffAmount}</AdminPanelProjectsDetailsValue>
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
                    <AdminPanelButtons onClick={this.manageTeamToggle}>Manage Team</AdminPanelButtons>
            </AdminPanelTeamDiv>
            <AdminPanelTeamDiv>
                    <AdminPanelProjectDetailsHeading>Roles Assigned</AdminPanelProjectDetailsHeading>
                    <AdminPanelButtons onClick={this.manageRolesToggle}>Manage Roles</AdminPanelButtons>
            </AdminPanelTeamDiv>

            {
            this.state.manageTeamSwitch? 
            <Overlay backgroundcolor = "#FFFFFF" style={{bottom:"0",height:"100%", padding:"2em"}}>
            <ManageTeam toggleManageTeam={this.manageTeamToggle}></ManageTeam>
            </Overlay> : <Overlay/>
            }

            {
            this.state.manageRolesSwitch? 
            <Overlay backgroundcolor = "rgba(0,0,0,0.3)" style={{bottom:"0",height:"100%"}}>
            <ManageRoles toggleManageRoles={this.manageRolesToggle}></ManageRoles>
            </Overlay> : <Overlay/>
            }
            </>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    owner: selectCurrentProjectOwner, 
    projectType: selectCurrentProjectType,
    propertyType: selectCurrentPropertyType,
    purchaseOrders: selectCurrentProjectPurchaseOrders,
    projectBudget: selectCurrentProjectBudget,
    published: selectCurrentProjectPublished
});
  
const mapDispatchToProps = (dispatch) => ({
    updatePublished: () => dispatch(UpdatePublishedInProjectStart())
});
  
export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelTaskPage);
