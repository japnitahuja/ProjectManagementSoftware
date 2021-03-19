import { Hamburger } from "../hamburger/hamburger.component"
import { NavBar, Heading, NotifDiv } from "./project-nav.styles"

export const ProjectNav = ({title}) => {
    return (
        <NavBar>
            <Hamburger/>
            <Heading> {title} </Heading>
            <NotifDiv> N </NotifDiv>
        </NavBar>
    )
}