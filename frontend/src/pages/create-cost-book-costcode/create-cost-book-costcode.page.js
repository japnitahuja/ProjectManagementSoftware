import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  createCostBookCategoryStart,
  createCostCodeStart,
  fetchCostBookStart,
} from "../../redux/costbook/costbook.actions";

import CostBookCreateCostCode from "../../components/costbook-createcostcode/costbook-createcostcode";

class CreateCostBookCostCode extends Component {
  render() {
    //console.log(this.props.costbook);
    return (
      <>
        <CostBookCreateCostCode />
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({
  createCategory: (costBookDetails) =>
    dispatch(createCostBookCategoryStart(costBookDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCostBookCostCode);
