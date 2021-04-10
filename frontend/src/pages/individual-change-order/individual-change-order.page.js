import React, { Component } from 'react'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import COitemForm from '../../components/create-change-order-item-form/create-change-order-item-form.component'
import POItemNav from '../../components/PO-item-nav/PO-item-nav.component';
import COItemMenu from '../../components/CO-item-menu/CO-item-menu.component';
import IndividualPurchaseOrderContainer from '../../components/individual-purchase-order/individual-purchase-order.container';
import COItemNav from '../../components/CO-item-nav/CO-item-nav.component';
import { fetchCurrentChangeOrderStart } from '../../redux/current-change-order/current-change-order.actions';
import IndividualChangeOrderComponent from '../../components/individual-change-order/individual-change-order.component';
class IndividualChangeOrder extends Component {

    componentDidMount(){
        const COid = this.props.match.params.COid
        this.props.fetchCurrentCO(COid)
        console.log(COid, 'co id')
    }
    render() {
        return (
            <div>
                <COItemNav />
                <COItemMenu />
                <IndividualChangeOrderComponent />
                <COitemForm />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({

});
  
const mapDispatchToProps = (dispatch) => ({
    fetchCurrentCO: (COid) => dispatch(fetchCurrentChangeOrderStart(COid))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(IndividualChangeOrder);

