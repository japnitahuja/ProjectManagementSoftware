import {Link} from "react-router-dom";
import { NavBar, Heading, NotifDiv, Back } from "./task-nav.styles"
import addUder from '../../assets/addUser.png'
import notification from '../../assets/Notification.png'

export const TaskNav = ({title}) => {
    return (
        <NavBar>
            <Back>
                <Link to = "/all-projects" style={{textDecoration:'none', color:'white'}}> 
                    {`<`} Back 
                </Link>
            </Back>
            <Heading> {title} </Heading>
            <NotifDiv> 
                    {/* <img src={addUder} />
                    <img src={notification} /> */}
             </NotifDiv>
        </NavBar>
    )
}