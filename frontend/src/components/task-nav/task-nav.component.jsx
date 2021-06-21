import {Link} from "react-router-dom";
import { SearchDiv, NavBar, Heading, Back, Image, OneThirdDiv } from "./task-nav.styles"
import backArrow from "../../assets/backArrowBlack.png"
import search from "../../assets/navsearch.png"

export const TaskNav = ({title, toggleSearch}) => {
    return (
        <NavBar>
            <OneThirdDiv align="flex-start">
            <Back>
                <Link to = "/all-projects" style={{textDecoration:'none', color:'black'}}> 
                    <Image src={backArrow}/> Projects
                </Link>
            </Back>

            </OneThirdDiv>

            <OneThirdDiv align="center">
            <Heading> {title} </Heading>
            </OneThirdDiv>

            <OneThirdDiv align="flex-end" onClick={toggleSearch}>
                <SearchDiv src={search} />
            </OneThirdDiv>
            
        </NavBar>
    )
}