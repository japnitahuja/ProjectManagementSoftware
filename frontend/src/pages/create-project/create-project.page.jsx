import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ProjectChooseTemplate from "../../components/project-choose-template/project-choose-template.component";

class CreateProject extends Component {
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
        <ProjectChooseTemplate orgId={this.state.orgId} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
