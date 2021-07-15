import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  POItemNavBackButton,
  POItemNavDiv,
  POName,
} from "./PO-item-nav.styles";
import { selectCurrentPOItem } from "../../redux/current-purchase-order/current-purchase-order.selector";
import { Link } from "react-router-dom";
import { selectCurrentProjectId } from "../../redux/current-project/current-project.selectors";

class POItemNav extends Component {
  render() {
    console.log(this.props);
    let { POItem, projectId } = this.props;
    POItem = POItem[0];

    return (
      <POItemNavDiv>
        <Link
          to={`/projectpurchaseorders/${projectId}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <POItemNavBackButton>&times;</POItemNavBackButton>
        </Link>
        <POName> {this.props.VPO ? POItem.CoTitle : POItem.PoTitle}</POName>
        <POName></POName>
      </POItemNavDiv>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  POitem: selectCurrentPOItem,
  projectId: selectCurrentProjectId,
});

export default connect(mapStateToProps, null)(POItemNav);
