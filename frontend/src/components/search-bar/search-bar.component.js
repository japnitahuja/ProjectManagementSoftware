import React, { Component } from 'react'
import {SearchDiv, SearchBarDiv, SearchIcon, SearchInput, FilterDiv } from './search-bar.styles'
import search from '../../assets/search.png'



class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            placeholder: this.props.placeholder,
        }
    }
    render() {
        const {placeholder} = this.state
        return (
            <SearchDiv>
                <SearchBarDiv>
                    <SearchInput type='text' value={placeholder} />
                    <SearchIcon src={search} />
                </SearchBarDiv>
                <FilterDiv>FILTER</FilterDiv>
            </SearchDiv>
        )
    }
}

export default SearchBar