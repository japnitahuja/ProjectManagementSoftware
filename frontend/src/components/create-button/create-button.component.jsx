import react, {Component} from 'react';
import {BigCircle, CreateDiv, CreateOptionsDiv} from "./create-button.styles";
import {Overlay} from "../admin-panel-task-page/admin-panel-task-page.styles";
import { Link } from 'react-router-dom'

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
                                Task
                            </CreateOptionsDiv>
                        </Link>

                        <Link style={{textDecoration:"none"}}>
                            <CreateOptionsDiv justify={false}>
                                PO
                            </CreateOptionsDiv>
                        </Link>

                        <Link style={{textDecoration:"none"}}>
                            <CreateOptionsDiv justify={false}>
                                VPO
                            </CreateOptionsDiv>
                        </Link>

                        <Link style={{textDecoration:"none"}}>
                            <CreateOptionsDiv justify={false}>
                                PunchList
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