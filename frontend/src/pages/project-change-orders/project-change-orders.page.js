import React, { Component } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import PurchaseOrderList from "../../components/purchase-orders-list/purchase-orders-list.component";
import {
  selectCurrentProjectChangeOrders,
  selectCurrentProjectName,
  selectCurrentProjectPurchaseOrders,
} from "../../redux/current-project/current-project.selectors";
import { fetchCurrentProjectStart } from "../../redux/current-project/current-project.actions";
import LowerNavBar from "../../components/lower-nav-bar/lower-nav-bar.component";
import PurchaseOrderListContainer from "../../components/purchase-orders-list/purchase-order-lists.container";
import { TaskNav } from "../../components/task-nav/task-nav.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import NoResult from "../../components/no-result/no-result.component";
import ToggleButton from "../../components/toggle-button/toggle-button.component";
import PurchaseOrdersListAdmin from "../../components/purchase-orders-list-admin/purchase-orders-list-admin.component";

class ProjectChangeOrders extends Component {
  constructor() {
    super();
    this.state = {
      VPOsList: "",
      showSearch: false,
      adminSwitch: false,
    };
  }
  componentDidMount() {
    const projectId = this.props.match.params.projectId;
    this.props.fetchProject(projectId);
    this.setState({ VPOsList: this.props.changeOrders });
  }

  search = (searchedText) => {
    let temp = this.props.changeOrders;

    if (searchedText) {
      temp = temp.filter(({ purchasedItem }) => {
        return purchasedItem.toLowerCase().includes(searchedText.toLowerCase());
      });
    }

    this.setState({ VPOsList: temp });
  };

  toggleSearch = () => {
    this.setState((prevState) => ({
      showSearch: !prevState.showSearch,
    }));
  };

  adminToggle = () => {
    this.setState((prevState) => ({
      adminSwitch: !prevState.adminSwitch,
    }));
  };

  render() {
    const { changeOrders, projectName } = this.props;
    const { VPOsList } = this.state;
    console.log(changeOrders);

    return (
      <div>
        <TaskNav title={projectName} toggleSearch={this.toggleSearch} />
        {this.state.showSearch ? (
          <SearchBar
            placeholder="Search variance POs..."
            search={this.search}
          />
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

        {VPOsList.length === 0 ? (
          <NoResult />
        ) : this.state.adminSwitch ? (
          <PurchaseOrdersListAdmin purchaseOrders={VPOsList} VPO={true} />
        ) : (
          <PurchaseOrderListContainer purchaseOrders={VPOsList} VPO={true} />
        )}

        <LowerNavBar />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  changeOrders: selectCurrentProjectChangeOrders,
  projectName: selectCurrentProjectName,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProject: (projectId) => dispatch(fetchCurrentProjectStart(projectId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectChangeOrders);
