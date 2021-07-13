import React, { Component } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import PurchaseOrderList from "../../components/purchase-orders-list/purchase-orders-list.component";
import {
  selectCurrentProjectName,
  selectCurrentProjectPurchaseOrders,
} from "../../redux/current-project/current-project.selectors";
import { fetchCurrentProjectStart } from "../../redux/current-project/current-project.actions";
import LowerNavBar from "../../components/lower-nav-bar/lower-nav-bar.component";
import PurchaseOrderListContainer from "../../components/purchase-orders-list/purchase-order-lists.container";
import { TaskNav } from "../../components/task-nav/task-nav.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import ToggleButton from "../../components/toggle-button/toggle-button.component";
import NoResult from "../../components/no-result/no-result.component";
import PurchaseOrdersListAdmin from "../../components/purchase-orders-list-admin/purchase-orders-list-admin.component";

class ProjectPurchaseOrders extends Component {
  constructor() {
    super();
    this.state = {
      POsList: "",
      search: false,
      adminSwitch: false,
    };
  }
  componentDidMount() {
    const projectId = this.props.match.params.projectId;
    this.props.fetchProject(projectId);
    this.setState({ POsList: this.props.purchaseOrders });
  }

  toggleSearch = () => {
    this.setState((prevState) => ({
      search: !prevState.search,
    }));
  };

  adminToggle = () => {
    this.setState((prevState) => ({
      adminSwitch: !prevState.adminSwitch,
    }));
  };
  search = (searchedText) => {
    let temp = this.props.purchaseOrders;

    if (searchedText) {
      temp = temp.filter(({ purchasedItem }) => {
        return purchasedItem.toLowerCase().includes(searchedText.toLowerCase());
      });
    }

    this.setState({ POsList: temp });
  };

  render() {
    const { projectName, purchaseOrders } = this.props;
    const { POsList, search } = this.state;

    return (
      <div>
        <TaskNav title={projectName} toggleSearch={this.toggleSearch} />
        {search ? (
          <SearchBar placeholder="Search POs..." search={this.search} />
        ) : null}
        <div
          style={{
            padding: "1em",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            borderBottom: "1px solid #BCC5D3",
          }}
        >
          <ToggleButton
            onToggleFunction={this.adminToggle}
            checked={this.state.adminSwitch}
            color="#6C5FCF"
          />
          <p
            style={{
              fontSize: "1em",
              color: "#666666",
              margin: "0",
              paddingLeft: "0.5em",
            }}
          >
            Admin
          </p>
        </div>
        {POsList.length === 0 ? (
          <NoResult />
        ) : this.state.adminSwitch ? (
          <PurchaseOrdersListAdmin purchaseOrders={POsList} />
        ) : (
          <PurchaseOrderListContainer purchaseOrders={POsList} />
        )}
        <LowerNavBar />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  purchaseOrders: selectCurrentProjectPurchaseOrders,
  projectName: selectCurrentProjectName,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProject: (projectId) => dispatch(fetchCurrentProjectStart(projectId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectPurchaseOrders);
