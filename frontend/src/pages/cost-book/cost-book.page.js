import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  createCostBookCategoryStart,
  createCostCodeStart,
  fetchCostBookStart,
} from "../../redux/costbook/costbook.actions";
import {
  selectCostBookDetails,
  selectFetchCostBookSuccess,
} from "../../redux/costbook/costbook.selectors";
import ProjectsNav from "../../components/projects-nav/projects-nav.component";
import { CostbookCategory } from "../../components/costbook-category/costbook-category.component";
import { CostbookCostCode } from "../../components/costbook-costcode/costbook-costcode.component";
import CostBookCreateButton from "../../components/costbook-createbutton/costbook-createbutton.component";
import Spinner from "../../components/spinner/spinner.component";

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

    if (!this.props.fetchCostBookSuccess) {
      return <Spinner />;
    }

    return (
      <>
        <ProjectsNav title="Cost Book" toggleSearchBar={this.toggleSearchBar} />
        {this.props.costbook.map((cost) => {
          return (
            <>
              <CostbookCategory categoryName={cost.categoryName} />
              {cost.costCodes.map((costcode) => {
                return (
                  <>
                    <Link
                      to={`/cost-code/${cost._id}/${costcode._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <CostbookCostCode
                        key={costcode._id}
                        title={costcode.costCodeTitle}
                      />
                    </Link>
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
  fetchCostBookSuccess: selectFetchCostBookSuccess,
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
