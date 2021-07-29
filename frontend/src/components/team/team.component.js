import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import {
  selectCurrentProjectId,
  selectCurrentProjectUsers,
} from "../../redux/current-project/current-project.selectors";
import AddUserForm from "../adduser-form/adduser-form.component";
import {
  DropDownContent,
  DropDownOption,
  LowerDiv,
  Overlay,
  FormButton,
  FormInverseButton,
  Text,
  SmallCircle,
  BigCircle,
  Image,
  TeamDiv,
  TeamDivItem,
} from "./team.styles";
import removeImage from "../../assets/remove.png";
import TeamItem from "./teamitem.component";
import { AddRoleDiv } from "../addrole-form/addrole-form.styles";
import AddRoleForm from "../addrole-form/addrole-form.component";

class Team extends Component {
  constructor(props) {
    super(props);
    this.dropdownContainer = React.createRef();
    this.state = {
      userDetails: [],
      invite: false,
      removeToggle: null,
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    // console.log(this.dropdownContainer.current)
    // console.log(event.target)
    event.preventDefault();
    if (
      this.dropdownContainer.current &&
      !this.dropdownContainer.current.contains(event.target)
    ) {
      this.setState({ removeToggle: null });
    }
  };

  toggleRemoveDropdown = (e) => {
    e.preventDefault();
    if (this.state.removeToggle) {
      this.setState({ removeToggle: null });
    } else {
      this.setState({ removeToggle: e.target.dataset.id });
    }
  };

  deleteUser = (e) => {
    e.preventDefault();
    console.log("delete user");
  };

  invite = () => {
    if (this.state.invite == false) {
      this.setState({ invite: true });
    } else {
      this.setState({ invite: false });
    }
    //console.log(this.state.invite)
  };

  render() {
    const { users, projectId } = this.props;

    return (
      <div>
        <TeamDiv>
          {users.map((user, index) => {
            console.log(user);
            let unnamed = user.user.email.slice(
              0,
              user.user.email.indexOf("@")
            );

            return (
              <TeamItem
                key={user.user._id}
                projectId={this.props.projectId}
                user={user}
                unnamed={unnamed}
                id={user.user._id}
              ></TeamItem>
            );
          })}
        </TeamDiv>
        <LowerDiv style={{ marginBottom: "5em" }}>
          <Text
            style={{ fontSize: "0.9em", color: "#666666", margin: "1.5em 0em" }}
          >
            Need to add additional users not in Dig?
          </Text>
          <Text
            style={{ fontSize: "0.9em", color: "#6C7B8A" }}
            onClick={this.invite}
          >
            <Link
              to={`/project/${projectId}/invite`}
              style={{ color: "black" }}
            >
              Invite now
            </Link>
          </Text>
        </LowerDiv>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // projectName: selectCurrentProjectName,
  // projectStatus: selectCurrentProjectStatus,
  // tasks: selectCurrentProjectTasks
  users: selectCurrentProjectUsers,
  projectId: selectCurrentProjectId,
});

const mapDispatchToProps = (dispatch) => ({
  // fetchProjects : (projectId) => dispatch(fetchCurrentProjectStart(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);
