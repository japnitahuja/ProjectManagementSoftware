import React, { Component } from 'react'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { fetchCurrentPurchaseOrderStart } from '../../redux/current-purchase-order/current-purchase-order.actions';
import IndividualPurchaseOrderComponent from "../../components/individual-purchase-order/individual-purchase-order.component";
import POitemForm from '../../components/create-purchase-order-item-form/create-purchase-order-item-form.component'
import POItemNav from '../../components/PO-item-nav/PO-item-nav.component';
import POItemMenu from '../../components/PO-item-menu/PO-item-menu.component';
import IndividualPurchaseOrderContainer from '../../components/individual-purchase-order/individual-purchase-order.container';
class IndividualPurchaseOrder extends Component {

    componentDidMount(){
        const POid = this.props.match.params.POid
        this.props.fetchCurrentPO(POid)
    }
    render() {
        return (
            <div>
                <POItemNav />
                <POItemMenu />
                <IndividualPurchaseOrderContainer />
                <POitemForm />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({

});
  
const mapDispatchToProps = (dispatch) => ({
    fetchCurrentPO: (POid) => dispatch(fetchCurrentPurchaseOrderStart(POid))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(IndividualPurchaseOrder);

