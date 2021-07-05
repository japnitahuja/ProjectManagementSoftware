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
} from "./costcode-createitem.styles";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  selectCostBookDetails,
  selectCreateCostCodeItemStart,
  selectCreateCostCodeItemSuccess,
  selectCreateCostCodeSuccess,
} from "../../redux/costbook/costbook.selectors";
import {
  createCostCodeItemStart,
  fetchCostBookStart,
} from "../../redux/costbook/costbook.actions";
import Spinner from "../spinner/spinner.component";

class CostCodeCreateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        itemName: null,
        partNo: null,
        cost: null,
        description: null,
        itemLink: null,
        costCodeId: this.props.costCodeId,
        categoryId: this.props.categoryId,
      },
      create: false,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    let itemDetails = this.state.item;
    this.props.createItem(itemDetails);
    this.setState({ create: true });
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    let itemInfo = this.state.item;
    itemInfo[name] = value;
    this.setState({ item: itemInfo }, console.log(this.state.item));
  };

  exit = () => {
    this.props.history.goBack();
  };

  render() {
    let categoryNames = [];
    console.log(this.props.createCostCodeSuccess, this.state);
    if (this.state.create && !this.props.createCostCodeSuccess) {
      return <Spinner />;
    } else if (
      this.props.createCostCodeSuccess &&
      this.state.create &&
      this.props.createCostItemStart
    ) {
      this.exit();
    }

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
            New Item
          </OneThirdDiv>
          <OneThirdDiv align="flex-end" color="#205284" onClick={this.onSubmit}>
            Save
          </OneThirdDiv>
        </NavBar>

        <form
          style={{ display: "flex", flexDirection: "column", width: "90%" }}
          onChange={(e) => this.handleOnChange(e)}
        >
          <div>
            <InfoTitle style={{ margin: "1em 0em", fontSize: "1em" }}>
              Item Name
            </InfoTitle>
            <LongInput
              type="text"
              value={this.state.item.itemName}
              name="itemName"
              id="itemName"
              placeholder="Item Name"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>

          <div>
            <InfoTitle style={{ margin: "1em 0em", fontSize: "1em" }}>
              Part #
            </InfoTitle>
            <LongInput
              type="text"
              value={this.state.item.partNo}
              name="partNo"
              id="partNo"
              placeholder="Part Number"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>

          <div>
            <InfoTitle style={{ margin: "1em 0em", fontSize: "1em" }}>
              Cost/Rate
            </InfoTitle>
            <LongInput
              type="text"
              value={this.state.item.cost}
              name="cost"
              id="cost"
              placeholder="Cost"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>

          <div>
            <InfoTitle style={{ margin: "1em 0em", fontSize: "1em" }}>
              Item Link
            </InfoTitle>
            <LongInput
              type="text"
              value={this.state.item.itemLink}
              name="itemLink"
              id="itemLink"
              placeholder="Item Link"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>

          <div>
            <InfoTitle style={{ margin: "1em 0em", fontSize: "1em" }}>
              Description
            </InfoTitle>
            <LongInput
              type="textarea"
              value={this.state.item.description}
              name="description"
              id="description"
              placeholder="Description"
              onChange={(e) => this.handleOnChange(e)}
              style={{
                height: "4em",
              }}
              required
            />
          </div>
        </form>
      </Overlay>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  costbook: selectCostBookDetails,
  createCostCodeSuccess: selectCreateCostCodeSuccess,
  createCostItemStart: selectCreateCostCodeItemStart,
});

const mapDispatchToProps = (dispatch) => ({
  createItem: (itemDetails) => dispatch(createCostCodeItemStart(itemDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CostCodeCreateItem));
