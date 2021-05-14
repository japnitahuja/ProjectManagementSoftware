import React, { Component } from 'react'
import {DropDownDiv, DropDownButton, DropDownContent, DropDownOption, DropDownOptionHeading, DropDownOptionDescription} from "./form-dropdown.styles";
import DownArrow from "../../assets/down-arrow.png"

class DropDown extends Component {
    constructor(props){
        super(props);
        this.dropdownContainer = React.createRef();
        this.state={
            dropDownSwitch:false, 
            selected: this.props.selected
        }
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (
          this.dropdownContainer.current &&
          !this.dropdownContainer.current.contains(event.target)
        ) {
          this.setState({
            dropDownSwitch: false,
          });
        }
      };

    DropDownToggle = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
            dropDownSwitch: !prevState.dropDownSwitch
        }));

    }

    handleOptionClick = (e) => {
        e.preventDefault()
        console.log("change")
        let {permission} = e.target.dataset;
        this.props.onChangePermission(this.props.userID,permission)
        this.setState({dropDownSwitch:false, selected: permission});
    }

    render() {
        console.log(this.props)
        let {options} = this.props;
        let {selected} = this.state;

        let selectedIndex = 0;
        options.map((option, index)=> {
            if(option[0] === selected){
                selectedIndex = index;
            }
        })
        return (
            <DropDownDiv ref={this.dropdownContainer}>
                <DropDownButton onClick={this.DropDownToggle} img={DownArrow}>{options[selectedIndex][1]}</DropDownButton>
                    <DropDownContent display={this.state.dropDownSwitch?"block":"none"}>

                        <DropDownOption data-permission={options[selectedIndex][0]} onClick={this.handleOptionClick} backgroundFlag = {true}>
                        <DropDownOptionHeading  data-permission={options[selectedIndex][0]} onClick={this.handleOptionClick}>{options[selectedIndex][1]}</DropDownOptionHeading>
                        <DropDownOptionDescription  data-permission={options[selectedIndex][0]} onClick={this.handleOptionClick}>{options[selectedIndex][2]}</DropDownOptionDescription>
                        </DropDownOption>
                        
                            {
                            options.map((option) => {
                                let selectedFlag = false;
                                if(option[0] != selected){
                                    return(
                                        <DropDownOption data-permission={option[0]} onClick={this.handleOptionClick} backgroundFlag = {selectedFlag}>
                                            <DropDownOptionHeading data-permission={option[0]} onClick={this.handleOptionClick}>{option[1]}</DropDownOptionHeading>
                                            <DropDownOptionDescription  data-permission={option[0]} onClick={this.handleOptionClick}>{option[2]}</DropDownOptionDescription>
                                        </DropDownOption>
                                    
                                    )
                                }
                            })
                            }
                    </DropDownContent>
            </DropDownDiv>
        )
    }
}

export default DropDown;