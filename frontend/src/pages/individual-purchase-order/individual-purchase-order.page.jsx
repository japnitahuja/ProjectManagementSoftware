import React, { Component } from 'react'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { fetchCurrentPurchaseOrderStart } from '../../redux/current-purchase-order/current-purchase-order.actions';
import IndividualPurchaseOrderComponent from "../../components/individual-purchase-order/individual-purchase-order.component";
import POitemForm from '../../components/create-purchase-order-item-form/create-purchase-order-item-form.component'
class IndividualPurchaseOrder extends Component {

    componentDidMount(){
        const POid = this.props.match.params.POid
        this.props.fetchCurrentPO(POid)
    }
    render() {
        return (
            <div>
                <IndividualPurchaseOrderComponent />
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

