import {Link} from "react-router-dom";
import { NavBar, Heading, NotifDiv, Back } from "./task-nav.styles"

export const TaskNav = ({title}) => {
    return (
        <NavBar>
            <Back>
                <Link to = "/all-projects" style={{textDecoration:'none', color:'black'}}> 
                    {`<`} Back 
                </Link>
            </Back>
            <Heading> {title} </Heading>
            <NotifDiv> N </NotifDiv>
        </NavBar>
    )
}