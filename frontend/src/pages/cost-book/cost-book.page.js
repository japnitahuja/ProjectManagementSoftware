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
import CostBookCreateButton from "../../components/costbook-createbutton/costbook-createbutton.component";

class CostBook extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchCostBook();
  }

  render() {
    console.log(this.props.costbook);
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
        <CostBookCreateButton />
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
