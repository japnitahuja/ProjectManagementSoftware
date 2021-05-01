import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BigText, SmallText } from '../project-item/project-item.styles'
import { AdminPanelButtons, AdminPanelDiv, AdminPanelProjectDetailsDiv, AdminPanelProjectDetailsHeading, AdminPanelProjectsDetailsValue, AdminPanelTeamDiv } from './admin-panel-task-page.styles'

class AdminPanelTaskPage extends Component {
    render() {
        return (
            <>
            <AdminPanelDiv>
                <BigText>Owned by Charlie Brown</BigText>
                <SmallText>Appartment Complex - Remodel</SmallText>
                <AdminPanelProjectDetailsDiv>
                    <AdminPanelProjectDetailsHeading>Estimated</AdminPanelProjectDetailsHeading>
                    <AdminPanelProjectsDetailsValue>$180,000</AdminPanelProjectsDetailsValue>
                </AdminPanelProjectDetailsDiv>
                <AdminPanelProjectDetailsDiv>
                    <AdminPanelProjectDetailsHeading>Estimated</AdminPanelProjectDetailsHeading>
                    <AdminPanelProjectsDetailsValue>$180,000</AdminPanelProjectsDetailsValue>
                </AdminPanelProjectDetailsDiv>
                <AdminPanelProjectDetailsDiv>
                    <AdminPanelProjectDetailsHeading>Estimated</AdminPanelProjectDetailsHeading>
                    <AdminPanelProjectsDetailsValue>$180,000</AdminPanelProjectsDetailsValue>
                </AdminPanelProjectDetailsDiv>
            </AdminPanelDiv>
            <AdminPanelTeamDiv>
                    <AdminPanelProjectDetailsHeading></AdminPanelProjectDetailsHeading>
                    <AdminPanelButtons>Veiw Report</AdminPanelButtons>
                </AdminPanelTeamDiv>
                <AdminPanelTeamDiv>
                    <AdminPanelProjectDetailsHeading><BigText>Assigned Members</BigText></AdminPanelProjectDetailsHeading>
                    <Link to='/ManageTeam'><AdminPanelButtons>Manage Team</AdminPanelButtons></Link>
                </AdminPanelTeamDiv>
                <AdminPanelTeamDiv>
                    <AdminPanelProjectDetailsHeading><BigText>Roles Assigned</BigText></AdminPanelProjectDetailsHeading>
                    <AdminPanelButtons>Manage Roles</AdminPanelButtons>
                </AdminPanelTeamDiv>
            </>
        )
    }
}

export default AdminPanelTaskPage
