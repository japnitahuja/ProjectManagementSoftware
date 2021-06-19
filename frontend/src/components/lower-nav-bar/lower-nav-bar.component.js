import React, { Component } from "react";
import {
  LowerNav,
  LowerNavEntity,
  LowerNavImage,
  LowerNavText,
} from "./lower-nav-bar.styles";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentProjectId } from "../../redux/current-project/current-project.selectors";
import { connect } from "react-redux";
import VPO from "../../assets/VPO.png";
import PO from "../../assets/PO.png";
import task from "../../assets/task.png";
import punch from "../../assets/Punchlist.png";
import Schedule from "../../assets/schedule.png";
import CreateButton from "../create-button/create-button.component";

class LowerNavBar extends Component {
    constructor(){
      super()
      this.state ={
          navSwitch:true
      }
    }

  toggleNav = () => {
      this.setState((prevState) => ({
          navSwitch: !prevState.navSwitch
      }));
  }

  render() {
    const { projectId } = this.props;
    return (
      <div>
        <CreateButton toggleNav ={this.toggleNav}/>
        {
          this.state.navSwitch?
          <LowerNav>
          <Link to={`/project/${projectId}`} style={{textDecoration:"none"}}>
            <LowerNavEntity>
                <LowerNavImage src={task} />
                <LowerNavText>TASKS</LowerNavText>
            </LowerNavEntity>
          </Link>
          <Link to={`/projectPurchaseOrders/${projectId}`} style={{textDecoration:"none"}}>
            <LowerNavEntity>
                <LowerNavImage src={PO} />
                <LowerNavText>POs</LowerNavText>
            </LowerNavEntity>
          </Link>
          <Link to={`/projectChangeOrders/${projectId}`} style={{textDecoration:"none"}}>
            <LowerNavEntity>
                <LowerNavImage src={VPO} />
                <LowerNavText>VPOs</LowerNavText>
            </LowerNavEntity>
          </Link>
          <Link to={`/punchList/${projectId}`} style={{textDecoration:"none"}} >
            <LowerNavEntity >
                <LowerNavImage src={punch} />
                <LowerNavText>PUNCH</LowerNavText>
            </LowerNavEntity>
          </Link>
         
          <Link to={`/schedule/${projectId}`} style={{textDecoration:"none"}}>
            <LowerNavEntity>
                <LowerNavImage src={Schedule} />
                <LowerNavText>SCHEDULE</LowerNavText>
            </LowerNavEntity>
          </Link>
        </LowerNav>
        :
        null
        }
        
      </div>
      
    );
  }
}

const mapStateToProps = createStructuredSelector({
  projectId: selectCurrentProjectId,
});

export default connect(mapStateToProps, null)(LowerNavBar);
