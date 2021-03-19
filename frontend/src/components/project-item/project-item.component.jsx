import React from "react";
import {Link} from "react-router-dom";
import { ProjectDiv, LeftDiv, RightDiv, BigText, SmallText} from "./project-item.styles";

export const ProjectItem = ({projectName, projectStatus, id}) => {
    return (
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
    )
}