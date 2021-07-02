import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  createCostBookCategoryStart,
  createCostCodeStart,
  fetchCostBookStart,
} from "../../redux/costbook/costbook.actions";
import { selectCostBookDetails } from "../../redux/costbook/costbook.selectors";
import ProjectsNav from "../../components/projects-nav/projects-nav.component";
import { CostbookCategory } from "../../components/costbook-category/costbook-category.component";
import { CostbookCostCode } from "../../components/costbook-costcode/costbook-costcode.component";

class CostBook extends Component {
  constructor() {
    super();
    this.state = {
      category: {
        categoryName: null,
      },
      costCode: {
        costCodeTitle: null,
        categoryId: null,
      },
    };
  }
  componentDidMount() {
    this.props.fetchCostBook();
  }
  categoryChange = (e) => {
    const { name, value } = e.target;
    //console.log(name, value)
    let categoryName = this.state.category;
    categoryName[name] = value;
    this.setState({ category: categoryName }, () => {
      console.log(this.state);
    });
  };

  createCategory = (e) => {
    e.preventDefault();
    console.log("hi");
    let costBookDetails = this.state.category;
    this.props.createCategory(costBookDetails);
  };

  onCostCodeSubmit = (e) => {
    e.preventDefault();
    let costCodeDetails = this.state.costCode;
    this.props.createCostCode(costCodeDetails);
  };

  onCostCodeChange = (e) => {
    const { name, value } = e.target;
    let costcodeinfo = this.state.costCode;
    costcodeinfo[name] = value;
    this.setState({ costCode: costcodeinfo });
    console.log(this.state);
  };
  render() {
    //console.log(this.props.costbook);
    return (
      <>
        <ProjectsNav title="Cost Book" toggleSearchBar={this.toggleSearchBar} />
        {this.props.costbook.map((cost) => {
          return (
            <>
              <CostbookCategory categoryName={cost.categoryName} />
              {/* <h1>{cost.categoryName}</h1> */}
              {cost.costCodes.map((costcode) => {
                return (
                  <>
                    <Link
                      to={`/cost-code/${cost._id}/${costcode._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <CostbookCostCode title={costcode.costCodeTitle} />
                    </Link>
                    {/* {costcode.items.map((item) => {
                      return <h5>{item.itemName}</h5>;
                    })} */}
                  </>
                );
              })}
            </>
          );
        })}
        <h3>CREATE CATEGORY FORM</h3>
        <form
          onSubmit={this.createCategory}
          onChange={this.categoryChange}
          style={{ border: "1px solid black" }}
        >
          <label name="categoryName" id="categoryName">
            Category Name
          </label>
          <input type="text" name="categoryName" id="categoryName" />
          <button type="submit">CREATE CATEGORY</button>
        </form>

        <h3>CREATE CATEGORY FORM</h3>
        <form
          style={{ border: "1px solid black" }}
          onChange={this.onCostCodeChange}
          onSubmit={this.onCostCodeSubmit}
        >
          <label name="costCodeTitle" id="costCodeTitle">
            Title
          </label>
          <input type="text" name="costCodeTitle" id="costCodeTitle" />
          <label name="categoryId" id="categoryId">
            Category
          </label>
          <select id="categoryId" name="categoryId">
            <option>none</option>
            {this.props.costbook.map((cost) => {
              return <option value={cost._id}>{cost.categoryName}</option>;
            })}
          </select>
          <button type="submit">CREATE COST CODE</button>
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
  createCategory: (costBookDetails) =>
    dispatch(createCostBookCategoryStart(costBookDetails)),
  createCostCode: (costCodeDetails) =>
    dispatch(createCostCodeStart(costCodeDetails)),
  //updateRoles: (payload) => dispatch(UpdateRolesInProjectStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CostBook);
