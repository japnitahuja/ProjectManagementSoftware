import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { createPurchaseOrderStart } from "../../redux/current-purchase-order/current-purchase-order.actions";
import {selectCurrentProjectId} from '../../redux/current-project/current-project.selectors'
import {Container, InfoInput, InfoTitle, InfoDiv, LongInput, LowerNavDiv, OneHalfDiv, NavBar, OneThirdDiv, Overlay} from "./create-purchase-order-form.styles"
import { Link, withRouter } from "react-router-dom";

class CreatePurchaseOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchaseOrderDetails: {
        PoTitle:'',
        userId:'',
        projectId:'',
        purchasedItem:'',
        payee:'123456789', //placeholder
        group:'',
        terms:'',
        dueDate:'',
        taskId: '',
        taskName:''
      },
      active: "Info",
    };
  }


  handleOnChange = (e) => {
    const { name, value } = e.target;
    let PurchaseOrder = this.state.purchaseOrderDetails;
    PurchaseOrder[name] = value;

    this.setState({ purchaseOrderDetails: PurchaseOrder }, () => console.log(this.state));
  };

  createPurchaseOrder = (e) => {
    e.preventDefault();
    let purchaseOrderDetails = this.state.purchaseOrderDetails;
    this.props.createPurchaseOrder(purchaseOrderDetails);
    // window.location.reload()
  };

  handleOnClick = (e) => {
    let {key} = e.target.dataset

    this.setState({
        active: key
    })
  }

  exit = (e) => {
    this.props.history.goBack()
  }

  render() {
    let {active} = this.state
    return (
      <Overlay>
        <NavBar>
          <OneThirdDiv align="flex-start" color="#205284" onClick={this.exit}>
            Cancel
          </OneThirdDiv>
          <OneThirdDiv align="center" style={{fontWeight: "600"}}>
            New PO
          </OneThirdDiv>
          <OneThirdDiv align="flex-end" color="#205284" onClick={this.createTask}>
            Save
          </OneThirdDiv>
        </NavBar>
        <LowerNavDiv>

            <OneHalfDiv  data-key='Info' onClick={this.handleOnClick} active={active === 'Info'}>
                INFO
            </OneHalfDiv>
            <OneHalfDiv data-key='Items' onClick={this.handleOnClick} active={active === 'Items'} >
                ITEMS
            </OneHalfDiv>
            
        </LowerNavDiv>
        {this.state.active==="Info"?
          <form
          style={{ display: "flex", flexDirection: "column" }}
          onChange={(e) => this.handleOnChange(e)}
          >
          <div>
            <LongInput
              type="text"
              value={this.state.purchaseOrderDetails.purchasedItem}
              name="purchasedItem"
              id="purchasedItem"
              placeholder="Purchase Order Title"
              onChange={(e) => this.handleOnChange(e)}
              required/>
          </div>

           <Container>

                <InfoDiv>
                    <InfoTitle>
                        Task
                    </InfoTitle>
                    <InfoInput
                    type="text"
                    value={this.state.purchaseOrderDetails.taskName}
                    name="taskName"
                    id="taskName"
                    onChange={(e) => this.handleOnChange(e)}
                    required/>
 
                </InfoDiv>

                <InfoDiv>
                    <InfoTitle>
                        Payee
                    </InfoTitle>
                    <InfoInput
                    type="text"
                    value={this.state.purchaseOrderDetails.payee}
                    name="payee"
                    id="payee"
                    onChange={(e) => this.handleOnChange(e)}
                    required/>
 
                </InfoDiv>

                <InfoDiv>
                    <InfoTitle>
                        Group
                    </InfoTitle>
                    <InfoInput
                    type="text"
                    value={this.state.purchaseOrderDetails.group}
                    name="group"
                    id="group"
                    onChange={(e) => this.handleOnChange(e)}
                    required/>
 
                </InfoDiv>

                <InfoDiv>
                    <InfoTitle>
                        PO Date
                    </InfoTitle>
                    <InfoInput
                    type="text"
                    value={this.state.purchaseOrderDetails.taskName}
                    name="taskName"
                    id="taskName"
                    onChange={(e) => this.handleOnChange(e)}
                    required/>
 
                </InfoDiv>

                <InfoDiv>
                    <InfoTitle>
                        Term
                    </InfoTitle>
                    <InfoInput
                    type="text"
                    value={this.state.purchaseOrderDetails.term}
                    name="term"
                    id="term"
                    onChange={(e) => this.handleOnChange(e)}
                    required/>
 
                </InfoDiv>

                <InfoDiv>
                    <InfoTitle>
                        Due Date
                    </InfoTitle>
                    <InfoInput
                    type="text"
                    value={this.state.purchaseOrderDetails.dueDate}
                    name="dueDate"
                    id="dueDate"
                    onChange={(e) => this.handleOnChange(e)}
                    required/>
 
                </InfoDiv>

            </Container>
       
          </form>: <div></div>
        
      }
       

      </Overlay>
      
    );
  }
}

const mapStateToProps = createStructuredSelector({
  projectId: selectCurrentProjectId
});

const mapDispatchToProps = (dispatch) => ({
  createPurchaseOrder: (purchaseOrderDetails) => dispatch(createPurchaseOrderStart(purchaseOrderDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreatePurchaseOrderForm));
