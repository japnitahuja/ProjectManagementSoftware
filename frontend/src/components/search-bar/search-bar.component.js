import React, { Component } from 'react'
import {SearchDiv, SearchBarDiv, SearchIcon, SearchInput, FilterDiv } from './search-bar.styles'
import search from '../../assets/search.png'



class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            placeholder: this.props.placeholder,
            searchText: ""
        }
    }

    handleOnChange = (e) => {
        let {value} = e.target;
        this.setState({searchText: value})
        this.props.search(value)
        
    }

    render() {
        const {placeholder, searchText} = this.state
        return (
            <SearchDiv>
                <SearchBarDiv>
                    <SearchInput 
                        type='text' 
                        placeholder={placeholder} 
                        value={searchText}
                        onChange={this.handleOnChange}/>
                    <SearchIcon src={search} />
                </SearchBarDiv>
                <FilterDiv>FILTER</FilterDiv>
            </SearchDiv>
        )
    }
}

export default SearchBar