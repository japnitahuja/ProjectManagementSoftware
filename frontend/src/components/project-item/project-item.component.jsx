import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { deleteCurrentProjectStart } from '../../redux/current-project/current-project.actions';
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
            <Link to={`/project/${id}`} style={{textDecoration:'none'}}> 
            <ProjectDiv key={id}>
                <LeftDiv>
                    <BigText>{projectName}</BigText>
                    <SmallText>TownHome</SmallText>
                </LeftDiv>
                <RightDiv>
                    <BigText>$5000</BigText>
                    <SmallText>Remodel</SmallText>
                    
                </RightDiv>
            </ProjectDiv>
        </Link>
        <button onClick={(e)=>this.deleteProject(e)}>Delete</button>    
        
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

