import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  createCostCodeItemStart,
  fetchCostBookStart,
} from "../../redux/costbook/costbook.actions";
import {
  selectCostBookDetails,
  selectFetchCostBookSuccess,
} from "../../redux/costbook/costbook.selectors";
import { Link } from "react-router-dom";
import CostCodeDisplayItem from "../../components/costcode-displayitem/costcode-displayitem.component";
import CostCodeEditItem from "../../components/costcode-edititem/costcode-edititem.component";
import Spinner from "../../components/spinner/spinner.component";

class CostBookItem extends Component {
  constructor() {
    super();
    this.state = {
      items: {},
      showEdit: false,
      setItems: 0,
    };
  }
  componentDidMount() {
    this.props.fetchCostBook();
  }

  toggleEdit = () => {
    this.setState((prevState) => ({
      showEdit: !prevState.showEdit,
    }));
  };

  items = () => {
    console.log(this.props.costbook, "hi");
    let category = this.props.costbook.find(
      (book) => book._id === this.props.match.params.categoryId
    );

    let costCodeItem = category.costCodes.find(
      (id) => id._id === this.props.match.params.costCodeId
    );
    let item = costCodeItem.items.find(
      (id) => id._id === this.props.match.params.itemId
    );

    this.setState({ items: item, setItems: 1 }, () => console.log(this.state));
  };

  itemOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let itemInfo = this.state.items;
    itemInfo[name] = value;
    this.setState({ items: itemInfo }, () => {
      console.log(this.state.items);
    });
  };

  editItem = (e) => {
    e.preventDefault();
  };

  render() {
    const { items } = this.state;

    console.log(this.state, this.props.fetchCostBookSuccess);
    if (!this.props.fetchCostBookSuccess) {
      return <Spinner />;
    } else if (this.props.fetchCostBookSuccess && this.state.setItems === 0) {
      this.items();
    }
    return (
      <>
        {this.state.showEdit ? (
          <CostCodeEditItem toggleEdit={this.toggleEdit} />
        ) : (
          <CostCodeDisplayItem toggleEdit={this.toggleEdit} item={items} />
        )}
        {/* <div>
          <h2>ITEM NAME</h2> <h4>{items.itemName}</h4>
          <h2>PART#</h2> <h4>{items.partNo}</h4>
          <h2>COST/RATE</h2>
          <h4>{items.cost}</h4>
          <h2>ITEM LINK</h2>
          <h4>{items.link}</h4>
          <h2>DESCRIPTION</h2>
          <h4>{items.description}</h4>
        </div>
        <form onChange={this.itemOnChange}>
          <h3>EDIT ITEM</h3>
          <label htmlFor="itemName" id="itemName" name="itemName">
            Item Name
          </label>
          <input type="text" id="itemName" name="itemName" />
          <br />
          <label htmlFor="partNo" id="partNo" name="partNo">
            Part No.{" "}
          </label>
          <input type="number" id="partNo" name="partNo" />
          <br />
          <label htmlFor="cost" id="cost" name="cost">
            Cost
          </label>
          <input type="number" id="cost" name="cost" />
          <br />
          <label htmlFor="itemLink" id="itemLink" name="itemLink">
            Item Link
          </label>
          <input type="text" id="itemLink" name="itemLink" />
          <br />
          <label htmlFor="description" id="description" name="description">
            Description
          </label>
          <input type="text" id="description" name="description" />
        </form> */}
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  costbook: selectCostBookDetails,
  fetchCostBookSuccess: selectFetchCostBookSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCostBook: () => dispatch(fetchCostBookStart()),
  createItem: (itemDetails) => dispatch(createCostCodeItemStart(itemDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CostBookItem);
