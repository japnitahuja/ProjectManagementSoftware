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
  ItemField,
} from "./costcode-displayitem.styles";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCostBookDetails } from "../../redux/costbook/costbook.selectors";
import {
  createCostCodeItemStart,
  fetchCostBookStart,
} from "../../redux/costbook/costbook.actions";

class CostCodeDisplayItem extends Component {
  constructor(props) {
    super(props);
  }

  exit = () => {
    this.props.history.goBack();
  };

  render() {
    let { item } = this.props;
    return (
      <Overlay>
        <NavBar>
          <OneThirdDiv align="flex-start" color="#205284" onClick={this.exit}>
            Back
          </OneThirdDiv>
          <OneThirdDiv
            align="center"
            style={{ fontWeight: "600", fontSize: "1em" }}
          >
            Item
          </OneThirdDiv>
          <OneThirdDiv
            align="flex-end"
            color="#205284"
            onClick={this.props.toggleEdit}
          >
            Edit
          </OneThirdDiv>
        </NavBar>

        <div style={{ display: "flex", flexDirection: "column", width: "90%" }}>
          <div>
            <InfoTitle style={{ margin: "1em 0em", fontSize: "1em" }}>
              Item Name
            </InfoTitle>
            <ItemField>{item.itemName}</ItemField>
          </div>

          <div>
            <InfoTitle style={{ margin: "1em 0em", fontSize: "1em" }}>
              Part #
            </InfoTitle>
            <ItemField>{item.partNo}</ItemField>
          </div>

          <div>
            <InfoTitle style={{ margin: "1em 0em", fontSize: "1em" }}>
              Cost/Rate
            </InfoTitle>
            <ItemField>{item.cost}</ItemField>
          </div>

          <div>
            <InfoTitle style={{ margin: "1em 0em", fontSize: "1em" }}>
              Item Link
            </InfoTitle>
            <ItemField>{item.itemLink}</ItemField>
          </div>

          <div>
            <InfoTitle style={{ margin: "1em 0em", fontSize: "1em" }}>
              Description
            </InfoTitle>
            <ItemField>{item.description}</ItemField>
          </div>
        </div>
      </Overlay>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  costbook: selectCostBookDetails,
});

const mapDispatchToProps = (dispatch) => ({
  createItem: (itemDetails) => dispatch(createCostCodeItemStart(itemDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CostCodeDisplayItem));
