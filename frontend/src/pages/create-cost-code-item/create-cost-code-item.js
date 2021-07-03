import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  createCostCodeItemStart,
  fetchCostBookStart,
} from "../../redux/costbook/costbook.actions";
import { selectCostBookDetails } from "../../redux/costbook/costbook.selectors";
import { Link } from "react-router-dom";
import CostCodeCreateItem from "../../components/costcode-createitem/costcode-createitem.component";

class CreateCostCodeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.costbook);
    return (
      <>
        <CostCodeCreateItem
          categoryId={this.props.match.params.categoryId}
          costCodeId={this.props.match.params.costCodeId}
        />
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  costbook: selectCostBookDetails,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCostBook: () => dispatch(fetchCostBookStart()),
  createItem: (itemDetails) => dispatch(createCostCodeItemStart(itemDetails)),
  // createCategory: (costBookDetails) => dispatch(createCostBookCategoryStart(costBookDetails)),
  // createCostCode: (costCodeDetails) => dispatch(createCostCodeStart(costCodeDetails))
  //updateRoles: (payload) => dispatch(UpdateRolesInProjectStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCostCodeItem);
