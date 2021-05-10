import React, { Component } from "react";
import Switch from "react-switch";

class ToggleButton extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <label>
        <Switch 
            onChange={this.props.onToggleFunction} 
            checked={this.props.checked} 
            onColor={this.props.color}
            uncheckedIcon={false}
            checkedIcon={false}
            height={26}
            width={48}
            />
      </label>
    );
  }
}

export default ToggleButton;