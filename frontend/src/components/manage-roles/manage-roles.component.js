import React, { Component } from 'react'
import { Text, FormHeading, ManageRolesDiv} from './manage-roles.styles'
import {Overlay} from "../admin-panel-task-page/admin-panel-task-page.styles"
import AddRoleForm from '../addrole-form/addrole-form.component'

class ManageRoles extends Component {
    constructor(){
        
        super()
        this.state = {
           addRoleSwitch: false
        }
    }

    addRoleToggle = () =>
    {
        this.setState((prevState) => ({
           addRoleSwitch: !prevState.addRoleSwitch
        }), console.log(this.state));
    }

    render() {
        
        return (
            <ManageRolesDiv>
                <FormHeading>
                    Manage Team
                    <button  onClick={this.props.toggleManageRoles} style={{textDecoration:'none', 
                                    background: 'none', 
                                    border: 'none', 
                                    fontSize:'1.4em', 
                                    color:'rgba(102,102,102,0.6)'}}> &times;</button>
                </FormHeading>

                <Text 
                    onClick={this.addRoleToggle}
                    style={{
                            color:"#3F8CFF",
                            fontSize:"1em"}}>
                <u><b>Add Role</b></u>
                </Text>

                {this.state.addRoleSwitch? 
                <Overlay 
                    backgroundcolor = "rgba(0,0,0,0.3)" 
                    style={{bottom:"0",height:"100%", display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <AddRoleForm exit={this.addRoleToggle}></AddRoleForm>
                </Overlay> : <Overlay/>
                }

            </ManageRolesDiv>
        )
    }
}

export default ManageRoles;
