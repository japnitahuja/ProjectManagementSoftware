import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ProjectChooseTemplate from "../../components/project-choose-template/project-choose-template.component";
import CreateProjectForm from "./../../components/create-project-form/create-project-form.component";

class CreateProjectScratch extends Component {
  constructor() {
    super();
    this.state = {
      orgId: "",
    };
  }

  componentDidMount() {
    const orgId = this.props.match.params.orgId;
    this.setState({ orgId: orgId });
  }

  render() {
    return (
      <div>
        <CreateProjectForm orgId={this.state.orgId} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProjectScratch);
