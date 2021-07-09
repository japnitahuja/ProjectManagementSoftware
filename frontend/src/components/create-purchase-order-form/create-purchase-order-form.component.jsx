import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { createPurchaseOrderStart } from "../../redux/current-purchase-order/current-purchase-order.actions";
import {
  selectCurrentProjectId,
  selectCurrentProjectTasks,
} from "../../redux/current-project/current-project.selectors";
import {
  Container,
  InfoInput,
  InfoInputDiv,
  InfoTitle,
  InfoDiv,
  LongInput,
  LowerNavDiv,
  OneHalfDiv,
  NavBar,
  OneThirdDiv,
  POFormDiv,
  Overlay,
} from "./create-purchase-order-form.styles";
import { Link, withRouter } from "react-router-dom";
import FormFullScreenSelection from "../form-fullscreen-selection/form-fullscreen-selection.component";

class CreatePurchaseOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchaseOrderDetails: {
        PoTitle: "",
        userId: "",
        projectId: "",
        purchasedItem: "",
        payee: "", //placeholder
        group: "",
        terms: "",
        dueDate: "",
        taskId: "",
        taskName: "",
      },
      formChoose: null,
      active: "Info",
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    let PurchaseOrder = this.state.purchaseOrderDetails;
    PurchaseOrder[name] = value;

    this.setState({ purchaseOrderDetails: PurchaseOrder }, () =>
      console.log(this.state)
    );
  };

  createPurchaseOrder = (e) => {
    e.preventDefault();
    let purchaseOrderDetails = this.state.purchaseOrderDetails;

    this.props.tasks.map((task) => {
      if (task.taskName == purchaseOrderDetails.taskName) {
        purchaseOrderDetails.taskId = task._id;
      }
    });

    console.log(purchaseOrderDetails);

    this.props.createPurchaseOrder(purchaseOrderDetails);
  };

  handleOnClick = (e) => {
    let { key } = e.target.dataset;

    this.setState({
      active: key,
    });
  };

  exit = (e) => {
    this.props.history.goBack();
  };

  toggleFormChoose = (type) => {
    if (!this.state.formChoose) {
      this.setState({ formChoose: type }, console.log(this.state));
    } else {
      this.setState({ formChoose: null });
    }
  };

  select = ({ value, type }) => {
    let temp = this.state.purchaseOrderDetails;
    temp[type] = value;
    this.setState({ purchaseOrderDetails: temp }, console.log(this.state));
  };

  render() {
    let { tasks } = this.props;
    let { active } = this.state;

    let taskNames = [];
    tasks.map((task) => {
      taskNames.push(task.taskName);
    });

    return (
      <POFormDiv>
        <NavBar>
          <OneThirdDiv align="flex-start" color="#205284" onClick={this.exit}>
            Cancel
          </OneThirdDiv>
          <OneThirdDiv align="center" style={{ fontWeight: "600" }}>
            New PO
          </OneThirdDiv>
          <OneThirdDiv
            align="flex-end"
            color="#205284"
            onClick={this.createPurchaseOrder}
          >
            Save
          </OneThirdDiv>
        </NavBar>
        <LowerNavDiv>
          <OneHalfDiv
            data-key="Info"
            onClick={this.handleOnClick}
            active={active === "Info"}
          >
            INFO
          </OneHalfDiv>
          <OneHalfDiv
            data-key="Items"
            onClick={this.handleOnClick}
            active={active === "Items"}
          >
            ITEMS
          </OneHalfDiv>
        </LowerNavDiv>
        {this.state.active === "Info" ? (
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onChange={(e) => this.handleOnChange(e)}
          >
            <div>
              <LongInput
                type="text"
                //value={this.state.purchaseOrderDetails.purchasedItem}
                name="PoTitle"
                id="PoTitle"
                placeholder="Purchase Order Title"
                onChange={(e) => this.handleOnChange(e)}
                required
              />
            </div>

            <Container>
              <InfoDiv>
                <InfoTitle>Task</InfoTitle>
                <InfoInputDiv
                  id="taskName"
                  onClick={() => {
                    this.toggleFormChoose("taskName");
                  }}
                  required
                >
                  {this.state.purchaseOrderDetails.taskName
                    ? this.state.purchaseOrderDetails.taskName
                    : "Choose a task"}
                </InfoInputDiv>
              </InfoDiv>

              <InfoDiv>
                <InfoTitle>Payee</InfoTitle>
                <InfoInputDiv
                  id="payee"
                  onClick={() => {
                    this.toggleFormChoose("payee");
                  }}
                  required
                >
                  {this.state.purchaseOrderDetails.payee
                    ? this.state.purchaseOrderDetails.payee
                    : "Choose a payee"}
                </InfoInputDiv>
              </InfoDiv>

              <InfoDiv>
                <InfoTitle>Group</InfoTitle>
                <InfoInputDiv
                  id="group"
                  onClick={() => {
                    this.toggleFormChoose("group");
                  }}
                  required
                >
                  {this.state.purchaseOrderDetails.group
                    ? this.state.purchaseOrderDetails.group
                    : "Choose a Group"}
                </InfoInputDiv>
              </InfoDiv>

              <InfoDiv>
                <InfoTitle>Terms</InfoTitle>
                <InfoInputDiv
                  id="terms"
                  onClick={() => {
                    this.toggleFormChoose("terms");
                  }}
                  required
                >
                  {this.state.purchaseOrderDetails.terms
                    ? this.state.purchaseOrderDetails.terms
                    : "Choose Terms"}
                </InfoInputDiv>
              </InfoDiv>

              <InfoDiv>
                <InfoTitle>Due Date</InfoTitle>
                <InfoInput
                  type="date"
                  value={this.state.purchaseOrderDetails.dueDate}
                  name="dueDate"
                  id="dueDate"
                  onChange={(e) => this.handleOnChange(e)}
                  required
                />
              </InfoDiv>
            </Container>
          </form>
        ) : (
          <div></div>
        )}

        {this.state.active === "Info" &&
        this.state.formChoose === "taskName" ? (
          <Overlay style={{ bottom: "0", height: "100%" }}>
            <FormFullScreenSelection
              exit={this.toggleFormChoose}
              items={taskNames}
              select={this.select}
              type={this.state.formChoose}
              selected={this.state.purchaseOrderDetails.taskName}
            />
          </Overlay>
        ) : null}

        {this.state.active === "Info" && this.state.formChoose === "terms" ? (
          <Overlay style={{ bottom: "0", height: "100%" }}>
            <FormFullScreenSelection
              exit={this.toggleFormChoose}
              items={["Due on Receipt", "Net 15", "Net 30", "Net 60"]}
              select={this.select}
              type={this.state.formChoose}
              selected={this.state.purchaseOrderDetails.terms}
            />
          </Overlay>
        ) : null}

        {this.state.active === "Info" && this.state.formChoose === "payee" ? (
          <Overlay style={{ bottom: "0", height: "100%" }}>
            <FormFullScreenSelection
              exit={this.toggleFormChoose}
              items={["Due on Receipt", "Net 15", "Net 30", "Net 60"]}
              select={this.select}
              type={this.state.formChoose}
              selected={this.state.purchaseOrderDetails.payee}
            />
          </Overlay>
        ) : null}

        {this.state.active === "Info" && this.state.formChoose === "group" ? (
          <Overlay style={{ bottom: "0", height: "100%" }}>
            <FormFullScreenSelection
              exit={this.toggleFormChoose}
              items={["Due on Receipt", "Net 15", "Net 30", "Net 60"]}
              select={this.select}
              type={this.state.formChoose}
              selected={this.state.purchaseOrderDetails.group}
            />
          </Overlay>
        ) : null}
      </POFormDiv>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  projectId: selectCurrentProjectId,
  tasks: selectCurrentProjectTasks,
});

const mapDispatchToProps = (dispatch) => ({
  createPurchaseOrder: (purchaseOrderDetails) =>
    dispatch(createPurchaseOrderStart(purchaseOrderDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreatePurchaseOrderForm));
