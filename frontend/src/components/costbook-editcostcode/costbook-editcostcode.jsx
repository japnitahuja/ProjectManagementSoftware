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
} from "./costbook-editcostcode.styles";
import { withRouter } from "react-router-dom";
import {
  createCostBookCategoryStart,
  createCostCodeStart,
  fetchCostBookStart,
} from "../../redux/costbook/costbook.actions";
import { createStructuredSelector } from "reselect";
import { selectCostBookDetails } from "../../redux/costbook/costbook.selectors";
import DropDown from "./form-dropdown/form-dropdown.component";

class CostBookEditCostCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      costCode: {
        costCodeTitle: this.props.costCodeTitle,
        categoryId: this.props.categoryId,
      },
      categoryName: this.props.categoryName,
    };
  }

  onCostCodeSubmit = (e) => {
    e.preventDefault();
    let costCodeDetails = this.state.costCode;

    this.exit();
  };

  handleOnChange = (e) => {
    const { name, value, catName } = e.target;
    let costcodeinfo = this.state.costCode;
    costcodeinfo[name] = value;
    this.setState({ costCode: costcodeinfo });
    console.log(this.state);

    if (name === "categoryId") {
      this.setState({ categoryName: catName });
    }
  };

  exit = () => {
    this.props.history.goBack();
  };

  render() {
    let categoryNames = [];

    this.props.costbook.map((cost) => {
      return categoryNames.push(cost.categoryName);
    });

    return (
      <div>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onChange={(e) => this.handleOnChange(e)}
        >
          <div>
            <InfoTitle style={{ margin: "1em 0em", fontSize: "1em" }}>
              Title
            </InfoTitle>
            <LongInput
              type="text"
              value={this.state.costCode.costCodeTitle}
              name="costCodeTitle"
              id="costCodeTitle"
              placeholder={this.state.costCode.costCodeTitle}
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>

          <InfoTitle style={{ margin: "1em 0em", fontSize: "1em" }}>
            Choose a cost category:
          </InfoTitle>
          <DropDown
            key="categoryId"
            options={categoryNames}
            selected={this.state.categoryName}
            onChange={this.handleOnChange}
            costbook={this.props.costbook}
          />

          <button
            style={{
              padding: "0.5em 1em",
              backgroundColor: "#6C7B8A",
              color: "white",
              fontSize: "1em",
              fontWeight: "600",
              border: "none",
              borderRadius: "4px",
              marginTop: "1em",
            }}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  costbook: selectCostBookDetails,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CostBookEditCostCode));
