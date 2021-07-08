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
  AddLineItemDiv,
  AmountDiv,
  LongDiv,
} from "./create-purchase-order-form.styles";
import { Link, withRouter } from "react-router-dom";
import FormFullScreenSelection from "../form-fullscreen-selection/form-fullscreen-selection.component";
import FormCostbookSelection from "../form-costbook-selection/form-costbook-selection.component";
import add from "../../assets/add.png";
import remove from "../../assets/minuscircle.png";

class CreatePurchaseOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchaseOrderDetails: {
        PoTitle: "",
        userId: "",
        projectId: "",
        purchasedItem: [],
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

    // this.props.createPurchaseOrder(purchaseOrderDetails);
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
    if (type === "purchasedItem") {
      temp[type].push(value);
    } else {
      temp[type] = value;
    }

    this.setState({ purchaseOrderDetails: temp }, () => {
      console.log(this.state);
    });
  };

  itemRemove = (e) => {
    let { itemid } = e.target.dataset;

    let temp = this.state.purchaseOrderDetails;
    let items = temp["purchasedItem"];
    items = items.filter((item) => {
      return item.itemId != itemid;
    });
    temp["purchasedItem"] = items;

    this.setState({ purchaseOrderDetails: temp }, () => {
      console.log(this.state);
    });
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
                value={this.state.purchaseOrderDetails.PoTitle}
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
          <div>
            <form
              style={{ display: "flex", flexDirection: "column" }}
              onChange={(e) => this.handleOnChange(e)}
            >
              <div>
                <LongInput
                  type="text"
                  value={this.state.purchaseOrderDetails.PoTitle}
                  name="PoTitle"
                  id="PoTitle"
                  placeholder="Purchase Order Title"
                  onChange={(e) => this.handleOnChange(e)}
                  required
                />
              </div>
            </form>
            <Container>
              {this.state.purchaseOrderDetails.purchasedItem.map(
                ({ itemName, itemNumber, itemValue, itemId, comment }) => {
                  return (
                    <LongDiv data-id={itemId}>
                      <div
                        style={{
                          width: "80%",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flex: 0.8,
                          }}
                        >
                          <img
                            src={remove}
                            data-itemId={itemId}
                            onClick={(e) => {
                              this.itemRemove(e);
                            }}
                          />
                          <div>{itemName}</div>
                        </div>

                        <div>${itemNumber * itemValue}</div>
                      </div>
                    </LongDiv>
                  );
                }
              )}

              <AddLineItemDiv
                onClick={() => {
                  console.log(this.state);
                  this.toggleFormChoose("items");
                }}
              >
                <div
                  style={{
                    flex: 0.2,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img src={add} />
                </div>
                <div style={{ flex: 0.8, borderBottom: "1px solid #d3d3d3" }}>
                  Add Line Item
                </div>
              </AddLineItemDiv>

              <AmountDiv>
                <div>SubTotal</div>
                <div>$0</div>
              </AmountDiv>
              <AmountDiv>
                <div>SubTotal</div>
                <div>$0</div>
              </AmountDiv>
              <AmountDiv>
                <div>SubTotal</div>
                <div>$0</div>
              </AmountDiv>
            </Container>
          </div>
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

        {this.state.active === "Items" && this.state.formChoose === "items" ? (
          <Overlay style={{ bottom: "0", height: "100%" }}>
            <FormCostbookSelection
              exit={this.toggleFormChoose}
              submitItem={this.select}
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
