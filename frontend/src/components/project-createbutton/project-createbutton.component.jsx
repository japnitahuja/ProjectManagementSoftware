import react, { Component } from "react";
import {
  BigCircle,
  CreateDiv,
  CreateOptionsDiv,
  CreateOptionsImg,
} from "./project-createbutton.styles";
import { Overlay } from "../admin-panel-task-page/admin-panel-task-page.styles";
import { Link } from "react-router-dom";

class ProjectCreateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createSwitch: false,
    };
  }

  handleOnClick = () => {
    this.setState(
      (prevState) => ({
        createSwitch: !prevState.createSwitch,
      }),
      () => {
        console.log(this.state);
      }
    );
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
                to={`/createProject/${this.props.orgId}`}
                style={{ textDecoration: "none" }}
              >
                <CreateOptionsDiv justify={false}>Project</CreateOptionsDiv>
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

export default ProjectCreateButton;
