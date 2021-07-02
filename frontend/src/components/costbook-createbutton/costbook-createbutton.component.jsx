import react, { Component } from "react";
import {
  BigCircle,
  CreateDiv,
  CreateOptionsDiv,
  CreateOptionsImg,
} from "./costbook-createbutton.styles";
import { Overlay } from "../admin-panel-task-page/admin-panel-task-page.styles";
import { Link } from "react-router-dom";
import VPO from "../../assets/VPODark.png";
import PO from "../../assets/PODark.png";
import task from "../../assets/taskDark.png";
import punch from "../../assets/PunchDark.png";

class CostBookCreateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createSwitch: false,
    };
  }

  handleOnClick = () => {
    this.setState((prevState) => ({
      createSwitch: !prevState.createSwitch,
    }));
  };

  render() {
    let { projectId } = this.props;
    return (
      <div>
        {this.state.createSwitch ? (
          <Overlay
            backgroundcolor="rgba(0,0,0,0.3)"
            style={{
              bottom: "0",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <CreateDiv>
              <Link
                to="/costbook/createcostcode"
                style={{ textDecoration: "none" }}
              >
                <CreateOptionsDiv justify={false}>Cost Code</CreateOptionsDiv>
              </Link>

              <Link
                to="/costbook/createcategory"
                style={{ textDecoration: "none" }}
              >
                <CreateOptionsDiv justify={false}>Category</CreateOptionsDiv>
              </Link>

              <CreateOptionsDiv
                onClick={this.handleOnClick}
                justify={true}
                style={{ flex: "2" }}
              >
                CANCEL
              </CreateOptionsDiv>
            </CreateDiv>
          </Overlay>
        ) : (
          <BigCircle onClick={this.handleOnClick}>
            <p style={{ fontSize: "2em", margin: "0" }}>+</p>
          </BigCircle>
        )}
      </div>
    );
  }
}

export default CostBookCreateButton;
