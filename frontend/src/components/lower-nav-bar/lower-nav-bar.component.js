import React, { Component } from "react";
import {
  LowerNav,
  LowerNavEntity,
  LowerNavImage,
  LowerNavImageDiv,
  LowerNavText,
} from "./lower-nav-bar.styles";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentProjectId } from "../../redux/current-project/current-project.selectors";
import { connect } from "react-redux";
import CO from "../../assets/CO.png";
import PO from "../../assets/PO.png";
import task from "../../assets/Task.png";
import punch from "../../assets/Punch.png";
import Schedule from "../../assets/Schedule.png";
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
          <Link to={`/project/${projectId}`}>
            <LowerNavEntity>
                <LowerNavImage src={task} />
            </LowerNavEntity>
          </Link>
          <Link to={`/projectPurchaseOrders/${projectId}`}>
            <LowerNavEntity>
                <LowerNavImage src={PO} />
            </LowerNavEntity>
          </Link>
          <Link to={`/projectChangeOrders/${projectId}`}>
            <LowerNavEntity>
                <LowerNavImage src={CO} />
            </LowerNavEntity>
          </Link>
          <LowerNavEntity>
              <LowerNavImage src={punch} />
          </LowerNavEntity>
          <Link to={`/schedule/${projectId}`}>
            <LowerNavEntity>
              
                <LowerNavImage src={Schedule} />
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
