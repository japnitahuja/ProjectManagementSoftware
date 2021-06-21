import React, { Component } from 'react'
import {DropDownDiv, DropDownButton, DropDownContent, DropDownOption, DropDownOptionHeading, DropDownOptionDescription} from "./projects-filter-dropdown.styles";
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
        let {key, type} = e.target.dataset;
        this.props.onChange(key, type)
        this.setState({dropDownSwitch:false, selected: key});
    }

    render() {
       
        let {options, field} = this.props;
        let {selected} = this.state;

        let selectedIndex = 0;
        options.map((option, index)=> {
            if(option === selected){
                selectedIndex = index;
            }
        })
        return (
            <DropDownDiv ref={this.dropdownContainer}>
                <DropDownButton onClick={this.DropDownToggle} img={DownArrow}>{options[selectedIndex]}</DropDownButton>
                    <DropDownContent display={this.state.dropDownSwitch?"block":"none"}>

                        <DropDownOption data-type={field} data-key={options[selectedIndex]} onClick={this.handleOptionClick} backgroundFlag = {true}>
                        <DropDownOptionHeading  data-type={field} data-key={options[selectedIndex]} onClick={this.handleOptionClick}>{options[selectedIndex]}</DropDownOptionHeading>
                        
                        </DropDownOption>
                        
                            {
                            options.map((option) => {
                                let selectedFlag = false;
                                
                                if(option != selected){
                                    return(
                                        <DropDownOption data-type={field} data-key={option} onClick={this.handleOptionClick} backgroundFlag = {selectedFlag}>
                                            <DropDownOptionHeading  data-type={field} data-key={option}  onClick={this.handleOptionClick}>{option}</DropDownOptionHeading>
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