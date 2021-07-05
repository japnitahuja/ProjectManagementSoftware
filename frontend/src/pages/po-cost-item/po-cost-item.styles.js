import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { createCostCodeItemStart, fetchCostBookStart } from '../../redux/costbook/costbook.actions';
import { selectCostBookDetails } from '../../redux/costbook/costbook.selectors';
import {Link} from "react-router-dom";

class POCostBookItem extends Component {
    constructor(){
        super();
        this.state = {
            items: {}
        }
    }
    componentDidMount(){
        this.props.fetchCostBook();
        console.log('component mounted', this.props.costbook)
        this.items()
    }
    items = () => {
        console.log(this.props.costbook, 'hi')
        let category = this.props.costbook.find(book => book._id === this.props.match.params.categoryId)
        //console.log(category)
        let costCodeItem = category.costCodes.find(id => id._id === this.props.match.params.costCodeId)
        let item = costCodeItem.items.find(id => id._id === this.props.match.params.itemId)
        console.log(item)
        this.setState({items: item},() => console.log(this.state))
    }

    itemOnChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        let itemInfo = this.state.items
        itemInfo[name] = value
        this.setState({items: itemInfo}, () => {console.log(this.state.items)})
    }

    editItem = (e) => {
        e.preventDefault()

    }

    render() {
       const {items} = this.state
        return (
            <>
            <div>
                <h2>ITEM NAME</h2> <h4>{items.itemName}</h4>
                <h2>PART#</h2> <h4>{items.partNo}</h4>
                <h2>COST/RATE</h2><h4>{items.cost}</h4>
                <h2>ITEM LINK</h2><h4>{items.link}</h4>
                <h2>DESCRIPTION</h2><h4>{items.description}</h4>
            </div>
            <form onChange={this.itemOnChange}>
                <h3>EDIT ITEM</h3>
                <label htmlFor='itemName' id='itemName' name='itemName'>Item Name</label>
                <input type='text' id='itemName' name='itemName'/><br/>
                <label htmlFor='partNo' id='partNo' name='partNo'>Part No. </label>
                <input type='number' id='partNo' name='partNo'/><br/>
                <label htmlFor='cost' id='cost' name='cost'>Cost</label>
                <input type='number' id='cost' name='cost'/><br/>
                <label htmlFor='itemLink' id='itemLink' name='itemLink'>Item Link</label>
                <input type='text' id='itemLink' name='itemLink'/><br/>
                <label htmlFor='description' id='description' name='description'>Description</label>
                <input type='text' id='description' name='description'/>
            </form>
            </>
        )
    }
}


const mapStateToProps = createStructuredSelector ({
    costbook: selectCostBookDetails,
});

const mapDispatchToProps = (dispatch) => ({
    fetchCostBook: () => dispatch(fetchCostBookStart()),
    createItem: (itemDetails) => dispatch(createCostCodeItemStart(itemDetails))
    // createCategory: (costBookDetails) => dispatch(createCostBookCategoryStart(costBookDetails)),
    // createCostCode: (costCodeDetails) => dispatch(createCostCodeStart(costCodeDetails))
    //updateRoles: (payload) => dispatch(UpdateRolesInProjectStart(payload)),
  });

  export default connect (mapStateToProps, mapDispatchToProps)(POPOCostBookItem);
