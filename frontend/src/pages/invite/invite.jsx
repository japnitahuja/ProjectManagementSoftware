import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CreatePurchaseOrderForm from "../../components/create-purchase-order-form/create-purchase-order-form.component";
import AddUserForm from "./../../components/adduser-form/adduser-form.component";

class Invite extends Component {
  constructor() {
    super();
    this.state = {
      projectId: "",
    };
  }

  componentDidMount() {
    const projectId = this.props.match.params.projectId;
    this.setState({ projectId: projectId });
  }

  render() {
    const { projectId } = this.state;

    return (
      <div>
        <AddUserForm projectId={projectId} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Invite);
