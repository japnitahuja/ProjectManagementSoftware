import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { deleteCurrentProjectStart } from '../../redux/current-project/current-project.actions';
import { DeleteButton } from '../delete-button/delete-button.styles';
import { ProjectDiv, LeftDiv, RightDiv, BigText, SmallText} from "./project-item.styles";


class ProjectItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.id,
            projectName: this.props.projectName,
        }
    }
    deleteProject(e){
        console.log("delete button", this.state.id);
        let projectId = this.state.id
        this.props.deleteProject(projectId);
    }
    render() {
        const {id, projectName} = this.state
        return (
            <>
            <ProjectDiv key={id}>
             
                <LeftDiv>
                <Link to={`/project/${id}`} style={{textDecoration:'none'}}>
                    <BigText>{projectName}</BigText>
                    <SmallText>TownHome</SmallText>
                    </Link>
                    <DeleteButton onClick={(e)=>this.deleteProject(e)}>DELETE</DeleteButton>
                </LeftDiv>
                <RightDiv>
                <Link to={`/project/${id}`} style={{textDecoration:'none'}}>
                    <BigText>$5000</BigText>
                    <SmallText>Remodel</SmallText>  
                    </Link>
                </RightDiv>
                
                
            </ProjectDiv>
        
            
        
        </>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    
})

const mapDispatchToProps = (dispatch) => ({
    deleteProject: (projectId) => dispatch(deleteCurrentProjectStart(projectId))
  });

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItem)

