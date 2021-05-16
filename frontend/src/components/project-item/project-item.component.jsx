import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { deleteCurrentProjectStart } from '../../redux/current-project/current-project.actions';
import { DeleteButton } from '../delete-button/delete-button.styles';
import { ProjectDiv, LeftDiv, RightDiv, BigText, SmallText, UpperDiv, LowerDiv, Image, ProgressCircle} from "./project-item.styles";
import checkCircle from '../../assets/check-circle.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import check from '../../assets/check_box.png'

class ProjectItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.id,
            projectName: this.props.projectName,
            totalTasks: this.props.totalTasks,
            completedTasks: this.props.completedTasks, 
            projectBudget: this.props.projectBudget,
            published: this.props.published
        }
    }
    deleteProject(e){
        console.log("delete button", this.state.id);
        let projectId = this.state.id
        this.props.deleteProject(projectId);
        window.location.reload()
    }
    render() {
        const {id, published, projectName, totalTasks, completedTasks,projectBudget} = this.state;
        let progress = completedTasks/totalTasks*100;

        console.log(completedTasks, totalTasks)

        console.log(progress)

        if (isNaN(progress)){
            progress = 0;
        }

        return (
            <Link to={`/project/${id}`} style={{textDecoration:'none'}}>
                <ProjectDiv key={id}>
                    <LeftDiv>
                            <UpperDiv>
                                <BigText>{projectName}</BigText>
                                <SmallText>Total: ${projectBudget}</SmallText>
                            </UpperDiv>
                            <LowerDiv>
                                {published? <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                                    <Image src = {checkCircle}/>PUBLISHED
                                </div>:null}
                                
                            </LowerDiv>
                    </LeftDiv>
                    
                    <RightDiv>
                        <UpperDiv>
                            <ProgressCircle>
                                <CircularProgressbar value={progress} text={`${progress}%`}
                                styles={buildStyles({
                                    // Rotation of path and trail, in number of turns (0-1)
                                    rotation: 0.25,
                                
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'round',
                                
                                    // Text size
                                    textSize: '1em',
                                
                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.5,
                                
                                    // Can specify path transition in more detail, or remove it entirely
                                    // pathTransition: 'none',
                                
                                    // Colors
                                    pathColor: '#429629',
                                    textColor: '#666666'
                                  })}/>

                            </ProgressCircle>
                            
                        </UpperDiv>
                        <LowerDiv>
                            <div style={{color: '#BCC5D3', fontWeight: 'normal', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <Image src={check}/>
                                {completedTasks}/{totalTasks} TASKS
                            </div>

                            {/* <DeleteButton onClick={(e)=>this.deleteProject(e)}>DELETE</DeleteButton> */}
                            
                        </LowerDiv>
                    </RightDiv>
                </ProjectDiv>
            </Link>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    
})

const mapDispatchToProps = (dispatch) => ({
    deleteProject: (projectId) => dispatch(deleteCurrentProjectStart(projectId))
  });

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItem)

