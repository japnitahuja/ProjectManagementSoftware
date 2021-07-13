import React, { Component } from "react";
import { LongButton } from "../long-button/long-button.styles";
import {
  ContainerDiv,
  NavBar,
  OneThirdDiv,
  ItemDiv,
  LongDiv,
  Input,
} from "./form-costbook-selection.styles";
import { SmallText } from "../project-item/project-item.styles";
import { connect } from "react-redux";
import { inviteUserStart } from "../../redux/current-project/current-project.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentProjectRoles } from "../../redux/current-project/current-project.selectors";
import {
  selectCostBookDetails,
  selectFetchCostBookSuccess,
} from "../../redux/costbook/costbook.selectors";
import Spinner from "../../components/spinner/spinner.component";
import { fetchCostBookStart } from "../../redux/costbook/costbook.actions";
import { CostbookCategory } from "../costbook-category/costbook-category.component";
import { CostbookCostCode } from "../costbook-costcode/costbook-costcode.component";

class FormCostbookSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setCostbook: 0,
      costbook: null,
      itemDetails: {
        itemName: null,
        itemNumber: null,
        itemValue: null,
        comment: null,
        itemId: null,
      },
      costCodeId: null,
      categoryId: null,
      show: "costbook", //costbook, costcode, item
    };
  }
  componentDidMount() {
    console.log("fetchcostbook");
    this.props.fetchCostBook();
  }

  setCostbook = () => {
    this.setState({ costbook: this.props.costbook, setCostbook: 1 });
  };

  toggleShow = (type) => {
    this.setState({ show: type });
  };

  selectCostCode = (costcodeid, categoryid) => {
    this.setState({
      costCodeId: costcodeid,
      categoryId: categoryid,
      show: "costcode",
    });
  };

  selectItem = ({ cost, description, itemName, partNo, _id }) => {
    let temp = {
      itemName: itemName,
      itemNumber: this.state.itemDetails.itemNumber,
      itemValue: cost,
      comment: description,
      itemId: _id,
    };
    this.setState({ itemDetails: temp, show: "item" });
  };

  changeItemNumber = (e) => {
    let { value } = e.target;
    value = parseInt(value);
    console.log("item number", value);
    let { itemName, itemNumber, itemValue, comment, itemId } =
      this.state.itemDetails;
    let temp = {
      itemName: itemName,
      itemNumber: value,
      itemValue: itemValue,
      comment: comment,
      itemId: itemId,
    };
    this.setState({ itemDetails: temp }, () => {
      console.log(this.state);
    });
  };

  submit = () => {
    if (this.state.itemDetails.itemNumber) {
      this.props.submitItem({
        type: "purchasedItem",
        value: this.state.itemDetails,
      });
    }
    this.props.exit();
  };

  showNavbar = (exit) => {
    console.log("show nav");
    if (this.state.show === "costbook") {
      return (
        <NavBar>
          <OneThirdDiv align="flex-start" color="#205284" onClick={exit}>
            Back
          </OneThirdDiv>
          <OneThirdDiv align="center" style={{ fontWeight: "600" }}>
            Add Line Item
          </OneThirdDiv>
          <OneThirdDiv align="flex-end" color="#205284"></OneThirdDiv>
        </NavBar>
      );
    } else if (this.state.show === "costcode") {
      return (
        <NavBar>
          <OneThirdDiv
            align="flex-start"
            color="#205284"
            onClick={() => {
              this.toggleShow("costbook");
            }}
          >
            Back
          </OneThirdDiv>
          <OneThirdDiv align="center" style={{ fontWeight: "600" }}>
            Items
          </OneThirdDiv>
          <OneThirdDiv align="flex-end" color="#205284"></OneThirdDiv>
        </NavBar>
      );
    } else if (this.state.show === "item") {
      return (
        <NavBar>
          <OneThirdDiv
            align="flex-start"
            color="#205284"
            onClick={() => {
              this.toggleShow("costcode");
            }}
          >
            Back
          </OneThirdDiv>
          <OneThirdDiv align="center" style={{ fontWeight: "600" }}>
            Line Item
          </OneThirdDiv>
          <OneThirdDiv align="flex-end" color="#205284" onClick={this.submit}>
            Save
          </OneThirdDiv>
        </NavBar>
      );
    }
  };

  showContent = (costbook) => {
    if (this.state.show == "costbook") {
      let content = costbook.map((cost) => {
        console.log("hi");
        return (
          <>
            <CostbookCategory categoryName={cost.categoryName} />
            {cost.costCodes.map((costcode) => {
              return (
                <div
                  onClick={() => {
                    this.selectCostCode(costcode._id, cost._id);
                  }}
                >
                  <CostbookCostCode
                    key={costcode._id}
                    title={costcode.costCodeTitle}
                  />
                </div>
              );
            })}
          </>
        );
      });

      return content;
    } else if (this.state.show == "costcode") {
      console.log(this.state);
      let category = costbook.find(
        (book) => book._id === this.state.categoryId
      );
      console.log(category);
      let costCodeItem = category.costCodes.find(
        (id) => id._id === this.state.costCodeId
      );

      let items = costCodeItem.items.map((item) => {
        return (
          <div
            onClick={() => {
              this.selectItem(item);
            }}
          >
            <CostbookCostCode title={item.itemName} />
          </div>
        );
      });
      return (
        <>
          <CostbookCategory categoryName={costCodeItem.costCodeTitle} />
          {items}
        </>
      );
    } else if (this.state.show == "item") {
      let { itemName, itemNumber, itemValue, comment, itemId } =
        this.state.itemDetails;

      return (
        <div>
          <div
            style={{
              color: "black",
              fontSize: "1.25em",
              fontWeight: "600",
              margin: "1em",
            }}
          >
            {itemName}
          </div>
          <LongDiv>
            <div>Quantity</div>
            <form onChange={(e) => this.changeItemNumber(e)}>
              <Input
                type="number"
                placeholder="Enter"
                value={itemNumber}
              ></Input>
            </form>
          </LongDiv>
          <LongDiv>
            <div>Cost</div>
            <div>${itemValue}</div>
          </LongDiv>
          <LongDiv style={{ border: "none", backgroundColor: "#f5f5f5" }}>
            <div>Amount</div>
            <div>${itemValue * itemNumber}</div>
          </LongDiv>
          <br></br>
          <div
            style={{
              color: "rgba(0, 0, 0, 0.8)",
              fontSize: "1em",
              fontWeight: "600",
              margin: "0.5em 1em",
            }}
          >
            Description
          </div>
          <div
            style={{
              border: "none",
              marginLeft: "1em",
              color: "rgba(0, 0, 0, 0.8)",
            }}
          >
            {comment}
          </div>
        </div>
      );
    }
  };

  render() {
    const { exit, items, selected } = this.props;
    console.log(
      "success",
      this.props.fetchCostBookSuccess,
      this.props.costbook
    );
    if (!this.props.fetchCostBookSuccess) {
      return <Spinner />;
    } else if (this.props.fetchCostBookSuccess && this.state.setCostbook == 0) {
      this.setCostbook();
    }
    console.log(this.state.costbook);
    return (
      <ContainerDiv>
        {this.showNavbar(exit)}
        {this.showContent(this.props.costbook)}
      </ContainerDiv>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  costbook: selectCostBookDetails,
  fetchCostBookSuccess: selectFetchCostBookSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCostBook: () => dispatch(fetchCostBookStart()),
  inviteUser: (userDetails) => dispatch(inviteUserStart(userDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCostbookSelection);
