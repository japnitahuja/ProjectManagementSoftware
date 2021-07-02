import React, { Component } from "react";
import {
  DropDownDiv,
  DropDownButton,
  DropDownContent,
  DropDownOption,
  DropDownOptionHeading,
  DropDownOptionDescription,
} from "./form-dropdown.styles";
import DownArrow from "../../../assets/down-arrow.png";

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.dropdownContainer = React.createRef();
    this.state = {
      dropDownSwitch: false,
      selected: this.props.selected,
    };
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
      dropDownSwitch: !prevState.dropDownSwitch,
    }));
  };

  handleOptionClick = (e) => {
    e.preventDefault();
    let { permission } = e.target.dataset;

    let id = "";

    this.props.costbook.map((cost) => {
      if (cost.categoryName === permission) {
        id = cost._id;
      }
    });

    this.props.onChange({
      target: { name: "categoryId", value: id, catName: permission },
    });

    this.setState((prevState) => ({
      dropDownSwitch: !prevState.dropDownSwitch,
      selected: permission,
    }));
  };

  render() {
    let { options } = this.props;
    let { selected } = this.state;

    let selectedIndex = 0;
    options.map((option, index) => {
      if (option === selected) {
        selectedIndex = index;
      }
    });

    return (
      <DropDownDiv ref={this.dropdownContainer}>
        <DropDownButton onClick={this.DropDownToggle} img={DownArrow}>
          {options[selectedIndex]}
        </DropDownButton>
        <DropDownContent display={this.state.dropDownSwitch ? "block" : "none"}>
          <DropDownOption
            data-permission={options[selectedIndex]}
            onClick={this.handleOptionClick}
            backgroundFlag={true}
          >
            <DropDownOptionHeading
              data-permission={options[selectedIndex]}
              onClick={this.handleOptionClick}
            >
              {options[selectedIndex]}
            </DropDownOptionHeading>
          </DropDownOption>

          {options.map((option) => {
            let selectedFlag = false;
            if (option != selected) {
              return (
                <DropDownOption
                  data-permission={option}
                  onClick={this.handleOptionClick}
                  backgroundFlag={selectedFlag}
                >
                  <DropDownOptionHeading
                    data-permission={option}
                    onClick={this.handleOptionClick}
                  >
                    {option}
                  </DropDownOptionHeading>
                </DropDownOption>
              );
            }
          })}
        </DropDownContent>
      </DropDownDiv>
    );
  }
}

export default DropDown;
