import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createTaskStart } from "../../redux/all-tasks/all-tasks.actions";
import { fetchCurrentProjectStart } from "../../redux/current-project/current-project.actions";
import { signOut } from "../../redux/user/user.actions";
import {
  Container,
  InfoInput,
  InfoTitle,
  InfoDiv,
  LongInput,
  LowerNavDiv,
  OneHalfDiv,
  NavBar,
  OneThirdDiv,
  Overlay,
} from "./costbook-createcategory.styles";
import { withRouter } from "react-router-dom";
import {
  createCostBookCategoryStart,
  createCostCodeStart,
  fetchCostBookStart,
} from "../../redux/costbook/costbook.actions";

class CostBookCreateCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {
        categoryName: "",
      },
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    //console.log(name, value)
    let categoryName = this.state.category;
    categoryName[name] = value;
    this.setState({ category: categoryName }, () => {
      console.log(this.state);
    });
  };

  createCategory = (e) => {
    e.preventDefault();
    let costBookDetails = this.state.category;
    if (costBookDetails.categoryName != "") {
      this.props.createCategory(costBookDetails);
    }
    this.exit();
  };

  exit = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <Overlay>
        <NavBar>
          <OneThirdDiv align="flex-start" color="#205284" onClick={this.exit}>
            Cancel
          </OneThirdDiv>
          <OneThirdDiv align="center" style={{ fontWeight: "600" }}>
            New Category
          </OneThirdDiv>
          <OneThirdDiv
            align="flex-end"
            color="#205284"
            onClick={this.createCategory}
          >
            Save
          </OneThirdDiv>
        </NavBar>

        <form
          style={{ display: "flex", flexDirection: "column" }}
          onChange={(e) => this.handleOnChange(e)}
        >
          <div>
            <LongInput
              type="text"
              value={this.state.category.categoryName}
              name="categoryName"
              id="categoryName"
              placeholder="Category Name"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>
        </form>
      </Overlay>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createCategory: (costBookDetails) =>
    dispatch(createCostBookCategoryStart(costBookDetails)),
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(CostBookCreateCategory));
