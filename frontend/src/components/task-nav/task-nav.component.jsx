import {Link} from "react-router-dom";
import { NavBar, Heading, Back, Image, OneThirdDiv, TwoThirdDiv } from "./task-nav.styles"
import backArrow from "../../assets/backArrow.png"

export const TaskNav = ({title}) => {
    return (
        <NavBar>
            <OneThirdDiv>
            <Back>
                <Link to = "/all-projects" style={{textDecoration:'none', color:'white'}}> 
                    <Image src={backArrow}/> Projects
                </Link>
            </Back>

            </OneThirdDiv>

            <TwoThirdDiv>
            <Heading> {title} </Heading>
            </TwoThirdDiv>
            
        </NavBar>
    )
}