import React, { Component } from "react";
import { LongButton } from "../long-button/long-button.styles";
import {
  ContainerDiv,
  NavBar,
  OneThirdDiv,
  ItemDiv,
} from "./form-fullscreen-selection.styles";
import { SmallText } from "../project-item/project-item.styles";
import { connect } from "react-redux";
import { inviteUserStart } from "../../redux/current-project/current-project.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentProjectRoles } from "../../redux/current-project/current-project.selectors";
import {
  FormHeading,
  FormLabel,
  FormInput,
  FormDiv,
} from "../create-project-form/create-project-form.styles";
import DropDown from "../form-dropdown/form-dropdown.component";

class FormFullScreenSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnClick = (e) => {
    let { item } = e.target.dataset;
    console.log(item);

    this.props.select({ value: item, type: this.props.type });
    this.props.exit();
  };

  render() {
    const { exit, items, selected } = this.props;

    return (
      <ContainerDiv>
        <NavBar>
          <OneThirdDiv align="flex-start" color="#205284" onClick={exit}>
            Back
          </OneThirdDiv>
          <OneThirdDiv align="center" style={{ fontWeight: "600" }}>
            Select Task
          </OneThirdDiv>
          <OneThirdDiv align="flex-end" color="#205284"></OneThirdDiv>
        </NavBar>
        {items.includes(selected) ? (
          <ItemDiv selected={true}>{selected}</ItemDiv>
        ) : null}
        {items.map((item) => {
          if (item != selected) {
            return (
              <ItemDiv
                data-item={item}
                key={item}
                onClick={this.handleOnClick}
                selected={false}
              >
                {item}
              </ItemDiv>
            );
          }
        })}
      </ContainerDiv>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // name: selectCurrentUserFirstName,
  // projects: selectUserProjects
  projectRoles: selectCurrentProjectRoles,
});

const mapDispatchToProps = (dispatch) => ({
  // signOut: () => dispatch(signOut())
  inviteUser: (userDetails) => dispatch(inviteUserStart(userDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormFullScreenSelection);
