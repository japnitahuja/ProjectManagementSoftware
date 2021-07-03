import React, { Component } from "react";
import { connect } from "react-redux";
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
} from "./costbook-createcostcode.styles";
import { withRouter } from "react-router-dom";
import {
  createCostBookCategoryStart,
  createCostCodeStart,
  fetchCostBookStart,
} from "../../redux/costbook/costbook.actions";
import { createStructuredSelector } from "reselect";
import {
  selectCostBookDetails,
  selectCreateCostCodeSuccess,
} from "../../redux/costbook/costbook.selectors";
import DropDown from "./form-dropdown/form-dropdown.component";
import Spinner from "../spinner/spinner.component";

class CostBookCreateCostCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      costCode: {
        costCodeTitle: null,
        categoryId: null,
      },
      create: false,
    };
  }

  onCostCodeSubmit = (e) => {
    e.preventDefault();
    let costCodeDetails = this.state.costCode;
    this.props.createCostCode(costCodeDetails);
    this.setState({ create: true });
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    let costcodeinfo = this.state.costCode;
    costcodeinfo[name] = value;
    this.setState({ costCode: costcodeinfo });
    console.log(this.state);
  };

  exit = () => {
    this.props.history.goBack();
  };

  render() {
    console.log(this.props.createCostCodeSuccess, this.state);
    if (this.state.create && !this.props.createCostCodeSuccess) {
      return <Spinner />;
    } else if (this.props.createCostCodeSuccess && this.state.create) {
      this.exit();
    }

    let categoryNames = ["None"];

    this.props.costbook.map((cost) => {
      return categoryNames.push(cost.categoryName);
    });

    return (
      <Overlay>
        <NavBar>
          <OneThirdDiv align="flex-start" color="#205284" onClick={this.exit}>
            Cancel
          </OneThirdDiv>
          <OneThirdDiv
            align="center"
            style={{ fontWeight: "600", fontSize: "0.9em" }}
          >
            New Cost Code
          </OneThirdDiv>
          <OneThirdDiv
            align="flex-end"
            color="#205284"
            onClick={this.onCostCodeSubmit}
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
              value={this.state.costCode.costCodeTitle}
              name="costCodeTitle"
              id="costCodeTitle"
              placeholder="Cost Code Title"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>

          <InfoTitle style={{ margin: "1em 1em", fontSize: "1em" }}>
            Choose a cost category:
          </InfoTitle>
          <DropDown
            key="categoryId"
            options={categoryNames}
            selected={categoryNames[0]}
            onChange={this.handleOnChange}
            costbook={this.props.costbook}
          />
        </form>
      </Overlay>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  costbook: selectCostBookDetails,
  createCostCodeSuccess: selectCreateCostCodeSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  createCostCode: (costCodeDetails) =>
    dispatch(createCostCodeStart(costCodeDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CostBookCreateCostCode));
