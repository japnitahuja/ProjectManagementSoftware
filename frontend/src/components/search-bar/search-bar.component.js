import React, { Component } from 'react'
import {SearchBarDiv, SearchIcon, SearchInput, SearchText } from './search-bar.styles'
import search from '../../assets/search.png'
import { SmallText } from '../task-item/task-item.styles'


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
            <SearchBarDiv>
                <SearchInput type='text' placeholder={placeholder} />
                <SearchIcon src={search} />
                <SearchText><SmallText>FILTER</SmallText></SearchText>
            </SearchBarDiv>
        )
    }
}

export default SearchBar