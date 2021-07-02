import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  createCostCodeItemStart,
  fetchCostBookStart,
} from "../../redux/costbook/costbook.actions";
import { selectCostBookDetails } from "../../redux/costbook/costbook.selectors";
import { Link } from "react-router-dom";
import ProjectNav from "../../components/projects-nav/projects-nav.component";

class CostCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      costbook: null,
      item: {
        itemName: null,
        partNo: null,
        cost: null,
        description: null,
        itemLink: null,
        costCodeId: this.props.match.params.costCodeId,
        categoryId: this.props.match.params.categoryId,
      },
    };
  }

  componentDidMount() {
    this.props.fetchCostBook();
    console.log("component mounted", this.props.costbook);
  }

  itemChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    let itemInfo = this.state.item;
    itemInfo[name] = value;
    this.setState({ item: itemInfo }, console.log(this.state.item));
  };

  createItem = (e) => {
    e.preventDefault();
    let itemDetails = this.state.item;
    this.props.createItem(itemDetails);
  };

  render() {
    // console.log(this.props.match.params.costCodeId, 'cost code')
    // console.log(this.props.match.params.categoryId, 'category id')
    console.log(this.props.costbook, "hi");
    let category = this.props.costbook.find(
      (book) => book._id === this.props.match.params.categoryId
    );
    //console.log(category)
    let costCodeItem = category.costCodes.find(
      (id) => id._id === this.props.match.params.costCodeId
    );
    //console.log(costCodeItem)
    return (
      <>
        <h3>Cost Code Title</h3>
        <h4>{costCodeItem.costCodeTitle}</h4>
        <h3>ITEMS</h3>
        {costCodeItem.items.map((item) => {
          return (
            <Link
              to={`/cost-item/${this.props.match.params.categoryId}/${this.props.match.params.costCodeId}/${item._id}`}
            >
              <h5>{item.itemName}</h5>
            </Link>
          );
        })}
        <form onChange={this.itemChange} onSubmit={this.createItem}>
          <label for="itemName" name="itemName" id="itemName">
            Item Name
          </label>
          <input name="itemName" id="itemName" type="text" />
          <br />
          <label for="partNo" name="partNo" id="partNo">
            Part No.
          </label>
          <input name="partNo" id="partNo" type="number" />
          <br />
          <label for="cost" name="cost" id="cost">
            Cost/part
          </label>
          <input name="cost" id="cost" type="number" />
          <br />
          <label for="itemLink" name="itemLink" id="itemLink">
            Item Link
          </label>
          <input name="itemLink" id="itemLink" type="text" />
          <br />
          <label for="description" name="description" id="description">
            Desciption
          </label>
          <input name="description" id="description" type="text" />
          <br />
          <button type="submit">CREATE ITEM</button>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(CostCode);
