import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  createCostBookCategoryStart,
  createCostCodeStart,
  fetchCostBookStart,
} from "../../redux/costbook/costbook.actions";

import CostBookCreateCategory from "../../components/costbook-createcategory/costbook-createcategory";

class CreateCostBookCategory extends Component {
  render() {
    //console.log(this.props.costbook);
    return (
      <>
        <CostBookCreateCategory />
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
)(CreateCostBookCategory);
