import react, {Component} from 'react';
import {BigCircle, CreateDiv, CreateOptionsDiv, CreateOptionsImg} from "./create-button.styles";
import {Overlay} from "../admin-panel-task-page/admin-panel-task-page.styles";
import { Link } from 'react-router-dom'
import VPO from "../../assets/VPODark.png";
import PO from "../../assets/PODark.png";
import task from "../../assets/taskDark.png";
import punch from "../../assets/PunchDark.png";


class CreateButton extends Component {
    constructor(){
        super()
        this.state ={
            createSwitch:false
        }
    }

    handleOnClick = () => {
        this.setState((prevState) => ({
            createSwitch: !prevState.createSwitch
        }));
        this.props.toggleNav();
    }


    render() {
        return (
            <div>
                {this.state.createSwitch? 
                <Overlay 
                    backgroundcolor = "rgba(0,0,0,0.3)" 
                    style={{bottom:"0",height:"100%", display:"flex", flexDirection:"row", justifyContent:"center"}}>
                    <CreateDiv>
                        <Link style={{textDecoration:"none"}}>
                            <CreateOptionsDiv justify={false}>
                            <CreateOptionsImg src={task} style={{width:"2em", height:"2em"}}/>
                                Task
                            </CreateOptionsDiv>
                        </Link>

                        <Link style={{textDecoration:"none"}}>
                            <CreateOptionsDiv justify={false}>
                            <CreateOptionsImg src={PO}/>
                                PO
                            </CreateOptionsDiv>
                        </Link>

                        <Link style={{textDecoration:"none"}}>
                            <CreateOptionsDiv justify={false}>
                                <CreateOptionsImg src={VPO}/>
                                VPO
                            </CreateOptionsDiv>
                        </Link>

                        <Link style={{textDecoration:"none"}}>
                            <CreateOptionsDiv justify={false}>
                                <CreateOptionsImg src={punch}/>
                                Punch List Item
                            </CreateOptionsDiv>
                        </Link>
                        <CreateOptionsDiv onClick={this.handleOnClick} justify={true} style={{flex:"2"}}>
                            CANCEL
                        </CreateOptionsDiv>
                        
                    </CreateDiv>
                </Overlay> 
                : 
                <BigCircle onClick={this.handleOnClick}>
                    <p style={{fontSize:"2em", margin:"0"}}>+</p>
                </BigCircle>
                }

            </div>
            
        )
    }
}

export default CreateButton;